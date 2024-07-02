import { Route, Routes } from "react-router-dom";
import Home from "./route/home/home.jsx";
import SignUpWithEmail from "./route/continue_with_email/sign_up_with_email.jsx";
import ContinueWithPhone from "./route/continue_with_phone/continue_with_phone.jsx";
import LogInWithEmail from "./route/continue_with_email/sign_in_with_email.jsx";
import User from "./route/user/user.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />}></Route>
      <Route path="/email/signup" element={<SignUpWithEmail />}></Route>
      <Route path="/email/login" element={<LogInWithEmail />}></Route>
      <Route path="/phone" element={<ContinueWithPhone />}></Route>
      <Route path="/profile" element={<User />}></Route>
    </Routes>
  );
};

export default App;
