import ButtonComponent from "./Button.component.jsx";
import { useFirebase } from "../context/Firebase.context.jsx";
import { assets } from "../asset/assets.js";
import { useState } from "react";

const ProfileComponent = ({ user }) => {
    const { signOutUser } = useFirebase();
    const [profileImageLoading, setProfileImageLoading] = useState(true);
    return (
        <div className="m-auto grid max-h-fit w-fit min-w-full gap-4 rounded-xl bg-white p-8 text-body shadow duration-500 animate-in fade-in sm:min-w-[30rem]">
            <div
                className={`m-auto h-20 w-20 overflow-hidden rounded-full bg-gray-300 ${profileImageLoading ? "animate-pulse" : ""}`}
            >
                <img
                    className={`object-cover transition-all duration-300 ${profileImageLoading ? "opacity-0" : ""}`}
                    onLoad={() => setProfileImageLoading(false)}
                    src={user.photoURL || assets.userIcon}
                    alt="User Avatar"
                />
            </div>
            <div>
                <label className="mb-1 block font-semibold" htmlFor="name">
                    Name
                </label>
                <input
                    className="w-full rounded-md border px-4 py-2 text-gray-900 caret-blue-600 shadow focus:border-blue-400 focus:shadow-blue-400 focus:outline-blue-400 focus:ring-0"
                    id="name"
                    readOnly
                    value={user.displayName || "User"}
                />
            </div>
            <div>
                <label className="mb-1 block font-semibold" htmlFor="email">
                    Email
                </label>
                <input
                    className="w-full rounded-md border px-4 py-2 text-gray-900 caret-blue-600 shadow focus:border-blue-400 focus:shadow-blue-400 focus:outline-blue-400 focus:ring-0"
                    id="email"
                    readOnly
                    value={user.email || "No email found"}
                />
            </div>
            <ButtonComponent onClick={signOutUser} text="Log out" />
        </div>
    );
};

export default ProfileComponent;
