import { ProperttyTypeItem } from ".";
import { H3} from "../TailwindComponents/Typorgraphy/Headings";
import { HomeContainer } from "./HOC";

const PropertyTypesList = () => {
  return (
    <div className="w-full">
      <H3 classes="">Browse by property types</H3>
      <div className="pList mt-[20px] flex gap-[20px] justify-between">
        <ProperttyTypeItem />
        <ProperttyTypeItem />
        <ProperttyTypeItem />
        <ProperttyTypeItem />
        <ProperttyTypeItem />
      </div>
    </div>
  );
};

export default HomeContainer(PropertyTypesList);
