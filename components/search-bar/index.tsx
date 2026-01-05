import { ChangeEvent, useCallback, useState } from "react";
import { SearchNormal1 } from "iconsax-reactjs";

import Select from "../select";

import { SearchBarProps } from "./type";
import { debounce } from "./helper";
import {
  useGetCurrenciesQuery,
  useLazySearchCoinQuery,
} from "@/lib/features/crypto/crypto-api";
import ResultModal from "./result-modal";

function SearchBar(props: SearchBarProps) {
  const { currency, onCurrencyChange } = props;

  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [fetchSearchCoin, { data: searchedData, isFetching, isError }] =
    useLazySearchCoinQuery();

  const { data: currenciesData } = useGetCurrenciesQuery();

  const onSearch = useCallback((value: string) => {
    setShowModal(true);
    fetchSearchCoin(value);
  }, []);

  const debouncedSearch = useCallback(
    debounce((searchItem: string) => {
      if (searchItem) onSearch(searchItem);
      else setShowModal(false);
    }, 1000),
    [onSearch]
  );

  const changeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value.trimStart());

    debouncedSearch(value.trim());
  };

  return (
    <div className="flex gap-4 mt-12.5">
      <div className="relative w-150">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchNormal1 className="text-gray-500" />
        </div>

        <input
          type="text"
          className="block w-full h-15 ps-10 pe-3 py-2.5 bg-gray-100 border border-gray-500 text-black placeholder:text-gray-500 placeholder:opacity-100 text-lg rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-xs dark:bg-gray-800 dark:text-white"
          placeholder="search coin..."
          value={inputValue}
          onChange={changeSearchHandler}
        />

        <ResultModal
          open={showModal}
          coins={searchedData?.coins}
          isLoading={isFetching}
          isError={isError}
        />
      </div>

      <Select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currenciesData?.map((opt) => (
          <option key={opt} value={opt}>
            {opt.toUpperCase()}
          </option>
        ))}
      </Select>
    </div>
  );
}

export default SearchBar;
