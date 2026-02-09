import Image from "next/image";
import { GridRowType } from "./types";
import { Symbols } from "./constant";

function GridRow(props: GridRowType) {
  const {
    currency,
    onClickCoin,
    id,
    name,
    image,
    symbol,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
  } = props;

  const isPositive = price_change && price_change > 0;

  return (
    <tr 
      className="h-20 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 ease-out cursor-pointer group"
      onClick={() => onClickCoin(id)}
    >
      <td className="px-4 first:pl-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={image}
              alt="icon"
              width={32}
              height={32}
              className="rounded-full transition-transform duration-300 group-hover:scale-110 shadow-sm"
            />
          </div>
          <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {symbol.toUpperCase()}
          </span>
        </div>
      </td>
      <td className="px-4">
        <span className="text-gray-700 dark:text-gray-300">
          {name}
        </span>
      </td>
      <td className="px-4">
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {Symbols?.[currency] || "$"}
          {current_price?.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
          })}
        </span>
      </td>
      <td className="px-4">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-lg text-sm font-semibold ${isPositive ? "text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20" : "text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20"}`}
        >
          {isPositive ? "↑" : "↓"} {price_change?.toFixed(2)}%
        </span>
      </td>
      <td className="px-4">
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          {total_volume?.toLocaleString()}
        </span>
      </td>
      <td className="px-4 last:pr-6">
        <div className="flex items-center justify-center">
          {isPositive ? (
            <Image
              src="/assets/chart-up.svg"
              alt={name}
              width={100}
              height={40}
              className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          ) : (
            <Image
              src="/assets/chart-down.svg"
              alt={name}
              width={100}
              height={40}
              className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>
      </td>
    </tr>
  );
}

export default GridRow;
