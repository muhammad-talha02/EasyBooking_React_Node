import { FeatureItem } from ".";
import useFetch from "../hooks/useFetch";
import { HomeContainer } from "./HOC";
import Loader from "./Loader";

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
  } = useFetch(`/api/cities`);

  return (
    <div className="featured w-full max-w-[1024px] flex justify-between gap-[20px]">
      {loading
        ? <Loader/>
        : FeatureData?.map((item: any) => {
            return (
                <FeatureItem item={item} key={item.name}/>
            );
          })}
    </div>
  );
};

export default HomeContainer(FeaturedList);
