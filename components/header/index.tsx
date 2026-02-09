import ThemeToggle from "@/components/theme-toggle";

function Header() {
  return (
    <div className="relative overflow-hidden
                    bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600
                    dark:from-slate-800 dark:via-slate-700 dark:to-slate-800
                    p-4 mt-3 rounded-2xl 
                    flex justify-between items-center
                    shadow-lg dark:shadow-slate-900/50
                    backdrop-blur-sm
                    transition-all duration-500 ease-out
                    border border-white/10 dark:border-slate-600/30">
      <div className="absolute inset-0 bg-gradient-to-r 
                      from-transparent via-white/5 to-transparent
                      animate-[shimmer_3s_ease-in-out_infinite]" />
      
      <h1 className="relative z-10 text-3xl font-bold 
                     text-white drop-shadow-lg
                     bg-gradient-to-r from-white to-blue-100
                     bg-clip-text text-transparent
                     dark:from-white dark:to-slate-200
                     transition-all duration-300
                     hover:scale-105">
        Crypto App
      </h1>

      <div className="relative z-10 flex gap-3 items-center">
        <span className="px-3 py-1.5 rounded-lg
                         bg-white/20 dark:bg-white/10
                         text-white text-sm font-medium
                         backdrop-blur-sm
                         border border-white/20 dark:border-white/10
                         transition-all duration-300
                         hover:bg-white/30 dark:hover:bg-white/20
                         hover:scale-105">
          Next.js
        </span>

        <div className="w-px h-8 bg-white/30 dark:bg-white/20" />

        <span className="px-3 py-1.5 rounded-lg
                         bg-white/20 dark:bg-white/10
                         text-white text-sm font-medium
                         backdrop-blur-sm
                         border border-white/20 dark:border-white/10
                         transition-all duration-300
                         hover:bg-white/30 dark:hover:bg-white/20
                         hover:scale-105">
          Ehsan Hakim
        </span>

        <div className="w-px h-8 bg-white/30 dark:bg-white/20" />

        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
