import { ProperttyTypeItem } from ".";
import { H3 } from "../TailwindComponents/Typorgraphy/Headings";
import useFetch from "../hooks/useFetch";
import { HomeContainer } from "./HOC";

const PropertyTypesList = () => {
  const images = [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzb3J0JTIwcG9vbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295090917.jpg?k=d17621b71b0eaa0c7a37d8d8d02d33896cef75145f61e7d96d296d88375a7d39&o=&hp=1",
    "https://www.brokenbowvacationcabins.com/wp-content/uploads/2012/08/foreveryoung_front1_940.jpg",
  ];
  const { data, loading } = useFetch("/api/hotels/countByType");
  return (
    <div className="w-full">
      <H3 classes="">Browse by property types</H3>
      <div className="pList mt-[20px] flex gap-[20px] justify-between">
        {loading
          ? "Loading...."
          : data?.map((item: any, index:number) => {
              return <ProperttyTypeItem key={item.type} img={images[index]} item={item} />;
            })}
      </div>
    </div>
  );
};

export default HomeContainer(PropertyTypesList);
