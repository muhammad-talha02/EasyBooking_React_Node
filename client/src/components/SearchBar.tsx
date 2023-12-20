import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef, useContext } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { OptionsCard } from ".";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/searchContext";

type OptionsState = {
  adult: number;
  children: number;
  room: number;
};



const SearchBar = () => {
  const { dispatch } = useContext(SearchContext)
  // Ref
  const dateRef = useRef<any | null>();
  const optionRef = useRef<any | null>();
  // Routes

  const navigate = useNavigate()
  // use States
  const [dateRange, setDateRange] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [dataPicker, setDatePicker] = useState(false);
  const [destination, setDestination] = useState("");
  const [optionBox, setOptionBox] = useState<Boolean>(false);
  const [options, setOptions] = useState<OptionsState>({
    adult: 1,
    children: 0,
    room: 1,
  });

  useEffect(() => {
    // Add a click event listener to the document
    const handleOutsideClick = (e: any) => {
      if (!dateRef.current.contains(e.target)) {
        setDatePicker(false);
      }
      if (!optionRef.current.contains(e.target)) {
        setOptionBox(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("click", handleOutsideClick);
    };
  }),
    [];
  const handleOptions = (name: string, operation: string) => {
    console.log({ name, operation });
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i"
            ? prev[name as keyof OptionsState] + 1
            : prev[name as keyof OptionsState] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, dateRange, options } })
    dispatch({ type: "NEW_SEARCH", payload: { destination, dateRange, options } })
  }

  const headerSearchItem = "flex items-center gap-[10px]";
  return (
    <div className="headerSearch flex justify-around items-center bg-white h-[30px] border-[3px] border-solid border-[#febb02] rounded py-5 px-0 absolute bottom-[-22px] w-full max-w-[1024px]">
      <div className={headerSearchItem}>
        <FontAwesomeIcon icon={faBed} className="text-gray-300" />
        <input
          type="text"
          className="border-0 outline-0 text-black"
          placeholder="Where are you going"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className={headerSearchItem} ref={dateRef}>
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
            className="absolute top-[45px] z-[2]"
          />
        )}
      </div>
      <div
        className={headerSearchItem}
        ref={optionRef} /// <reference path="dr" />
      >
        <FontAwesomeIcon icon={faPerson} className="text-gray-400" />
        <span
          className="text-gray-300 cursor-pointer select-none"
          onClick={() => setOptionBox(!optionBox)}
        >
          {`${options.adult} Adults . ${options.children} Children . ${options.room} room`}
        </span>
        {optionBox && (
          <div className="options absolute z-[2] top-[45px] bg-white text-[gray] rounded-md shadow-xl border-[1px]">
            <OptionsCard
              title="Adult"
              stateValue={options.adult}
              increment={() => handleOptions("adult", "i")}
              decrement={() => handleOptions("adult", "d")}
              min={1}
            />
            <OptionsCard
              title="Children"
              stateValue={options.children}
              increment={() => handleOptions("children", "i")}
              decrement={() => handleOptions("children", "d")}
              min={0}
            />
            <OptionsCard
              title="Room"
              stateValue={options.room}
              increment={() => handleOptions("room", "i")}
              decrement={() => handleOptions("room", "d")}
              min={1}
            />
          </div>
        )}
      </div>
      <div className={headerSearchItem}>
        <button className="py-[5px] px-[10px] rounded-sm bg-[--theme]" onClick={() => handleSearch()}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
