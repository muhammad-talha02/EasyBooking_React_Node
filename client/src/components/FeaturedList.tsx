import { FeatureItem } from ".";
import useFetch from "../hooks/useFetch";
import { HomeContainer } from "./HOC";

// interface useFetchProps {
//   data:any,
//   loading:boolean,
//   error:any
// }

const FeaturedList = (): JSX.Element => {
  const {
    data: FeatureData,
    loading,
    error,
  } = useFetch("/api/hotels/countByCity?cities=Abu Dhabi,Dubai,Sharjah");

  console.log(FeatureData);
  return (
    <div className="featured w-full max-w-[1024px] flex justify-between gap-[20px]">
      {loading
        ? "Please Waitt"
        : FeatureData?.map((item: any) => {
            return (
              <>
                <FeatureItem item={item} key={item} />
              </>
            );
          })}
    </div>
  );
};

export default HomeContainer(FeaturedList);
