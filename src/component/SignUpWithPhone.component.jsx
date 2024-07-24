import InputComponent from "./Input.component.jsx";
import CheckboxComponent from "./Checkbox.component.jsx";
import ButtonComponent from "./Button.component.jsx";
import HorizontalRuler from "./HorizontalRuler.component.jsx";
import LinkTextComponent from "./LinkText.component.jsx";
import { Link } from "react-router-dom";

export const SignUpWithPhoneComponent = () => {
  const checkBoxLabel = (
    <>
      I agree with <LinkTextComponent to="/" text="Terms" /> and{" "}
      <LinkTextComponent to="/" text="Privacy" />
    </>
  );
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 grid content-center gap-6 bg-gray-100/50 p-4 backdrop-blur-sm animate-in fade-in zoom-in">
      <div className="m-auto max-h-fit w-fit min-w-full rounded-xl bg-white p-8 text-body shadow sm:min-w-[30rem]">
        <h1 className="text-center text-2xl">Create a new Account</h1>
        <p className="my-2 text-center text-gray-500">
          add your details to get started
        </p>
        <InputComponent
          autoFocus
          name="name"
          type="text"
          placeholder="Full Name"
        />
        <InputComponent name="email" type="email" placeholder="Email" />
        <InputComponent
          name="password"
          type="password"
          placeholder="Password"
        />
        <CheckboxComponent checkBoxLabel={checkBoxLabel} />
        <ButtonComponent type="submit" text="Sign up" />
        <HorizontalRuler />
        <div className="flex flex-wrap justify-center gap-2 px-8 text-center">
          <p>Already have an account?</p>
          <LinkTextComponent to="/login/phone" text="Log in" />
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
