import WelcomeComponent from "../component/Welcome.component.jsx";
import GetStartedComponent from "../component/GetStarted.component.jsx";
import { useFirebase } from "../context/Firebase.context.jsx";
import ProfileComponent from "../component/Profile.component.jsx";
import LoaderCircleComponent from "../component/LoaderCircle.component.jsx";
import BackgroundComponent from "../component/Background.component.jsx";

const HomeRoute = () => {
    const { user, isLoggedIn, authCheckLoading } = useFirebase();

    if (authCheckLoading) {
        return (
            <BackgroundComponent>
                <LoaderCircleComponent />
            </BackgroundComponent>
        );
    } else if (!isLoggedIn) {
        return (
            <BackgroundComponent>
                <div className="m-auto max-w-fit duration-500 animate-in fade-in">
                    <WelcomeComponent />
                    <GetStartedComponent />
                </div>
            </BackgroundComponent>
        );
    }

    return (
        <BackgroundComponent>
            <ProfileComponent user={user} />
        </BackgroundComponent>
    );
};

export default HomeRoute;
