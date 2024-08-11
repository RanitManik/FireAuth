import { useNavigate } from "react-router-dom";

const AuthButtonsContainerComponent = ({
    imgSrc,
    altText,
    buttonText,
    authFunction,
    route,
}) => {
    const handleClick = () => {
        if (authFunction) {
            authFunction();
        } else if (route) {
            navigate(route);
        }
    };

    const navigate = useNavigate();

    const buttonContent = (
        <div className="flex w-full gap-4 rounded-md border border-neutral-300 p-4 text-start text-gray-600 transition hover:border-neutral-100 hover:bg-gray-200 focus:border-neutral-500 focus:bg-gray-200 focus:outline-none active:border-neutral-600 active:bg-gray-100">
            <img className="h-6 w-6" src={imgSrc} alt={altText} />
            {buttonText}
        </div>
    );

    return (
        <button
            onClick={handleClick}
            className="rounded-md focus-visible:bg-gray-100 focus-visible:outline-blue-400"
        >
            {buttonContent}
        </button>
    );
};

export default AuthButtonsContainerComponent;
