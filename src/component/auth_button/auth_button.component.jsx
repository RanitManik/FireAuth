import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AuthButton = ({ imgSrc, altText, buttonText, route }) => {
  const buttonContent = (
    <div className="flex w-full gap-4 rounded-md border border-neutral-300 p-4 text-start text-gray-600 transition hover:border-neutral-400 hover:bg-gray-200 focus:border-neutral-500 focus:bg-gray-200 focus:outline-none active:border-neutral-600 active:bg-gray-100">
      <img className="h-6 w-6" src={imgSrc} alt={altText} />
      {buttonText}
    </div>
  );

  return route ? (
    <Link className="rounded-md focus-visible:outline-blue-400" to={route}>
      {buttonContent}
    </Link>
  ) : (
    <button className="rounded-md focus-visible:outline-blue-400">
      {buttonContent}
    </button>
  );
};

export default AuthButton;
