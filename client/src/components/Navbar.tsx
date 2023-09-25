import { Button } from "../TailwindComponents";

const Navbar = () => {
  return (
    <div className="navbar h-[50px] bg-[--theme] flex justify-center">
      <div className="navContainer w-[100%] max-w-[1024px] flex justify-between items-center text-[white]">
        <span className="logo font-bold">EasyBooking</span>
        <div className="navItems">
          <button className="navButton ml-[20px] py-[5px] px-[10px] text-[--theme] bg-[white] rounded-sm">
            Login
          </button>
          <Button classes="[red]" action={(x: string)=>alert('Hello ' + x)}/>
          <button className="navButton ml-[20px] ">Register</button>
        </div>
      </div>
    </div>
  );
};

function test (x: string | undefined)  {
  let y;
  y = 12;
  alert("Hello " +x);
}
export default Navbar;
