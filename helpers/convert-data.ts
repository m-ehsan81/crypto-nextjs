import { GetCoinChartRes } from "@/lib/features/crypto/types";

const convertData = (data: GetCoinChartRes, type: keyof GetCoinChartRes) => {
  const convertedData = data[type].map((item) => {
    return {
      date: item[0],
      [type]: item[1],
    };
  });

  return convertedData;
};

export { convertData };
