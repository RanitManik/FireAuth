import WelcomeComponent from "../../component/welcome/welcome.component.jsx";
import GetStartedComponent from "../../component/get_started/get_started.component.jsx";

const Home = () => {
  return (
    <div className="m-auto max-w-fit">
      <WelcomeComponent />
      <GetStartedComponent />
    </div>
  );
};

export default Home;
