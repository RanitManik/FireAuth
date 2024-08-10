const ErrorMessages = {
  "auth/email-already-in-use":
    "This email is already in use. Please use a different email address or sign in.",
  "auth/invalid-email":
    "The email address is not valid. Please check and try again.",
  "auth/operation-not-allowed":
    "This operation is not allowed. Please try again later.",
  "auth/weak-password":
    "The password is too weak. Please choose a stronger password.",
  "auth/missing-password": "Password is required. Please enter your password.",
  "auth/account-exists-with-different-credential":
    "This email is associated with an existing account. Please sign in using the appropriate method.",
  "auth/invalid-credential":
    "The provided credentials are invalid. Please check and try again.",
  "auth/wrong-password": "The password is incorrect. Please try again.",
  "auth/user-not-found":
    "No user found with this email. Please check your email or sign up.",
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
