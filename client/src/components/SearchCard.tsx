import { H2, H4 } from "../TailwindComponents/Typorgraphy/Headings";

const SearchCard = () => {
  return (
    <div className="searchCard border-solid border-[1px] border-gray-400 flex p-2.5 mb-2.5 gap-[15px] rounded-sm justify-between">
      <img
        src="https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1YmFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="w-[200px] h-[200px] object-cover"
      />
      <div className="cardDes flex flex-col gap-[5px] flex-2">
        <H4 classes="text-[--theme-light]">Alreem Mangrove Palace</H4>
        <span className="text-[12px]">500m from center</span>
        <span className="bg-[green] text-[14px] text-white px-1 rounded-sm w-max">Free Taxi from Airport</span>
        <span className="font-bold text-[14px]">Studio Apartment with Air Conditioning</span>
        <span className="">Entire Studio . 2 bathroom</span>
        <span className="text-[green] font-bold">Free Cancellation</span>
        <span className="text-[14px] text-[green]">Lock on this price so you can save it later</span>
      </div>
      <div className="cardDetails flex flex-col justify-between flex-1">
        <div className="flex justify-between">
            <span className="font-bold">Excellent</span>
            <button className="text-white px-1 rounded-sm text-[14px] font-semibold bg-[--theme]">8.9</button>
        </div>
        <div className="flex flex-col text-right">
        <H4 classes="mb-0">112 AED</H4>
        <span className="text-[12px]">Include taxes & fees</span>
        <button className="bg-[--theme-light] text-white py-2 rounded-md mt-[2px]">See availibilty</button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
