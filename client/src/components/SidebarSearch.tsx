import { useLocation } from "react-router-dom";
import { H3 } from "../TailwindComponents/Typorgraphy/Headings";
import { useEffect, useLayoutEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useDebouncedCallback } from "use-debounce";
import useFetch from "../hooks/useFetch";
const SidebarSearch = ({ setHotelData }: any) => {
  const location = useLocation();
  const [dateRange, setDateRange] = useState(
    location?.state?.dateRange || [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]
  );
  const [searchHotel, setSearchHotel] = useState<string>(
    location?.state?.destination || "Dubai"
  );
  const [dataPicker, setDatePicker] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [options, setOptions] = useState(location?.state?.options);
  console.log(location);

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchHotel(e.target.value);
    },
    800
  );

  const { data, loading, isSuccess, reFetch } = useFetch(`/api/hotels?city=${searchHotel}&min=${minPrice || 0}&max=${maxPrice || 10000}`);

  const handleSearchHotel = () => {
    reFetch()
    // setHotelData({ data, loading, isSuccess });
  }

  console.log("Usefecc", isSuccess)
  useEffect(() => {
    // if (!loading) {
    setHotelData({ data, loading, isSuccess });
    // }
  }, [isSuccess]);
  return (
    <div className="listSearch sticky top-2 h-max flex-1 bg-yellow-400 rounded-lg p-2 text-gray-600">
      <H3>Search</H3>
      <div className="listItem flex flex-col gap-[2px] mb-3">
        <label htmlFor="" className="text-[14px]">
          Destination
        </label>
        <input
          type="text"
          defaultValue={searchHotel}
          placeholder={searchHotel}
          className="p-[5px] h-[30px] rounded outline-none"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div className="listItem flex flex-col gap-[2px] mb-3 relative">
        <label htmlFor="" className="text-[14px]">
          Check in Date
        </label>
        <span
          className="text-gray-600  cursor-pointer p-[5px] h-[30px] bg-white flex items-center rounded outline-none"
          onClick={() => setDatePicker(!dataPicker)}
        >
          {dateRange &&
            `${format(dateRange[0]?.startDate || "", "MM/dd/yyyy")} to ${format(
              dateRange[0]?.endDate || "",
              "MM/dd/yyyy"
            )}`}
        </span>
        {dataPicker && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDateRange([item.selection])}
            minDate={new Date()}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            className="absolute top-[53px] z-[2]"
          />
        )}
      </div>
      <div className="listItem">
        <label htmlFor="">Options</label>
        <div className="p-2">
          <div className="optionItem flex justify-between items-center">
            <span className="text-[14px]">
              Min Price <small>Per night</small>
            </span>
            <input
              type="number"
              className="p-[5px] h-[30px] rounded outline-none w-[70px] mb-3"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="optionItem flex justify-between items-center">
            <span className="text-[14px]">
              Max Price <small>Per night</small>
            </span>
            <input
              type="number"
              className="p-[5px] h-[30px] rounded outline-none w-[70px] mb-3"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <div className="optionItem flex justify-between items-center">
            <span className="text-[14px]">Adults</span>
            <input
              type="number"
              min={1}
              placeholder={options?.adult}
              className="p-[5px] h-[30px] rounded outline-none w-[70px] mb-3"
            />
          </div>
          <div className="optionItem flex justify-between items-center">
            <span className="text-[14px]">Children</span>
            <input
              type="number"
              min={0}
              placeholder={options?.children}
              className="p-[5px] h-[30px] rounded outline-none w-[70px] mb-3"
            />
          </div>
          <div className="optionItem flex justify-between items-center">
            <span className="text-[14px]">Room</span>
            <input
              type="number"
              min={1}
              placeholder={options?.room}
              className="p-[5px] h-[30px] rounded outline-none w-[70px] mb-3"
            />
          </div>
          <button className="p-[10px] bg-[--theme] font-[500] text-white w-full" onClick={handleSearchHotel}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarSearch;
