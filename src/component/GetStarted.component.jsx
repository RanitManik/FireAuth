import AuthButtonsContainerComponent from "../component/AuthButtonContainer.component.jsx";

const GetStartedComponent = () => {
  return (
    <div className="m-auto grid max-h-fit w-fit min-w-full place-items-start content-start gap-2 rounded-xl bg-white p-8 text-body shadow md:min-w-[45rem]">
      <h1 className="text-xl font-semibold">Get started</h1>
      <p className="mb-4 text-gray-800">
        We are excited to have you on board! Please consider a way to sign up or
        log in
      </p>
      <AuthButtonsContainerComponent />
    </div>
  );
};

export default GetStartedComponent;
