const InputComponent = ({ type, name, placeholder, autoFocus }) => {
  return (
    <div className="relative mt-6">
      <input
        autoFocus={autoFocus}
        type={type}
        name={name}
        id={name}
        placeholder=" "
        className="peer block w-full appearance-none rounded-lg border-2 border-gray-200 bg-transparent px-6 py-3 text-gray-900 caret-blue-600 transition focus:border-blue-600 focus:shadow-md focus:shadow-blue-100 focus:outline-none focus:ring-0"
      />
      <label
        htmlFor={name}
        className="absolute left-3 top-3 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-3 font-semibold text-gray-400 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-blue-600"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputComponent;
