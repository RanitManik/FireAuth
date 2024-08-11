import {
    RecaptchaVerifier,
    signInWithPhoneNumber,
    updateProfile,
} from "firebase/auth";
import InputComponent from "./Input.component.jsx";
import CheckboxComponent from "./Checkbox.component.jsx";
import ButtonComponent from "./Button.component.jsx";
import HorizontalRuler from "./HorizontalRuler.component.jsx";
import LinkTextComponent from "./LinkText.component.jsx";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase.context";
import { ProfileImageUploader } from "./ProfileImage.component.jsx";
import { toast } from "sonner";
import LoaderCircleComponent from "./LoaderCircle.component.jsx";
import useErrorHandlerComponent from "../hooks/LoginErrorHandler.hook.jsx";
import { DifferentSignInMethodComponent } from "./DifferentSignInMethod.component.jsx";

export const SignUpWithPhoneComponent = () => {
    const { firebaseAuth, isLoggedIn, uploadProfileImage } = useFirebase();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [confirmation, setConfirmation] = useState(null);
    const [otp, setOtp] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(null);
    const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
    const { generateErrorMessage } = useErrorHandlerComponent();

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn && !loading) navigate("/");
    }, [isLoggedIn, navigate, loading]);

    useEffect(() => {
        if (!recaptchaVerifier) {
            const verifier = new RecaptchaVerifier(
                firebaseAuth,
                "recaptcha-container",
                {},
            );
            setRecaptchaVerifier(verifier);
        }
    }, [firebaseAuth, recaptchaVerifier]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const maxSizeMB = 1;
        const maxSizeBytes = maxSizeMB * 1024 * 1024;
        if (file.size > maxSizeBytes) {
            toast.error("Maximum file size is 1MB");
            return;
        }

        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!allowedTypes.includes(file.type)) {
            toast.error("Allowed file types are .jpg, .jpeg, .png, .gif");
            return;
        }

        setProfileImage(file);
    };

    const otpSendHandler = async (e) => {
        e.preventDefault();
        const sendOTP = async () => {
            if (phoneNumber.length < 10) {
                const error = new Error("Invalid phone number");
                error.code = "auth/invalid-phone-number";
                throw error;
            }
            if (!recaptchaVerifier) {
                const error = new Error("RecaptchaVerifier not created!");
                error.code = "auth/recaptcha-verifier-not-created";
                throw error;
            }
            const userConfirmation = await signInWithPhoneNumber(
                firebaseAuth,
                "+" + phoneNumber,
                recaptchaVerifier,
            );
            setConfirmation(userConfirmation);
        };
        toast.promise(sendOTP(), {
            loading: "Loading...",
            success: "OTP send successful",
            error: (error) => generateErrorMessage(error.code),
        });
    };

    const otpVerifyHandler = async (e) => {
        e.preventDefault();
        const verifyOTP = async () => {
            const userCredential = await confirmation.confirm(otp);

            if (userCredential && userCredential.user) {
                setLoading(true);
                const user = userCredential.user;
                await updateProfile(user, { displayName: name });
                if (profileImage !== null) {
                    const photoURL = await uploadProfileImage(profileImage);
                    await updateProfile(user, { photoURL });
                    console.log("Successfully uploaded user Avatar...");
                }
                console.log("Successfully Signed up!");
                setLoading(false);
            } else {
                console.log("User credential is undefined");
            }
        };
        toast.promise(verifyOTP(), {
            loading: "Loading...",
            success: "account created successfully",
            error: (error) => generateErrorMessage(error.code),
        });
    };

    const checkBoxLabel = (
        <>
            I agree with <LinkTextComponent to="/" text="Terms" /> and{" "}
            <LinkTextComponent to="/" text="Privacy" />
        </>
    );

    if (loading) {
        return <LoaderCircleComponent />;
    }

    return (
        <div className="grid content-center gap-4 bg-gray-100/50 animate-in fade-in">
            {!confirmation ? (
                <form
                    onSubmit={otpSendHandler}
                    className="m-auto max-h-fit w-fit min-w-full rounded-xl bg-white p-8 text-body shadow sm:min-w-[30rem]"
                >
                    <h1 className="text-2xl font-semibold">
                        Create a new Account
                    </h1>
                    <p className="mb-2 text-gray-500">
                        Add your details to get started
                    </p>
                    <ProfileImageUploader
                        profileImage={profileImage}
                        handleFileChange={handleFileChange}
                    />
                    <InputComponent
                        autoFocus
                        required
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                    />
                    <div className="mt-4">
                        <label
                            className="font-semibold text-green-700"
                            htmlFor="phoneInput"
                        >
                            Phone Number
                        </label>
                        <PhoneInput
                            inputProps={{
                                name: "phone",
                                required: true,
                            }}
                            id="phoneInput"
                            country="in"
                            value={phoneNumber}
                            onChange={(value) => setPhoneNumber(value)}
                            className="mt-1"
                        />
                    </div>
                    <CheckboxComponent required checkBoxLabel={checkBoxLabel} />
                    <div
                        id="recaptcha-container"
                        className="grid place-items-center"
                    ></div>
                    <ButtonComponent type="submit" text="Send OTP" />
                    <HorizontalRuler />
                    <div className="flex flex-wrap justify-center gap-2 px-8 text-center">
                        <p>Already have an account?</p>
                        <LinkTextComponent to="/login/phone" text="Log in" />
                    </div>
                </form>
            ) : (
                <form
                    onSubmit={otpVerifyHandler}
                    className="m-auto max-h-fit w-fit min-w-full rounded-xl bg-white p-8 text-body shadow sm:min-w-[30rem]"
                >
                    <InputComponent
                        onChange={(e) => setOtp(e.target.value)}
                        value={otp}
                        name="otp"
                        type="number"
                        placeholder="OTP"
                    />
                    <ButtonComponent type="submit" text="Verify OTP" />
                </form>
            )}
            <DifferentSignInMethodComponent />
        </div>
    );
};
