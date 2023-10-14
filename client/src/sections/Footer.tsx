import { FooterListItems } from "../components";
import { FooterItems } from "../utils";

const Footer = () => {
  return (
    <footer>
      <div className="footerLists flex w-full max-w-[1024px] justify-between mx-auto py-2">
        {
          FooterItems.map((item, index)=>{
            return (
              <FooterListItems key={index} items={item}/>
            )
          })
        }
        {/* <FooterListItems />
        <FooterListItems />
        <FooterListItems />
        <FooterListItems /> */}
      </div>
      <div className="footerBottom text-center bg-gray-200 py-5">
        <p>Copyright &copy; 2023. EasyBooking </p>
      </div>
    </footer>
  );
};

export default Footer;
