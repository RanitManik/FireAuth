import { Link } from "react-router-dom";

const LogoComponent = () => {
  return (
    <Link
      className="m-auto grid w-fit place-items-center rounded-full border-2 border-transparent focus-visible:border-2 focus-visible:border-red-300 focus-visible:outline-none"
      to="/"
    >
      <img
        className="rounded-full bg-red-100 p-3"
        src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif"
        alt="🔥"
        width="60"
        height="60"
      />
    </Link>
  );
};
export default LogoComponent;
