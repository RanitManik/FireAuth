import { toast } from "sonner";

const LogoComponent = () => {
  return (
    <div
      className="m-auto grid w-fit cursor-pointer place-items-center rounded-full border-2 border-transparent transition hover:border-red-300 focus-visible:border-2 focus-visible:border-red-300 focus-visible:outline-none"
      onClick={() => toast.info("Welcome to FireSign")}
    >
      <img
        className="rounded-full bg-red-100 p-3"
        src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif"
        alt="🔥"
        onError="this.style.display='none'"
        width="60"
        height="60"
      />
    </div>
  );
};
export default LogoComponent;
