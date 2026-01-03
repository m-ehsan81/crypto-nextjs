import clsx from "clsx";
import "./style.css";

function Loader({ size = "large" }: { size?: "small" | "large" }) {
  const sizesClasses = {
    small: "w-15 h-15",
    large: "w-37.5 h-37.5",
  };

  return (
    <div
      id="preloader"
      className="absolute inset-0 flex items-center justify-center"
    >
      <div
        id="loader"
        className={clsx(
          "relative rounded-full border border-transparent border-t-[#9370DB] animate-[spin_2s_linear_infinite]",
          sizesClasses[size]
        )}
      />
    </div>
  );
}

export default Loader;
