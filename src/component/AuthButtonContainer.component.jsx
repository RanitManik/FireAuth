import { assets } from "../asset/assets.js";
import AuthButton from "./AuthButton.component.jsx";
import { useFirebase } from "../context/Firebase.context.jsx";
import { toast } from "sonner";
import useErrorHandlerComponent from "../hooks/LoginErrorHandler.hook.jsx";

const AuthBtnContainerComponent = () => {
    const {
        signInWithGooglePopup,
        signInWithGithubPopup,
        signInWithTwitterPopup,
        signInWithFacebookPopup,
        signInWithMicrosoftPopup,
        signInWithYahooPopup,
    } = useFirebase();
    const { generateErrorMessage } = useErrorHandlerComponent();

    const authButtons = [
        {
            imgSrc: assets.email,
            altText: "Email",
            buttonText: "Continue with Email",
            route: "/login/email",
        },
        {
            imgSrc: assets.phone,
            altText: "Phone",
            buttonText: "Continue with Phone",
            route: "/login/phone",
        },
        {
            imgSrc: assets.google,
            altText: "Google",
            buttonText: "Continue with Google",
            authFunction: signInWithGooglePopup,
        },
        {
            imgSrc: assets.microsoft,
            altText: "Microsoft",
            buttonText: "Continue with Microsoft",
            authFunction: signInWithMicrosoftPopup,
        },
        {
            imgSrc: assets.github,
            altText: "GitHub",
            buttonText: "Continue with GitHub",
            authFunction: signInWithGithubPopup,
        },
        {
            imgSrc: assets.twitter,
            altText: "Twitter",
            buttonText: "Continue with Twitter",
            authFunction: signInWithTwitterPopup,
        },
        {
            imgSrc: assets.facebook,
            altText: "Facebook",
            buttonText: "Continue with Facebook",
            authFunction: signInWithFacebookPopup,
        },
        {
            imgSrc: assets.yahoo,
            altText: "Yahoo",
            buttonText: "Continue with Yahoo",
            authFunction: signInWithYahooPopup,
        },
    ];

    const onClickHandler = async (onClick) => {
        const signInPromise = async () => {
            await onClick();
            console.log("Successfully Signed in...");
        };
        toast.promise(signInPromise(), {
            loading: "Loading...",
            success: "Sign-up successful",
            error: (error) => {
                console.log(error);
                return generateErrorMessage(error.code);
            },
        });
    };

    return (
        <div className="grid w-full gap-4 md:grid-cols-2">
            {authButtons.map((btn, index) => (
                <AuthButton
                    key={index}
                    imgSrc={btn.imgSrc}
                    altText={btn.altText}
                    buttonText={btn.buttonText}
                    route={btn.route}
                    authFunction={
                        btn.authFunction &&
                        (() => onClickHandler(btn.authFunction))
                    }
                />
            ))}
        </div>
    );
};

export default AuthBtnContainerComponent;
