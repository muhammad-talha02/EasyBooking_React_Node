import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { ReactNode } from "react";
type ModalProps = {
  show: boolean;
  closeModal: () => void;
  children?:ReactNode
};

const GalleryModal = ({ show, closeModal, children}: ModalProps) => {
  const portal: HTMLElement | Element = document.getElementById("portal")!;
  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="Overlay backdrop-blur-[2px] w-[100%] fixed overflow-y-hidden top-0 left-0 h-[100vh] bottom-0 z-50 bg-[#00000069] flex justify-center items-center">
      <div className="Modal mx-4  w-full rounded-md">
        <div className="modal-content h-full flex flex-col">
          <div className="modalHeader">
            {/* <H2>{title}</H2> */}
            <button onClick={closeModal} className="text-[22px] mr-3 float-right mb-3 rounded-full ">
              <FontAwesomeIcon className="text-white" icon={faXmark} />
            </button>
          </div>
          <div className="modalBody h-[90%]">
            {children}
          </div>
        </div>
      </div>
    </div>,
    portal
  );
};

export default GalleryModal;
