import { SignInWithPhoneComponent } from "../component/SignInWithPhone.component.jsx";
import { Toaster } from "sonner";

export const SignInByPhoneRoute = () => (
    <div className="px-4 py-8">
        <SignInWithPhoneComponent />
        <Toaster richColors />
    </div>
);
