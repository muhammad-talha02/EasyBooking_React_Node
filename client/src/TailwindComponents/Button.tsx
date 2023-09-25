// import classnames from 'classnames';
type ButtonInterface = {
  classes: string;
  children: React.ReactNode;
  action: () => void;
};

const Button = (props: ButtonInterface): JSX.Element => {
  return (
    <button
      className={`ml-[20px] py-[5px] px-[10px] ${props.classes} bg-[white] rounded-sm text-${props.classes}`}
      onClick={props.action}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
