import Image from "next/image";
import { ArrowRight2 } from "iconsax-reactjs";
import { ResultModalProps } from "./type";
import Error from "./error";
import Loding from "./loding";

function ResultModal(props: ResultModalProps) {
  const { open, coins, isError, isLoading, onCoinClicked } = props;

  if (!open) return null;

  return (
    <div className="absolute z-20 max-h-96 overflow-auto bg-white dark:bg-gray-800 top-16 right-0 left-0 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 animate-[slideDown_0.3s_ease-out] backdrop-blur-sm">
      {isError ? (
        <Error />
      ) : !coins || isLoading ? (
        <Loding />
      ) : coins.length === 0 ? (
        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
          No results found
        </div>
      ) : (
        <ul className="py-2 [&>li:last-child]:border-none">
          {coins.map((coin) => (
            <li
              key={coin.id}
              className="flex items-center justify-between py-3 px-4 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ease-out hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer group first:rounded-t-2xl"
              onClick={() => onCoinClicked(coin.id)}
            >
              <div className="flex gap-3 items-center flex-1 min-w-0">
                <div className="relative flex-shrink-0">
                  <Image
                    src={coin.thumb}
                    alt="icon"
                    width={32}
                    height={32}
                    className="rounded-full transition-transform duration-300 group-hover:scale-110 ring-2 ring-gray-200 dark:ring-gray-700 group-hover:ring-blue-400"
                  />
                </div>
                <span className="font-medium text-gray-900 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {coin.name}
                </span>
              </div>

              <ArrowRight2
                className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0"
                size={20}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResultModal;
