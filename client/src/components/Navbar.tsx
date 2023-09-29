import { Button } from "../TailwindComponents";

const Navbar = () => {
  return (
    <div className="navbar h-[50px] bg-[--theme] flex justify-center">
      <div className="navContainer w-[100%] max-w-[1024px] flex justify-between items-center text-[white]">
        <span className="logo font-bold">EasyBooking</span>
        <div className="navItems">
          <Button classes="bg-white text-[--theme]">
            Login
          </Button>
          <Button classes="bg-white text-[--theme] ml-[20px]">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
