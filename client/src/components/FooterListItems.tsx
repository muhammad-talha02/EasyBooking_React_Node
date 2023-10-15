type FooterListItemsProps = {
  items?: string[];
};

const FooterListItems = ({ items }: FooterListItemsProps) => {
  return (
    <ul className="footerList">
      {items?.map((val, index) => (
        <li className="footerlistItem mb-[10px] text-[--theme] cursor-pointer" key={`${val+index}`}>
          {val}
        </li>
      ))}
    </ul>
  );
};

export default FooterListItems;
