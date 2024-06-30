import AuthBtnContainerComponent from "../auth_btn_container/auth_btn_container.component.jsx";

const GetStartedComponent = () => {
  return (
    <div
      className="m-auto grid max-h-fit w-fit min-w-full place-items-start content-start gap-2 rounded-xl bg-white p-8 font-body text-body shadow md:min-w-[40rem]">
      <h2 className="text-xl font-semibold">Get started</h2>
      <p className="mb-4 text-gray-800">
        We are excited to have you on board! Please consider a way to sign up or
        log in
      </p>
      <AuthBtnContainerComponent />
    </div>
  );
};

export default GetStartedComponent;
