import { H3, H5 } from "../TailwindComponents/Typorgraphy/Headings";
interface IPropertyItem {
  item: {
    type: string;
    count: number;
  },
  img:string
}

const ProperttyTypeItem = ({ item, img }: IPropertyItem) => {
  return (
    <div className="pListItem rounded-md overflow-hidden cursor-pointer flex-1">
      <img
        className="w-full h-[150px] object-cover"
        src={img}
        alt=""
      />
      <div className="pListTitles">
        <H3 classes="font-medium capitalize">{item.type}</H3>
        <H5 classes="font-light capitalize">
          {item.count} {item.type}
        </H5>
      </div>
    </div>
  );
};

export default ProperttyTypeItem;
