import ButtonComponent from "./Button.component.jsx";
import { useFirebase } from "../context/Firebase.context.jsx";
import { assets } from "../asset/assets.js";
import { useState } from "react";
import { toast } from "sonner";
import useErrorHandlerComponent from "../hooks/LoginErrorHandler.hook.jsx";

const ProfileComponent = ({ user }) => {
    console.log(user);
    const { signOutUser } = useFirebase();
    const [profileImageLoading, setProfileImageLoading] = useState(true);
    const { generateErrorMessage } = useErrorHandlerComponent();

    const handleSignOutUser = async () => {
        const signOutUserAndRenderToast = async () => {
            await signOutUser();
        };
        toast.promise(signOutUserAndRenderToast(), {
            loading: "Signing out, please wait...",
            success: "You have been signed out successfully.",
            error: (error) => {
                console.log(error);
                return generateErrorMessage(error.code);
            },
        });
    };

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
            {user.displayName && (
                <div>
                    <label className="mb-1 block font-semibold" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full rounded-md border px-4 py-2 text-gray-900 caret-blue-600 shadow focus:border-blue-400 focus:shadow-blue-400 focus:outline-blue-400 focus:ring-0"
                        id="name"
                        readOnly
                        value={user.displayName}
                    />
                </div>
            )}
            {user.email && (
                <div>
                    <label className="mb-1 block font-semibold" htmlFor="email">
                        Email{" "}
                        {user.emailVerified ? (
                            <span className="text-green-600">verified</span>
                        ) : (
                            <span className="text-red-600">not verified</span>
                        )}
                    </label>
                    <input
                        className="w-full rounded-md border px-4 py-2 text-gray-900 caret-blue-600 shadow focus:border-blue-400 focus:shadow-blue-400 focus:outline-blue-400 focus:ring-0"
                        id="email"
                        readOnly
                        value={user.email}
                    />
                </div>
            )}

            {user.phoneNumber && (
                <div>
                    <label className="mb-1 block font-semibold" htmlFor="email">
                        Phone
                    </label>
                    <input
                        className="w-full rounded-md border px-4 py-2 text-gray-900 caret-blue-600 shadow focus:border-blue-400 focus:shadow-blue-400 focus:outline-blue-400 focus:ring-0"
                        id="email"
                        readOnly
                        value={user.phoneNumber}
                    />
                </div>
            )}

            {user.uid && (
                <div>
                    <label className="mb-1 block font-semibold" htmlFor="email">
                        User ID
                    </label>
                    <input
                        className="w-full rounded-md border px-4 py-2 text-gray-900 caret-blue-600 shadow focus:border-blue-400 focus:shadow-blue-400 focus:outline-blue-400 focus:ring-0"
                        id="email"
                        readOnly
                        value={user.uid}
                    />
                </div>
            )}

            {user.metadata.creationTime && (
                <div>
                    <label className="mb-1 block font-semibold" htmlFor="email">
                        Created At
                    </label>
                    <input
                        className="w-full rounded-md border px-4 py-2 text-gray-900 caret-blue-600 shadow focus:border-blue-400 focus:shadow-blue-400 focus:outline-blue-400 focus:ring-0"
                        id="email"
                        readOnly
                        value={user.metadata.creationTime}
                    />
                </div>
            )}

            {user.metadata.lastSignInTime && (
                <div>
                    <label className="mb-1 block font-semibold" htmlFor="email">
                        Last Signed in At
                    </label>
                    <input
                        className="w-full rounded-md border px-4 py-2 text-gray-900 caret-blue-600 shadow focus:border-blue-400 focus:shadow-blue-400 focus:outline-blue-400 focus:ring-0"
                        id="email"
                        readOnly
                        value={user.metadata.lastSignInTime}
                    />
                </div>
            )}
            <ButtonComponent onClick={handleSignOutUser} text="Log out" />
        </div>
    );
};

export default ProfileComponent;
