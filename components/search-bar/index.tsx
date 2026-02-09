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
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <div className="relative flex-1 max-w-2xl">
        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none z-10">
          <SearchNormal1 
            className="text-gray-400 dark:text-gray-500 transition-colors duration-300 group-focus-within:text-blue-500" 
            size={20}
          />
        </div>

        <input
          type="text"
          className="block w-full h-14 ps-12 pe-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-base rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 shadow-sm dark:shadow-gray-900/50 transition-all duration-300 ease-out hover:border-gray-300 dark:hover:border-gray-600 group"
          placeholder="Search cryptocurrency..."
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
