import { Link } from "react-router-dom";

export const DifferentSignInMethodComponent = () => {
    return (
        <Link
            to="/"
            className="m-auto w-fit rounded-lg bg-white px-6 py-3 text-center font-bold text-blue-500 shadow-md transition hover:bg-blue-500 hover:text-white focus-visible:shadow-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:bg-blue-600 active:ring-2 active:ring-offset-2"
        >
            Choose a different Method for Signing
        </Link>
    );
};
