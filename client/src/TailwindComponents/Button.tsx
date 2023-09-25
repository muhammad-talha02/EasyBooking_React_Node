// import classnames from 'classnames';
import React, { FC } from "react";

interface ButtonInterface{
  classes : string,
  action: (x: string)=> void;
  }

const Button: FC<ButtonInterface> = (props): JSX.Element => {
  return (
    <button
      className={`navButton ml-[20px] py-[5px] px-[10px] text-${props.classes} bg-[white] rounded-sm text-${props.classes}`}
      onClick={()=> props.action("Ferid")}
    >
      Login
    </button>
  );
};


export default Button;
