import Image from "next/image";
import { CurrencyItemsType, GridRowType } from "./types";

function findSymbol(currency: CurrencyItemsType) {
  switch (currency) {
    case "usd":
      return "$";
    case "eur":
      return "€";
    case "jpy":
      return "¥";

    default:
      return "$";
  }
}

function GridRow(props: GridRowType) {
  const { currency, onClickCoin, ...coin } = props;

  const {
    name,
    image,
    symbol,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
  } = coin;

  return (
    <tr className="h-20 border-b border-b-gray-800">
      <td>
        <div
          className={"flex items-center cursor-pointer"}
          onClick={() => onClickCoin(coin)}
        >
          <Image
            src={image}
            alt="icon"
            width={24}
            height={24}
            className="mr-3"
          />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {findSymbol(currency)}
        {current_price?.toLocaleString()}
      </td>
      <td
        className={
          price_change && price_change > 0 ? "text-green-500" : "text-red-500"
        }
      >
        {price_change?.toFixed(2)}%
      </td>
      <td>{total_volume?.toLocaleString()}</td>
      <td>
        {price_change && price_change > 0 ? (
          <Image
            src="/assets/chart-up.svg"
            alt={name}
            width={100}
            height={40}
          />
        ) : (
          <Image
            src="/assets/chart-down.svg"
            alt={name}
            width={100}
            height={40}
          />
        )}
      </td>
    </tr>
  );
}

export default GridRow;
