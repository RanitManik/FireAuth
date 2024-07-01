import { Link } from "react-router-dom";

const LinkTextComponent = ({ text, to }) => {
  return (
    <Link
      className="font-semibold text-blue-500 hover:text-blue-600 hover:underline focus-visible:underline focus-visible:outline-none active:text-blue-700"
      to={to}
    >
      {text}
    </Link>
  );
};

export default LinkTextComponent;
