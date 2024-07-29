import WelcomeComponent from "../component/Welcome.component.jsx";
import GetStartedComponent from "../component/GetStarted.component.jsx";
import { useFirebase } from "../context/firebase.context.jsx";
import ProfileComponent from "../component/Profile.component.jsx";
import LoaderCircleComponent from "../component/LoaderCircle.component.jsx";

const HomeRoute = () => {
  const { user, isLoggedIn, loading, updatingProfile } = useFirebase();
  console.log(isLoggedIn);
  console.log(user);

  if (loading || updatingProfile) {
    return <LoaderCircleComponent />;
  } else if (!isLoggedIn) {
    return (
      <div className="m-auto max-w-fit duration-500 animate-in fade-in">
        <WelcomeComponent />
        <GetStartedComponent />
      </div>
    );
  }

  return <ProfileComponent user={user} />;
};

export default HomeRoute;
