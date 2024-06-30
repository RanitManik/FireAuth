// eslint-disable-next-line react/prop-types
const AuthButton = ({ imgSrc, altText, buttonText }) => {
  return (
    <button className="auth-btn">
      <img src={imgSrc} alt={altText} />
      {buttonText}
    </button>
  );
};

export default AuthButton;
