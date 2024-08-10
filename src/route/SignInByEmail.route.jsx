import SignInWithEmailComponent from "../component/SignInWithEmail.component.jsx";
import { Toaster } from "sonner";

export const SignInByEmailRoute = () => {
  return (
    <div className="px-4 py-8">
      <SignInWithEmailComponent />
      <Toaster richColors />
    </div>
  );
};
