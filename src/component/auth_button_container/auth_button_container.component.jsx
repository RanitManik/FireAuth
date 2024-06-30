import { assets } from "../../asset/assets";
import AuthButton from "../auth_button/auth_button.component.jsx";

const AuthBtnContainerComponent = () => {
  const authButtons = [
    {
      imgSrc: assets.email,
      altText: "Email",
      buttonText: "Continue with email",
    },
    {
      imgSrc: assets.phone,
      altText: "Phone",
      buttonText: "Continue with phone",
    },
    {
      imgSrc: assets.google,
      altText: "Google",
      buttonText: "Continue with Google",
    },
    {
      imgSrc: assets.github,
      altText: "GitHub",
      buttonText: "Continue with GitHub",
    },
    {
      imgSrc: assets.microsoft,
      altText: "Microsoft",
      buttonText: "Continue with Microsoft",
    },
    {
      imgSrc: assets.apple,
      altText: "Apple",
      buttonText: "Continue with Apple",
    },
    {
      imgSrc: assets.twitter,
      altText: "Twitter",
      buttonText: "Continue with Twitter",
    },
    {
      imgSrc: assets.facebook,
      altText: "Facebook",
      buttonText: "Continue with Facebook",
    },
    {
      imgSrc: assets.yahoo,
      altText: "Yahoo",
      buttonText: "Continue with Yahoo",
    },
    {
      imgSrc: assets.PlayGame,
      altText: "Play Games",
      buttonText: "Continue with Play Games",
    },
  ];
  return (
    <div className="grid w-full gap-4 md:grid-cols-2">
      {authButtons.map((btn, index) => (
        <AuthButton
          key={index}
          imgSrc={btn.imgSrc}
          altText={btn.altText}
          buttonText={btn.buttonText}
        />
      ))}
    </div>
  );
};
export default AuthBtnContainerComponent;
