import { assets } from "../../asset/assets";
import AuthButton from "../auth_button/auth_button.component.jsx";
import {
  signInWithFacebookPopup,
  signInWithGithubPopup,
  signInWithGooglePopup,
  signInWithTwitterPopup,
} from "../../util/firebase/firebase.util.js";

const AuthBtnContainerComponent = () => {
  const authButtons = [
    {
      imgSrc: assets.email,
      altText: "Email",
      buttonText: "Continue with Email",
      route: "/email/signup",
    },
    {
      imgSrc: assets.phone,
      altText: "Phone",
      buttonText: "Continue with Phone",
      route: "/phone",
    },
    {
      imgSrc: assets.google,
      altText: "Google",
      buttonText: "Continue with Google",
      authFunction: signInWithGooglePopup,
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
  ];

  return (
    <div className="grid w-full gap-4 md:grid-cols-2">
      {authButtons.map((btn, index) => (
        <AuthButton
          key={index}
          imgSrc={btn.imgSrc}
          altText={btn.altText}
          buttonText={btn.buttonText}
          route={btn.route}
          authFunction={btn.authFunction}
        />
      ))}
    </div>
  );
};

export default AuthBtnContainerComponent;
