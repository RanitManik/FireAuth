import WelcomeComponent from "../component/Welcome.component.jsx";
import GetStartedComponent from "../component/GetStarted.component.jsx";
import { useFirebase } from "../context/Firebase.context.jsx";
import ProfileComponent from "../component/Profile.component.jsx";
import LoaderCircleComponent from "../component/LoaderCircle.component.jsx";
import { Toaster } from "sonner";

const HomeRoute = () => {
  const { user, isLoggedIn, loading } = useFirebase();

  if (loading) {
    return <LoaderCircleComponent />;
  } else if (!isLoggedIn) {
    return (
      <div className="m-auto max-w-fit px-4 py-8 duration-500 animate-in fade-in">
        <WelcomeComponent />
        <GetStartedComponent />
        <Toaster richColors />
      </div>
    );
  }

  return <ProfileComponent user={user} />;
};

export default HomeRoute;
