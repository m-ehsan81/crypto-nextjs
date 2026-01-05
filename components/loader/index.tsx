import clsx from "clsx";
import "./style.css";

function Loader({ size = "large" }: { size?: "small" | "large" }) {
  const sizesClasses = {
    small: "w-12 h-12",
    large: "w-20 h-20",
  };

  return (
    <div
      id="preloader"
      className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-10"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          id="loader"
          className={clsx(
            "relative rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-[spin_1.5s_linear_infinite]",
            sizesClasses[size]
          )}
        />
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loader;
