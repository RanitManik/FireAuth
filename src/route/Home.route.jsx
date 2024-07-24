import WelcomeComponent from "../component/Welcome.component.jsx";
import GetStartedComponent from "../component/GetStarted.component.jsx";

const HomeRoute = () => {
  return (
    <div className="m-auto max-w-fit">
      <WelcomeComponent />
      <GetStartedComponent />
    </div>
  );
};

export default HomeRoute;
