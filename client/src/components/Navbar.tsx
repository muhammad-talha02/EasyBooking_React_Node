import { Button } from "../TailwindComponents";

const Navbar = () => {
  return (
    <div className="navbar h-[50px] bg-[--theme] flex justify-center">
      <div className="navContainer w-[100%] max-w-[1024px] flex justify-between items-center text-[white]">
        <span className="logo font-bold">EasyBooking</span>
        <div className="navItems">
          <Button>
            Login
          </Button>
          <Button classes="ml-[20px]">
            Login
          </Button>
          <button className="navButton ml-[20px] ">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
