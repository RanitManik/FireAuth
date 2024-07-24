import LogoComponent from "./Logo.component.jsx";

const WelcomeComponent = () => (
  <div className="mb-4 grid justify-items-center gap-4">
    <LogoComponent />
    <p className="text-center text-2xl text-gray-500">
      Welcome to <span className="font-semibold text-black">FireSign</span>
    </p>
  </div>
);

export default WelcomeComponent;
