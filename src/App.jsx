import { Route, Routes } from "react-router-dom";
import Home from "./route/home/home.jsx";
import ContinueWithEmail from "./route/continue_with_email/continue_with_email.jsx";
import ContinueWithPhone from "./route/continue_with_phone/continue_with_phone.jsx";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />}></Route>
      <Route path="/email" element={<ContinueWithEmail />}></Route>
      <Route path="/phone" element={<ContinueWithPhone />}></Route>
    </Routes>
  );
};

export default App;
