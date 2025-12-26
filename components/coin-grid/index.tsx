import { HeaderColumns } from "./constant";
import GridRow from "./grid-row";
import { CoinGridProps } from "./types";

function CoinGrid({ coins, currency }: CoinGridProps) {
  return (
    <div className="flex justify-center items-start m-[50px_0_100px]">
      <table className="w-full border-collapse">
        <thead className="border-b-2 border-b-white">
          <tr>
            {HeaderColumns.map((header) => (
              <th key={header.id} className="text-xl text-left py-3">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <GridRow key={coin.id} {...coin} currency={currency} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinGrid;
