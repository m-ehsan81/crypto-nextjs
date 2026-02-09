import { useState, useEffect } from "react";
import Image from "next/image";

import { convertData } from "../../helpers/convert-data";
import { ChartProps } from "./types";
import ChartComponent from "./chart-component";
import {
  useGetCoinChartQuery,
  useGetCoinDataQuery,
} from "@/lib/features/crypto/crypto-api";
import { GetCoinChartRes } from "@/lib/features/crypto/types";
import { daysOptions, typeOptions } from "./constant";
import InformationItem from "./information-item";
import Loader from "../loader";
import { Symbols } from "../coin-grid/constant";
import TabItems from "../tab-items";

function Chart(props: ChartProps) {
  const { currency, selectedCoin, onClose } = props;

  const [type, setType] = useState<keyof GetCoinChartRes>("prices");
  const [days, setDays] = useState<number>(7);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCoin) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Disable body scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        // Re-enable body scroll when modal closes
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedCoin]);

  const { data: CoinData } = useGetCoinDataQuery(selectedCoin);

  const { data, isLoading } = useGetCoinChartQuery({
    coinId: selectedCoin,
    currency,
    days,
  });

  if (!selectedCoin) return null;

  return (
    <div 
      className="fixed left-0 top-0 w-full h-full backdrop-blur-md bg-black/50 dark:bg-black/70 overflow-y-auto z-50 animate-[fadeIn_0.3s_ease-out]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="min-h-screen flex items-center justify-center p-4 py-8">
        <div className="relative w-full max-w-5xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl animate-[slideUp_0.4s_ease-out] overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-red-600 text-gray-600 dark:text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 active:scale-95 shadow-lg hover:shadow-red-500/50 group"
            aria-label="Close modal"
          >
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-6 sm:p-8">
            {!data || !CoinData || isLoading ? (
              <div className="min-h-[500px] relative">
                <Loader />
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="relative">
                    <Image
                      src={CoinData.image.large}
                      alt="icon"
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full ring-4 ring-blue-500/20 dark:ring-blue-400/20 shadow-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {CoinData.name}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {CoinData.symbol.toUpperCase()}
                    </p>
                  </div>
                </div>

                {/* Chart */}
                <div className="w-full h-96 mb-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
                  <ChartComponent data={convertData(data, type)} type={type} />
                </div>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <TabItems
                    items={typeOptions}
                    selectedItem={type}
                    onClick={(value) => setType(value)}
                  />

                  <TabItems
                    items={daysOptions}
                    selectedItem={days}
                    onClick={(value) => setDays(value)}
                  />
                </div>

                {/* Information Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <InformationItem label="Current Price">
                    {Symbols?.[currency] || "$"}
                    {CoinData.market_data.current_price.usd?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 6
                    })}
                  </InformationItem>
                  <InformationItem label="All Time High">
                    {Symbols?.[currency] || "$"}
                    {CoinData.market_data.ath.usd?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 6
                    })}
                  </InformationItem>
                  <InformationItem label="Market Cap">
                    {Symbols?.[currency] || "$"}
                    {CoinData.market_data.market_cap.usd?.toLocaleString()}
                  </InformationItem>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
