import { Route, Routes } from "react-router-dom";
import Home from "./route/Home.route.jsx";
import { SignInByEmailRoute } from "./route/SignInByEmail.route.jsx";
import { SignUpByEmailRoute } from "./route/SignUpByEmail.route.jsx";
import { SignUpByPhoneRoute } from "./route/SignUpByPhone.route.jsx";
import { SignInByPhoneRoute } from "./route/SignInByPhone.route.jsx";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />}></Route>
      <Route index path="/login/email" element={<SignInByEmailRoute />}></Route>
      <Route
        index
        path="/signup/email"
        element={<SignUpByEmailRoute />}
      ></Route>
      <Route index path="/login/phone" element={<SignInByPhoneRoute />}></Route>
      <Route
        index
        path="/signup/phone"
        element={<SignUpByPhoneRoute />}
      ></Route>
    </Routes>
  );
};

export default App;
