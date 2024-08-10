import { useNavigate } from "react-router-dom";
import ErrorComponent from "../component/Error.component.jsx";

export const ErrorRoute = () => {
  const navigate = useNavigate();

  const actionFunction = () => {
    navigate("/");
  };

  const ERROR_DETAILS = {
    errorCode: "404 | Page Not Found",
    errorMessage:
      "Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please check the URL for any mistakes or use the button below to go back to the homepage.",
    actionLabel: "Go to Home",
    actionFunction: actionFunction,
  };

  return <ErrorComponent ERROR_DETAILS={ERROR_DETAILS} />;
};
