import WelcomeComponent from "../welcome/welcome.component.jsx";
import GetStartedComponent from "../get_started/get_started.component.jsx";

const DirectoryComponent = () => {
  return (
    <div className="m-auto max-w-fit">
      <WelcomeComponent />
      <GetStartedComponent />
    </div>
  );
};

export default DirectoryComponent;
