import InputComponent from "../component/Input.component.jsx";
import CheckboxComponent from "../component/Checkbox.component.jsx";
import ButtonComponent from "../component/Button.component.jsx";
import LinkTextComponent from "../component/LinkText.component.jsx";
import HorizontalRuler from "../component/HorizontalRuler.component.jsx";
import { Link } from "react-router-dom";

const SignInWithEmailComponent = () => {
  const checkBoxLabel = <>Remember me</>;
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 grid content-center gap-6 bg-gray-100/50 p-4 backdrop-blur-sm animate-in fade-in zoom-in">
      <div className="m-auto max-h-fit w-fit min-w-full rounded-xl bg-white p-8 text-body shadow sm:min-w-[30rem]">
        <h1 className="text-center text-2xl">Welcome Back!</h1>
        <p className="my-2 text-center text-gray-500">
          Enter your details to sign in
        </p>
        <InputComponent
          autoFocus
          name="email"
          type="email"
          placeholder="Email"
        />
        <InputComponent
          name="password"
          type="password"
          placeholder="Password"
        />
        <CheckboxComponent checkBoxLabel={checkBoxLabel} />
        <ButtonComponent type="submit" text="Log in" />
        <HorizontalRuler />
        <div className="flex flex-wrap justify-center gap-2 px-8 text-center">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p>Doesn't have an account?</p>
          <LinkTextComponent to="/signup/email" text="Sign up" />
        </div>
      </div>
      <Link
        to="/"
        className="text-center font-bold text-blue-500 underline underline-offset-2 transition hover:text-blue-600"
      >
        Choose a different Method for Signing
      </Link>
    </div>
  );
};

export default SignInWithEmailComponent;
