import "./style.css";

function Loader() {
  return (
    <div
      id="preloader"
      className="absolute inset-0 flex items-center justify-center"
    >
      <div
        id="loader"
        className="relative w-37.5 h-37.5 rounded-full border border-transparent border-t-[#9370DB] animate-[spin_2s_linear_infinite]"
      />
    </div>
  );
}

export default Loader;
