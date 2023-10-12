import { FeatureItem } from ".";
import { HomeContainer } from "./HOC";

const FeaturedList = (): JSX.Element => {
  return (
    <div className="featured w-full max-w-[1024px] bg-[red] flex justify-between gap-[20px]">
      <FeatureItem />
      <FeatureItem />
      <FeatureItem />
    </div>
  );
};

export default HomeContainer(FeaturedList);
