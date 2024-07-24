import { Route, Routes } from "react-router-dom";
import Home from "./route/Home.route.jsx";
import Profile from "./route/Profile.route.jsx";
import { SignInByEmailRoute } from "./route/SignInByEmail.route.jsx";
import { SignUpByEmailRoute } from "./route/SignUpByEmail.route.jsx";
import { SignInWithPhoneComponent } from "./component/SignInWithPhone.component.jsx";
import { SignUpWithPhoneComponent } from "./component/SignUpWithPhone.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />}></Route>
      <Route index path="/login/email" element={<SignInByEmailRoute />}></Route>
      <Route index path="/signup/email" element={<SignUpByEmailRoute />}></Route>
      <Route index path="/login/phone" element={<SignInWithPhoneComponent />}></Route>
      <Route index path="/signup/phone" element={<SignUpWithPhoneComponent />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
};

export default App;
