import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../TailwindComponents";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const SearchBar = () => {
  const [dateRange, setDateRange] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options , setOptions] = useState({
    adult:1,
    children:0,
    room:1
  })
  const [dataPicker, setDatePicker] = useState(false);
  const [optionBox, setOptionBox] = useState(false);
  const headerSearchItem = "flex items-center gap-[10px]";
  return (
    <div className="headerSearch flex justify-around items-center bg-white h-[30px] border-[3px] border-solid border-[#febb02] rounded py-5 px-0 absolute bottom-[-22px] w-full max-w-[1024px]">
      <div className={headerSearchItem}>
        <FontAwesomeIcon icon={faBed} className="text-gray-300" />
        <input
          type="text"
          className="border-0 outline-0"
          placeholder="Where are you going"
        />
      </div>
      <div className={headerSearchItem}>
        <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400" />
        <span
          className="text-gray-300 cursor-pointer"
          onClick={() => setDatePicker(!dataPicker)}
        >{`${format(dateRange[0].startDate, "MM/dd/yyyy")} to ${format(
          dateRange[0].endDate,
          "MM/dd/yyyy"
        )}`}</span>
        {dataPicker && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDateRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            className="absolute top-[45px]"
          />
        )}
      </div>
      <div className={headerSearchItem}>
        <FontAwesomeIcon icon={faPerson} className="text-gray-400" />
        <span className="text-gray-300 cursor-pointer">
          {`${options.adult} Adults ${options.children} Children ${options.room} room`}
        </span>
      </div>
      <div className={headerSearchItem}>
        <Button classes="bg-[--theme]">Search</Button>
      </div>
    </div>
  );
};

export default SearchBar;
