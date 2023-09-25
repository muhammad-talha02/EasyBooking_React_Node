import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderIcons } from "../utils/HeaderIcons";
import { Button } from "../TailwindComponents";
const Header = () => {
  // const test = faBed

  return (
    <div className="header flex justify-center text-white bg-[--theme]">
      <div className="headerContainer w-[100%] max-w-[1024px] mt-[20px] mx-[0px] mb-[100px]">
        <div className="headerList  flex gap-[40px] mb-8">
          {HeaderIcons?.map((item) => {
            return (
              <div
                key={item.title}
                className="first:border-2 first:rounded-md p-[10px] headerListItem flex items-center gap-[10px]"
              >
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
        <h1 className="headerTitle text-3xl font-bold">
          Discount for lifetime. It Genious!
        </h1>
        <p className="headerDesc my-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dicta
          explicabo deserunt quod maiores enim aliquid neque soluta sint, ea
          consequuntur officia, mollitia adipisci architecto voluptatum nemo.
          Facere, labore molestiae.
        </p>
        <Button classes="p-[10px] bg-[#0071c2] text-[white] border-0 font-medium">
          Login / Register
        </Button>
        <div className="headerSearch">
          
        </div>
      </div>
    </div>
  );
};

export default Header;
