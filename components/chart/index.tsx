import { MouseEvent, useState } from "react";

import { convertData } from "../../helpers/convert-data";
import clsx from "clsx";
import { ChartProps } from "./types";
import ChartComponent from "./chart-component";
import { useGetCoinChartQuery } from "@/lib/features/crypto/crypto-api";
import { GetCoinChartRes } from "@/lib/features/crypto/types";

const Chart = ({ selectedCoin, onClose }: ChartProps) => {
  const [type, setType] = useState<keyof GetCoinChartRes>("prices");

  const { data } = useGetCoinChartQuery({
    coinId: selectedCoin.id,
    currency: "usd",
  });

  const typeHandler = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const target = event.target as HTMLElement;

    if (target.tagName === "BUTTON") {
      const type = target.innerText.toLowerCase().replace(" ", "_");
      setType(type as keyof GetCoinChartRes);
    }
  };

  if (!data) return null;

  return (
    <div
      className={
        "fixed left-0 top-0 w-full h-full backdrop-blur bg-white/30 overflow-scroll"
      }
    >
      <span
        className={
          "inline-block text-2xl font-bold bg-red-500 text-white w-7.5 h-7.5 leading-7.5 text-center mt-7,5 ml-7.5 rounded-[5px] cursor-pointer"
        }
        onClick={onClose}
      >
        X
      </span>
      <div
        className={
          "w-200 mx-auto p-5 mt-12.5 bg-gray-950 border-2 border-gray-700 rounded-[1.25rem]"
        }
      >
        <div className="flex items-center mr-2.5 mb-7.5">
          <img src={selectedCoin.image} className="w-10 h-10 mr-5" alt="Logo" />
          <p className="text-2xl">{selectedCoin.name}</p>
        </div>
        <div className="w-190 h-75 m-auto">
          <ChartComponent data={convertData(data, type)} type={type} />
        </div>
        <div className="mt-7.5" onClick={typeHandler}>
          <button
            className={clsx(
              "m-5 bg-gray-950 border border-blue-500 text-blue-500 text-base px-2.5 py-1.25 rounded-[.3125rem] cursor-pointer",
              type === "prices" && "bg-blue-500 text-white"
            )}
          >
            Prices
          </button>
          <button
            className={clsx(
              "m-5 bg-gray-950 border border-blue-500 text-blue-500 text-base px-2.5 py-1.25 rounded-[.3125rem] cursor-pointer",
              type === "market_caps" && "bg-blue-500 text-white"
            )}
          >
            Market Caps
          </button>
          <button
            className={clsx(
              "m-5 bg-gray-950 border border-blue-500 text-blue-500 text-base px-2.5 py-1.25 rounded-[.3125rem] cursor-pointer",
              type === "total_volumes" && "bg-blue-500 text-white"
            )}
          >
            Total Volumes
          </button>
        </div>
        <select
          className="ml-5 w-30 h-7.5 border border-blue-500 bg-blue-500 text-white rounded-[5px] hidden focus:outline-none"
          value={type}
          onChange={(e) => setType(e.target.value as keyof GetCoinChartRes)}
        >
          <option value="prices">Prices</option>
          <option value="market_caps">Market Caps</option>
          <option value="total_volumes">Total Volumes</option>
        </select>

        <div className="flex justify-between flex-wrap mt-7.5 mx-5">
          <div className="flex text-lg">
            <p className="mr-2 text-blue-500">Prices:</p>
            <span>${selectedCoin.current_price}</span>
          </div>
          <div className="flex text-lg">
            <p className="mr-2 text-blue-500">ATH:</p>
            <span>${selectedCoin.ath}</span>
          </div>
          <div className="flex text-lg">
            <p className="mr-2 text-blue-500">Market Cap:</p>
            <span>{selectedCoin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
