import Image from "next/image";
import { ArrowRight2 } from "iconsax-reactjs";
import { ResultModalProps } from "./type";
import Error from "./error";
import Loding from "./loding";

function ResultModal(props: ResultModalProps) {
  const { open, coins, isError, isLoading } = props;

  if (!open) return null;

  return (
    <div className="absolute z-10 max-h-100 overflow-auto bg-gray-800 top-17 right-0 left-0 rounded-xl">
      {isError ? (
        <Error />
      ) : !coins || isLoading ? (
        <Loding />
      ) : (
        <ul className="p-2 [&>li:last-child]:border-none">
          {coins.map((coin) => (
            <li
              key={coin.id}
              className="flex items-center justify-between py-4 px-2 border-b border-gray-500 transition-all duration-300 hover:bg-gray-900 cursor-pointer"
            >
              <div className="flex gap-1 items-center">
                <Image
                  src={coin.thumb}
                  alt="icon"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                {coin.name}
              </div>

              <ArrowRight2 className="text-gray-500" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResultModal;
