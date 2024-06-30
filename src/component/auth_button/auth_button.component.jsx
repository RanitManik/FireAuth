// eslint-disable-next-line react/prop-types
const AuthButton = ({ imgSrc, altText, buttonText }) => {
  return (
    <button className="flex gap-4 rounded-md border border-neutral-300 p-4 text-start text-gray-600 transition hover:border-neutral-400 hover:bg-gray-200 focus:border-neutral-500 focus:bg-gray-200 focus:outline-none active:border-neutral-600 active:bg-gray-100">
      <img className="h-6 w-6" src={imgSrc} alt={altText} />
      {buttonText}
    </button>
  );
};

export default AuthButton;
