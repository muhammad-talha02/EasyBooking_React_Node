import { FeatureItem } from ".";
import useFetch from "../hooks/useFetch";
import { HomeContainer } from "./HOC";

// interface useFetchProps {
//   data:any,
//   loading:boolean,
//   error:any
// }
// const cities = ["Abu Dhabi", "Dubai", 'Sharjah']

const FeaturedList = (): JSX.Element => {
  const {
    data: FeatureData,
    loading,
    error,
  } = useFetch(`/api/cities`);

  console.log(FeatureData);
  return (
    <div className="featured w-full max-w-[1024px] flex justify-between gap-[20px]">
      {loading
        ? "Please Wait...."
        : FeatureData?.map((item: any) => {
            return (
                <FeatureItem item={item} key={item.name}/>
            );
          })}
    </div>
  );
};

export default HomeContainer(FeaturedList);
