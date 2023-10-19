import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { H2 } from "../TailwindComponents/Typorgraphy/Headings";
type ModalProps = {
  title?: string;
  show: boolean;
  closeModal: () => void;
};

const Modal = ({ show, closeModal, title }: ModalProps) => {
  const portal: HTMLElement | Element = document.getElementById("portal")!;
  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="Overlay backdrop-blur-[2px] w-[100%] fixed overflow-y-hidden top-0 left-0 h-[100vh] bottom-0 z-50 bg-[#00000069] flex justify-center items-center">
      <div className="Modal mx-4  w-full md:w-[80%] max-w-[1024px] bg-white h-[50%] rounded-md">
        <div className="modal-content">
          <div className="modalHeader flex justify-between">
            <H2>{title}</H2>
            <button onClick={closeModal} className="text-[22px] mr-3">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      </div>
    </div>,
    portal
  );
};

export default Modal;
