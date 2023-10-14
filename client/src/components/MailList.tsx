import { H2, H5 } from "../TailwindComponents/Typorgraphy/Headings";

const MailList = () => {
  return (
    <div className="mail w-full mx-auto flex flex-col bg-[--theme] text-white mt-[50px] items-center gap-[10px] py-[50px]">
      <H2>Save Time, Save Money!</H2>
      <H5 classes="!font-[300]">Signup and we'll send you the best deals.</H5>
      <div className="InputCont">
        <input type="text" placeholder="Your Email" className="w-[300px] h-[40px] p-[10px] mr-1 outline-none text-[--theme] rounded-sm"/>
        <button className="bg-[--theme-light] font-bold p-[8px] border-0 rounded-sm">Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
