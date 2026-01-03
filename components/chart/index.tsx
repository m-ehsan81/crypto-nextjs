import { useState } from "react";
import Image from "next/image";

import { convertData } from "../../helpers/convert-data";
import { ChartProps } from "./types";
import ChartComponent from "./chart-component";
import {
  useGetCoinChartQuery,
  useGetCoinDataQuery,
} from "@/lib/features/crypto/crypto-api";
import { GetCoinChartRes } from "@/lib/features/crypto/types";
import { typeOptions } from "./constant";
import TypeButton from "./type-button";
import InformationItem from "./information-item";
import Loader from "../loader";

function Chart(props: ChartProps) {
  const { selectedCoin, onClose } = props;

  const [type, setType] = useState<keyof GetCoinChartRes>("prices");

  const { data: CoinData } = useGetCoinDataQuery(selectedCoin);

  const { data, isLoading } = useGetCoinChartQuery({
    coinId: selectedCoin,
    currency: "usd",
  });

  return (
    <div className="fixed left-0 top-0 w-full h-full backdrop-blur bg-black/30 overflow-scroll">
      <span
        className="inline-block text-2xl font-bold bg-red-500 text-white w-7.5 h-7.5 leading-7.5 text-center mt-7,5 ml-7.5 rounded-[.3125rem] cursor-pointer"
        onClick={onClose}
      >
        X
      </span>

      <div className="w-200 mx-auto p-5 mt-12.5 bg-gray-950 border-2 border-gray-700 rounded-[20px]">
        {!data || !CoinData || isLoading ? (
          <div className="min-h-120 relative">
            <Loader />
          </div>
        ) : (
          <>
            <div className="flex items-center mr-2.5 mb-7.5">
              <Image
                src={CoinData.image.large}
                alt="icon"
                width={40}
                height={40}
                className="w-10 h-10 mr-5"
              />
              <p className="text-2xl">{CoinData.name}</p>
            </div>

            <div className="w-190 h-75 m-auto">
              <ChartComponent data={convertData(data, type)} type={type} />
            </div>

            <div className="mt-7.5">
              {typeOptions.map((item) => (
                <TypeButton
                  key={item.value}
                  label={item.label}
                  isSelected={type === item.value}
                  onClick={() => setType(item.value as keyof GetCoinChartRes)}
                />
              ))}
            </div>

            <select
              className="ml-5 w-30 h-7.5 border border-blue-500 bg-blue-500 text-white rounded-[.3125rem] hidden focus:outline-none"
              value={type}
              onChange={(e) => setType(e.target.value as keyof GetCoinChartRes)}
            >
              {typeOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>

            <div className="flex justify-between flex-wrap mt-7.5 mx-5">
              <InformationItem label="Prices">
                ${CoinData.market_data.current_price.usd}
              </InformationItem>
              <InformationItem label="ATH">
                ${CoinData.market_data.ath.usd}
              </InformationItem>
              <InformationItem label="Market Cap">
                {CoinData.market_data.market_cap.usd}
              </InformationItem>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Chart;
