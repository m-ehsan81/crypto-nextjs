import { SearchNormal1 } from "iconsax-reactjs";
import Select from "../select";
import { currencyOptions } from "./constant";

function SearchBar() {
  return (
    <div className="flex gap-4 mt-12.5">
      <div className="relative w-150">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchNormal1 className="text-gray-500" />
        </div>
        <input
          type="text"
          className="block w-full h-15 ps-10 pe-3 py-2.5 bg-gray-800 border border-gray-500 text-white placeholder:text-gray-500 placeholder:opacity-100 text-lg rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-xs"
          placeholder="name@flowbite.com"
        />
      </div>

      <Select>
        {currencyOptions.map((opt) => (
          <option value={opt.value}>{opt.label}</option>
        ))}
      </Select>
    </div>
  );
}

export default SearchBar;
