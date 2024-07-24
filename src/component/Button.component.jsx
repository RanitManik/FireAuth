const ButtonComponent = ({ type, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="my-3 w-full rounded-lg bg-blue-500 p-3 text-lg font-semibold text-white hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:bg-blue-600 active:ring-2 active:ring-blue-500 active:ring-offset-2"
      type={type}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
