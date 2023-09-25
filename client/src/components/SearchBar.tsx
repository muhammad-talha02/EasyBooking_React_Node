import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../TailwindComponents";

const SearchBar = () => {
    const headerSearchItem = "flex items-center gap-[10px]"
  return (
    <div className="headerSearch flex justify-around items-center bg-white h-[30px] border-[3px] border-solid border-[#febb02] rounded py-5 px-0 absolute bottom-[-22px] w-full max-w-[1024px]">
      <div className={headerSearchItem}>
        <FontAwesomeIcon icon={faBed} className="text-gray-300" />
        <input type="text" className="border-0 outline-0" placeholder="Where are you going" />
      </div>
      <div className={headerSearchItem}>
        <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400" />
        <span className="text-gray-300 cursor-pointer">Date to Date</span>
      </div>
      <div className={headerSearchItem}>
        <FontAwesomeIcon icon={faPerson} className="text-gray-400" />
        <span className="text-gray-300 cursor-pointer">2 Adults 2 Children I room</span>
      </div>
      <div className={headerSearchItem}>
        <Button classes="bg-[--theme]">Search</Button>
      </div>
    </div>
  );
};

export default SearchBar;
