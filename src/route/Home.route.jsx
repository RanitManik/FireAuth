import WelcomeComponent from "../component/Welcome.component.jsx";
import GetStartedComponent from "../component/GetStarted.component.jsx";
import { useContext } from "react";
import { UserContext } from "../context/User.context.jsx";
import ButtonComponent from "../component/Button.component.jsx";
import { signOutUser } from "../util/firebase.util.js";

const HomeRoute = () => {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);

  if (!currentUser) {
    return (
      <div className="m-auto max-w-fit">
        <WelcomeComponent />
        <GetStartedComponent />
      </div>
    );
  }

  return (
    <div className="m-auto max-h-fit w-fit min-w-full rounded-xl bg-white p-8 text-body shadow sm:min-w-[30rem]">
      <img
        className="m-auto h-16 w-16 rounded-full"
        src={currentUser.photoURL}
        alt="User Avatar"
      />
      <div className="bg-blue-400 p-4">
        <span>Name</span>
        <span>{currentUser.displayName || "User"}</span>
      </div>
      <div className="bg-blue-400 p-4">
        <span>Email</span>
        <span>{currentUser.email || "No email found"}</span>
      </div>
      <ButtonComponent onClick={signOutUser} text="Log out" />
    </div>
  );
};

export default HomeRoute;
