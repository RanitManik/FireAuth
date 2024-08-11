import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import InputComponent from "./Input.component.jsx";
import ButtonComponent from "./Button.component.jsx";
import HorizontalRuler from "./HorizontalRuler.component.jsx";
import LinkTextComponent from "./LinkText.component.jsx";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useFirebase } from "../context/Firebase.context.jsx";
import useErrorHandlerComponent from "../hooks/LoginErrorHandler.hook.jsx";
import { DifferentSignInMethodComponent } from "./DifferentSignInMethod.component.jsx";

export const SignInWithPhoneComponent = () => {
    const { firebaseAuth, isLoggedIn } = useFirebase();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [confirmation, setConfirmation] = useState(null);
    const [otp, setOtp] = useState("");
    const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
    const { generateErrorMessage } = useErrorHandlerComponent();

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) navigate("/");
    }, [isLoggedIn, navigate]);

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
            success: "OTP sent successfully",
            error: (error) => generateErrorMessage(error.code),
        });
    };

    const otpVerifyHandler = async (e) => {
        e.preventDefault();
        const verifyOTP = async () => {
            const userCredential = await confirmation.confirm(otp);
            toast.success("OTP verified successfully.");
            if (userCredential && userCredential.user) {
                console.log("Successfully Signed in!");
            } else {
                console.log("User credential is undefined");
            }
        };

        toast.promise(verifyOTP(), {
            loading: "Loading...",
            success: "OTP verified successfully",
            error: (error) => generateErrorMessage(error.code),
        });
    };

    return (
        <div className="grid content-center gap-4 bg-gray-100/50 animate-in fade-in">
            {!confirmation ? (
                <form
                    onSubmit={otpSendHandler}
                    className="m-auto max-h-fit w-fit min-w-full rounded-xl bg-white p-8 text-body shadow sm:min-w-[30rem]"
                >
                    <h1 className="text-2xl font-semibold">Welcome Back!</h1>
                    <p className="mb-2 text-gray-500">
                        Enter your details to sign in
                    </p>
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
                                autoFocus: true,
                            }}
                            id="phoneInput"
                            country="in"
                            value={phoneNumber}
                            onChange={(value) => setPhoneNumber(value)}
                            className="mt-1"
                        />
                    </div>
                    <div
                        className="mt-4 grid place-items-center"
                        id="recaptcha-container"
                    ></div>
                    <ButtonComponent type="submit" text="Send OTP" />
                    <HorizontalRuler />
                    <div className="flex flex-wrap justify-center gap-2 px-8 text-center">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p>Doesn't have an account?</p>
                        <LinkTextComponent to="/signup/phone" text="Sign up" />
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
