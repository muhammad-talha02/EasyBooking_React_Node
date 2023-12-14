import { useState } from "react";
import { H4 } from "../TailwindComponents/Typorgraphy/Headings";
import { Navbar, SearchCard, SidebarSearch } from "../components";
import Loader from "../components/Loader";
import Header from "../sections/Header";

const List = () => {
  const [hotelData, setHotelData] = useState<any>({});
  console.log("data", hotelData);
  return (
    <>
      <Navbar />
      <Header mode="list" />
      <div className="lisContainer flex justify-center mt-10">
        <div className="lisWrapper w-full max-w-[1024px] gap-[20px] flex px-2">
          <SidebarSearch setHotelData={setHotelData} />
          <div className="listResults flex-[3]">
            {!hotelData?.isSuccess ? (
              <Loader />
            ) : hotelData?.data?.length > 0 ? (
              hotelData?.data?.map((item: any) => (
                <SearchCard key={item._id} item={item} />
              ))
            ) : (
              <H4 classes="text-center">Not Found.</H4>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
