import SignInWithEmailComponent from "../component/SignInWithEmail.component.jsx";
import BackgroundComponent from "../component/Background.component.jsx";

export const SignInByEmailRoute = () => {
    return (
        <BackgroundComponent>
            <SignInWithEmailComponent />
        </BackgroundComponent>
    );
};
