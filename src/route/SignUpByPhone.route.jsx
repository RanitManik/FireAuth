import { SignUpWithPhoneComponent } from "../component/SignUpWithPhone.component.jsx";
import { Toaster } from "sonner";

export const SignUpByPhoneRoute = () => (
    <div className="px-4 py-8">
        <SignUpWithPhoneComponent />
        <Toaster richColors />
    </div>
);
