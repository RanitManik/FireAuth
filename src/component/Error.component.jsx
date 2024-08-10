const ErrorComponent = ({ ERROR_DETAILS }) => {
  return (
    <main
      className="grid min-h-svh content-center justify-center gap-6 px-4 text-center"
      aria-live="assertive"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {ERROR_DETAILS.errorCode}
      </h1>
      <p className="max-w-2xl text-lg leading-7">
        {ERROR_DETAILS.errorMessage}
      </p>
      <button
        className="m-auto my-3 w-fit rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:bg-blue-600 active:ring-2 active:ring-blue-500 active:ring-offset-2"
        onClick={ERROR_DETAILS.actionFunction}
      >
        {ERROR_DETAILS.actionLabel}
      </button>
    </main>
  );
};

export default ErrorComponent;
