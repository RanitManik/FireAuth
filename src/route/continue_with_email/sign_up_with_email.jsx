import InputComponent from "../../component/input/input.component.jsx";
import CheckboxComponent from "../../component/checkbox/checkbox.component.jsx";
import ButtonComponent from "../../component/button/button.component.jsx";
import LogoComponent from "../../component/logo/logo.component.jsx";
import LinkTextComponent from "../../component/link_text/link_text_component.jsx";
import HorizontalRuler from "../../component/horizontal_ruler/horizontal_ruler.jsx";

const SignUpWithEmail = () => {
  const checkBoxLabel = (
    <>
      I agree with <LinkTextComponent to="/" text="Terms" /> and{" "}
      <LinkTextComponent to="/" text="Privacy" />
    </>
  );
  return (
    <div className="m-auto max-h-fit w-fit min-w-full rounded-xl bg-white p-8 text-body shadow sm:min-w-[30rem]">
      <LogoComponent />
      <h1 className="mt-4 text-center text-2xl">Create a new Account</h1>
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
      <InputComponent name="password" type="password" placeholder="Password" />
      <CheckboxComponent checkBoxLabel={checkBoxLabel} />
      <ButtonComponent type="submit" text="Sign up" />
      <HorizontalRuler />
      <div className="flex flex-wrap justify-center gap-2 px-8 text-center">
        <p>Already have an account?</p>
        <LinkTextComponent to="/email/login" text="Log in" />
      </div>
    </div>
  );
};

export default SignUpWithEmail;
