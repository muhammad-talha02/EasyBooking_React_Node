import { H1, H2, H3 } from "../TailwindComponents/Typorgraphy/Headings";

interface FeatureItem {
  item: any;
}

const FeatureItem = ({ item  }: FeatureItem) => {
  return (
    <div className="featuredItem relative text-white h-[250px] overflow-hidden rounded-lg z-[1]">
      <img
        className="w-full h-full object-cover"
        src={item.img}
        alt={item.name}
      />
      <div className="featureTitles absolute bottom-1 left-2">
        <H2>{item.name}</H2>
        <H3>{item.properties?.length} Properties</H3>
      </div>
    </div>
  );
};

export default FeatureItem;
