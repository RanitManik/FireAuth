import ButtonComponent from "../component/Button.component.jsx";
import { assets } from "../asset/assets";

const ProfileRoute = () => {
  return (
    <div className="m-auto max-h-fit w-fit min-w-full rounded-xl bg-white p-8 text-body shadow sm:min-w-[30rem]">
      <img className="m-auto h-16 w-16 rounded-full" src={assets.user} alt="" />
      <div className="bg-blue-400 p-4">
        <span>Name</span>
        <span>Ranit Manik</span>
      </div>
      <div className="bg-blue-400 p-4">
        <span>Email</span>
        <span>ranitmanik@gmail.com</span>
      </div>
      <ButtonComponent text="Log out" />
    </div>
  );
};

export default ProfileRoute;
