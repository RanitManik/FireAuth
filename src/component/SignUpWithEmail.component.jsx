import InputComponent from "../component/Input.component.jsx";
import CheckboxComponent from "../component/Checkbox.component.jsx";
import ButtonComponent from "../component/Button.component.jsx";
import LinkTextComponent from "../component/LinkText.component.jsx";
import HorizontalRuler from "../component/HorizontalRuler.component.jsx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase.context.jsx";
import useErrorHandlerComponent from "../hooks/LoginErrorHandler.hook.jsx";

const SignUpWithEmailComponent = () => {
  const {
    signUpUserWithEmailAndPasswordWithImage,
    signUpUserWithEmailAndPasswordWithOutImage,
    isLoggedIn,
  } = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const { generateErrorMessage } = useErrorHandlerComponent();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSizeMB = 1;
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      toast.error("Maximum file size is 1MB");
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Allowed file types are .jpg, .jpeg, .png, .gif");
      return;
    }

    setProfileImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmedPassword)
      return toast.error("Passwords do not match");
    if (password.length < 8)
      return toast.error("Password must be at least 8 characters.");

    const signUpPromise = async () => {
      if (profileImage !== null) {
        await signUpUserWithEmailAndPasswordWithImage(
          email,
          password,
          name,
          profileImage,
        );
      } else {
        await signUpUserWithEmailAndPasswordWithOutImage(email, password, name);
      }
    };

    toast.promise(signUpPromise(), {
      loading: "Loading...",
      success: "Sign-up successful",
      error: (error) => {
        console.log(error);
        return generateErrorMessage(error.code);
      },
    });
  };

  return (
    <>
      <div className="grid content-center gap-6 bg-gray-100/50 animate-in fade-in">
        <form
          onSubmit={handleSubmit}
          className="m-auto max-h-fit w-fit min-w-full rounded-xl bg-white p-8 text-body shadow sm:min-w-[30rem]"
        >
          <h1 className="text-2xl font-semibold">Create a new Account</h1>
          <p className="mb-2 text-gray-500">Add your details to get started</p>
          <ProfileImageUploader
            profileImage={profileImage}
            handleFileChange={handleFileChange}
          />
          <InputComponent
            required
            autoFocus
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <InputComponent
            required
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <InputComponent
            required
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <InputComponent
            required
            name="confirmedPassword"
            type="password"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <CheckboxComponent
            required
            checkBoxLabel={
              <>
                I agree with <LinkTextComponent to="/" text="Terms" /> and{" "}
                <LinkTextComponent to="/" text="Privacy" />
              </>
            }
          />
          <ButtonComponent type="submit" text="Sign up" />
          <HorizontalRuler />
          <div className="flex flex-wrap justify-center gap-2 px-8 text-center">
            <p>Already have an account?</p>
            <LinkTextComponent to="/login/email" text="Log in" />
          </div>
        </form>
        <Link
          to="/"
          className="m-auto w-fit rounded-lg bg-white px-6 py-3 text-center font-bold text-blue-500 underline-offset-2 shadow-md transition hover:text-blue-600 hover:underline"
        >
          Choose a different Method for Signing
        </Link>
      </div>
    </>
  );
};

const ProfileImageUploader = ({ profileImage, handleFileChange }) => (
  <div className="my-4 flex flex-col items-start gap-6 md:flex-row md:items-center">
    <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-gray-200">
      {profileImage ? (
        <img
          className="h-full w-full rounded-2xl object-cover"
          src={URL.createObjectURL(profileImage)}
          alt="Profile"
        />
      ) : (
        <span className="text-gray-400">No image</span>
      )}
    </div>
    <div>
      <label
        className="mb-2 inline-block cursor-pointer rounded-lg border-2 border-gray-200 px-4 py-1 hover:bg-gray-50 active:border-blue-600"
        htmlFor="profileImage"
      >
        Upload image
      </label>
      <input
        id="profileImage"
        name="profileImage"
        type="file"
        accept=".jpg, .jpeg, .png, .gif"
        onChange={handleFileChange}
        className="hidden"
      />
      <p className="text-gray-500">.jpg, .jpeg, .png, .gif files up to 1MB.</p>
    </div>
  </div>
);

export default SignUpWithEmailComponent;
