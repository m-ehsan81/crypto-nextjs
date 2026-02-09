import { Pagination } from "../pagination";
import { HeaderColumns } from "./constant";
import GridRow from "./grid-row";
import { CoinGridProps } from "./types";

function CoinGrid(props: CoinGridProps) {
  const { coins, currency, onPaginationChange, page, onClickCoin } = props;

  return (
    <div className="w-full">
      <div className="overflow-x-auto rounded-2xl
                      bg-white dark:bg-gray-800
                      shadow-lg dark:shadow-gray-900/50
                      border border-gray-200 dark:border-gray-700
                      overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100
                           dark:from-gray-800 dark:to-gray-900
                           border-b-2 border-gray-200 dark:border-gray-700">
            <tr>
              {HeaderColumns.map((header) => (
                <th 
                  key={header.id} 
                  className="text-sm font-semibold text-gray-700 dark:text-gray-300
                             text-left py-4 px-4
                             uppercase tracking-wider
                             first:pl-6 last:pr-6"
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {coins.map((coin) => (
              <GridRow
                key={coin.id}
                {...coin}
                currency={currency}
                onClickCoin={onClickCoin}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <Pagination count={20} onChange={onPaginationChange} page={page} />
      </div>
    </div>
  );
}

export default CoinGrid;
