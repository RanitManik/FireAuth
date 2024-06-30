const WelcomeComponent = () => (
  <div className="mb-4 grid justify-items-center gap-4">
    <picture className="rounded-full bg-red-100 p-3">
      <source
        srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp"
        type="image/webp"
      />
      <img
        src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif"
        alt="🔥"
        width="50"
        height="50"
      />
    </picture>
    <h1 className="text-center text-2xl text-gray-500">
      Welcome to <span className="font-semibold text-black">Firesign</span>
    </h1>
  </div>
);

export default WelcomeComponent;
