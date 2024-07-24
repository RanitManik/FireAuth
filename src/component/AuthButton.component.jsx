import { useNavigate } from "react-router-dom";

const AuthButtonsContainerComponent = ({
  imgSrc,
  altText,
  buttonText,
  authFunction,
  route,
}) => {
  const buttonContent = (
    <div className="flex w-full gap-4 rounded-md border border-neutral-300 p-4 text-start text-gray-600 transition hover:border-neutral-100 hover:bg-gray-200 focus:border-neutral-500 focus:bg-gray-200 focus:outline-none active:border-neutral-600 active:bg-gray-100">
      <img className="h-6 w-6" src={imgSrc} alt={altText} />
      {buttonText}
    </div>
  );

  const navigate = useNavigate();

  return authFunction ? (
    <button
      onClick={authFunction}
      className="rounded-md focus-visible:bg-gray-100 focus-visible:outline-blue-400"
    >
      {buttonContent}
    </button>
  ) : (
    <button
      onClick={() => navigate(route)}
      className="rounded-md focus-visible:bg-gray-100 focus-visible:outline-blue-400"
    >
      {buttonContent}
    </button>
  );
};

export default AuthButtonsContainerComponent;
