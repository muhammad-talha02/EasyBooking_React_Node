import { Link } from "react-router-dom";
import { Button } from "../TailwindComponents";
import { useContext } from "react";
import { AuthContext, User } from "../context/authContext";

const Navbar = () => {

  const { state } = useContext(AuthContext)

  const user = state?.user?.user
  return (
    <div className="navbar h-[50px] bg-[--theme] flex justify-center">
      <div className="navContainer w-[100%] max-w-[1024px] flex justify-between items-center text-[white]">
        <Link to="/"><span className="logo font-bold">EasyBooking</span></Link>
        <div className="navItems">
          {
            user ? <> <span className="capitalize mr-3">{user.username}</span>  <Link to="/login">
              <Button classes="bg-white text-[--theme]">
                Logout
              </Button>
            </Link></> : <>
              <Link to="/login">
                <Button classes="bg-white text-[--theme]">
                  Login
                </Button>
              </Link>
              <Button classes="bg-white text-[--theme] ml-[20px]">
                Register
              </Button>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
