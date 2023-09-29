// import classnames from 'classnames';
type ButtonInterface = {
  classes?: string;
  children?: React.ReactNode;
  action?: () => void;
};

const Button = (props: ButtonInterface): JSX.Element => {
  return (
    <button
      className={`py-[5px] px-[10px] rounded-sm ${props.classes}`}
      onClick={()=>props.action?.()}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
