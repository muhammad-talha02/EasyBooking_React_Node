import { H3, H5 } from "../TailwindComponents/Typorgraphy/Headings";

const ProperttyTypeItem = () => {
  return (
    <div className="pListItem rounded-xl overflow-hidden cursor-pointer flex-1">
      <img
        className="w-full h-[150px] object-cover"
        src="https://images.unsplash.com/photo-1511091734515-e50d46c37240?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
        alt=""
      />
      <div className="pListTitles">
        <H3 classes="font-medium">Hotels</H3>
        <H5 classes="font-light">123 Hotels</H5>
      </div>
    </div>
  );
};

export default ProperttyTypeItem;
