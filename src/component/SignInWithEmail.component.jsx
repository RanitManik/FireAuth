import InputComponent from "../component/Input.component.jsx";
import CheckboxComponent from "../component/Checkbox.component.jsx";
import ButtonComponent from "../component/Button.component.jsx";
import LinkTextComponent from "../component/LinkText.component.jsx";
import HorizontalRuler from "../component/HorizontalRuler.component.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase.context.jsx";
import { toast } from "sonner";
import useErrorHandlerComponent from "../hooks/LoginErrorHandler.hook.jsx";
import { DifferentSignInMethodComponent } from "./DifferentSignInMethod.component.jsx";

const SignInWithEmailComponent = () => {
    const { signInAuthUserWithEmailAndPassword, user } = useFirebase();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const checkBoxLabel = <>Remember me</>;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { generateErrorMessage } = useErrorHandlerComponent();

    const formSubmissionHandler = async (e) => {
        e.preventDefault();

        const signInPromise = async () => {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password,
            );
            console.log(user);
        };

        toast.promise(signInPromise(), {
            loading: "Signing in, please wait...",
            success: "Sign-in successful! Welcome back.",
            error: (error) => generateErrorMessage(error.code),
        });
    };

    return (
        <>
            <div className="grid content-center gap-4 bg-gray-100/50 animate-in fade-in">
                <form
                    onSubmit={formSubmissionHandler}
                    className="m-auto max-h-fit w-fit min-w-full rounded-xl bg-white p-8 text-body shadow sm:min-w-[30rem]"
                >
                    <h1 className="text-2xl font-semibold">Welcome Back!</h1>
                    <p className="mb-2 text-gray-500">
                        Enter your details to sign in
                    </p>
                    <InputComponent
                        autoFocus
                        required
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <InputComponent
                        required
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <CheckboxComponent checkBoxLabel={checkBoxLabel} />
                    <ButtonComponent type="submit" text="Log in" />
                    <HorizontalRuler />
                    <div className="flex flex-wrap justify-center gap-2 px-8 text-center">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p>Doesn't have an account?</p>
                        <LinkTextComponent to="/signup/email" text="Sign up" />
                    </div>
                </form>
                <DifferentSignInMethodComponent />
            </div>
        </>
    );
};

export default SignInWithEmailComponent;
