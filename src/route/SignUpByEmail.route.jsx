import SignUpWithEmailComponent from "../component/SignUpWithEmail.component.jsx";
import { Toaster } from "sonner";

export const SignUpByEmailRoute = () => {
    return (
        <div className="px-4 py-8">
            <SignUpWithEmailComponent />
            <Toaster richColors />
        </div>
    );
};
