type OptionCardProps = {
  title: string;
  stateValue: number;
  increment: (name?: string, operation?: string) => void;
  decrement: (name?: string, operation?: string) => void;
};

const OptionsCard = ({
  title,
  stateValue,
  increment,
  decrement,
}: OptionCardProps) => {
  return (
    <>
      <div className="option w-[200px] flex justify-between m-4">
        <span>{title}</span>
        <div className="flex items-center gap-[10px]">
          <button
            className="bg-[--theme] text-white w-[33px] text-xl font-bold py-1"
            onClick={()=>increment()}
          >
            +
          </button>
          <span className="text-black">{stateValue}</span>
          <button
            className="bg-[--theme] text-white w-[33px] text-xl font-bold py-1"
            onClick={()=>decrement()}
          >
            -
          </button>
        </div>
      </div>
      {/* <div className="option w-[200px] flex justify-between m-4">
        <span>Children</span>
        <button>+</button>
        <span>1</span>
        <button>-</button>
      </div>
      <div className="option w-[200px] flex justify-between m-4">
        <span>Room</span>
        <button>+</button>
        <span>1</span>
        <button>-</button>
      </div> */}
    </>
  );
};

export default OptionsCard;
