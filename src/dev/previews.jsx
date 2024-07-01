import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import WelcomeComponent from "../component/welcome/welcome.component.jsx";
import InputComponent from "../component/input/input.component.jsx";
import SignUpWithEmail from "../route/continue_with_email/sign_up_with_email.jsx";
import GetStartedComponent from "../component/get_started/get_started.component.jsx";
import Home from "../route/home/home.jsx";
import ButtonComponent from "../component/button/button.component.jsx";
import LogInWithEmail from "../route/continue_with_email/sign_in_with_email.jsx";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/WelcomeComponent">
        <WelcomeComponent />
      </ComponentPreview>
      <ComponentPreview path="/InputComponent">
        <InputComponent />
      </ComponentPreview>
      <ComponentPreview path="/ContinueWithEmail">
        <SignUpWithEmail />
      </ComponentPreview>
      <ComponentPreview path="/GetStartedComponent">
        <GetStartedComponent />
      </ComponentPreview>
      <ComponentPreview path="/Home">
        <Home />
      </ComponentPreview>
      <ComponentPreview path="/ButtonComponent">
        <ButtonComponent />
      </ComponentPreview>
      <ComponentPreview path="/LogInWithEmail">
        <LogInWithEmail />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
