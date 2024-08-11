// eslint-disable-next-line react-refresh/only-export-components
const ErrorMessages = {
    "auth/email-already-in-use":
        "This email is already in use. Please use a different email address or sign in.",
    "auth/invalid-email":
        "The email address is not valid. Please check and try again.",
    "auth/operation-not-allowed":
        "This operation is not allowed. Please try again later.",
    "auth/weak-password":
        "The password is too weak. Please choose a stronger password.",
    "auth/missing-password":
        "Password is required. Please enter your password.",
    "auth/account-exists-with-different-credential":
        "This email is associated with an existing account. Please sign in using the appropriate method.",
    "auth/invalid-credential":
        "The provided credentials are invalid. Please check and try again.",
    "auth/wrong-password": "The password is incorrect. Please try again.",
    "auth/user-not-found":
        "No user found with this email. Please check your email or sign up.",
    "auth/invalid-app-credential":
        "The provided credentials are invalid. Please check and try again.",
    "auth/invalid-phone-number":
        "The phone number provided is invalid. Please check and try again.",
    "auth/missing-phone-number":
        "Phone number is required. Please enter your phone number.",
    "auth/quota-exceeded":
        "Quota exceeded for phone authentication. Please try again later.",
    "auth/phone-number-already-exists":
        "The phone number is already in use. Please use a different phone number or sign in.",
    "auth/invalid-verification-code":
        "The verification code is incorrect. Please check the code and try again.",
    "auth/verification-code-expired":
        "The verification code has expired. Please request a new code.",
    "auth/invalid-recipient-email":
        "The recipient email is invalid. Please check and try again.",
    "auth/recaptcha-verifier-not-created":
        "Recaptcha verifier could not be initialized. Please reload the page and try again.",
    "auth/too-many-requests":
        "You have made too many requests in a short period of time. Please try again later.",
};

const useErrorHandlerComponent = () => {
    const generateErrorMessage = (errorCode) => {
        console.log(errorCode);
        return (
            ErrorMessages[errorCode] ||
            "An unexpected error occurred. Please try again."
        );
    };

    return { generateErrorMessage };
};

export default useErrorHandlerComponent;
