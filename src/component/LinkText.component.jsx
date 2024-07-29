import { Link } from "react-router-dom";

const LinkTextComponent = ({ text, to }) => {
  return (
    <Link
      className="font-semibold text-blue-500 underline hover:text-blue-600 focus-visible:outline-blue-700"
      to={to}
    >
      {text}
    </Link>
  );
};

export default LinkTextComponent;
