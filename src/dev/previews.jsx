import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import SignInWithEmailComponent from "../component/SignInWithEmail.component.jsx";
import GetStartedComponent from "../component/GetStarted.component.jsx";
import AuthBtnContainerComponent from "../component/AuthButtonContainer.component.jsx";
import WelcomeComponent from "../component/Welcome.component.jsx";
import ProfileRoute from "../route/Profile.route.jsx";
import { SignInWithPhoneComponent } from "../component/SignInWithPhone.component.jsx";
import { SignUpWithPhoneComponent } from "../component/SignUpWithPhone.component.jsx";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/SignInWithEmailComponent">
        <SignInWithEmailComponent />
      </ComponentPreview>
      <ComponentPreview path="/ComponentPreviews">
        <ComponentPreviews />
      </ComponentPreview>
      <ComponentPreview path="/GetStartedComponent">
        <GetStartedComponent />
      </ComponentPreview>
      <ComponentPreview path="/AuthBtnContainerComponent">
        <AuthBtnContainerComponent />
      </ComponentPreview>
      <ComponentPreview path="/WelcomeComponent">
        <WelcomeComponent />
      </ComponentPreview>
      <ComponentPreview path="/ProfileRoute">
        <ProfileRoute />
      </ComponentPreview>
      <ComponentPreview path="/SignInWithPhoneComponent">
        <SignInWithPhoneComponent />
      </ComponentPreview>
      <ComponentPreview path="/SignUpWithPhoneComponent">
        <SignUpWithPhoneComponent />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
