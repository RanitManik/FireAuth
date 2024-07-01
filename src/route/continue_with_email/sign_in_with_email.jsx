import InputComponent from "../../component/input/input.component.jsx";
import CheckboxComponent from "../../component/checkbox/checkbox.component.jsx";
import ButtonComponent from "../../component/button/button.component.jsx";
import LogoComponent from "../../component/logo/logo.component.jsx";
import LinkTextComponent from "../../component/link_text/link_text_component.jsx";
import HorizontalRuler from "../../component/horizontal_ruler/horizontal_ruler.jsx";

const LogInWithEmail = () => {
  const checkBoxLabel = <>Remember me</>;
  return (
    <div className="m-auto max-h-fit w-fit min-w-full rounded-xl bg-white p-8 text-body shadow sm:min-w-[30rem]">
      <LogoComponent />
      <h1 className="mt-4 text-center text-2xl">Welcome Back!</h1>
      <p className="my-2 text-center text-gray-500">
        Enter your details to sign in
      </p>
      <InputComponent name="email" type="email" placeholder="Email" />
      <InputComponent name="password" type="password" placeholder="Password" />
      <CheckboxComponent checkBoxLabel={checkBoxLabel} />
      <ButtonComponent type="submit" text="Sign up" />
      <HorizontalRuler />
      <div className="flex flex-wrap justify-center gap-2 px-8 text-center">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Doesn't have an account?</p>
        <LinkTextComponent to="/email/signup" text="Sign up" />
      </div>
    </div>
  );
};

export default LogInWithEmail;
