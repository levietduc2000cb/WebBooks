import Modal from "../UI/Modal/Modal";
import { IoMdCheckmarkCircle, IoMdWarning } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";

function Notification({ onClick = false, title, stateCreate }) {
  function setIcon(stateCreate) {
    switch (stateCreate) {
      case "Success":
        return <IoMdCheckmarkCircle className="text-green-500 text-7xl" />;
      case "Error":
        return (
          <RiErrorWarningFill className="text-red-500 text-7xl"></RiErrorWarningFill>
        );
      default:
        return <IoMdWarning className="text-yellow-500 text-7xl"></IoMdWarning>;
    }
  }

  return (
    <Modal>
      <div className="bg-white max-w-sm w-full rounded-lg overflow-hidden pt-4 mx-2 sm:mx-auto animate-transformTop">
        <div className="flex justify-center">{setIcon(stateCreate)}</div>
        <div className="font-bold capitalize my-2 text-center max-w-[280px] mx-auto py-2">
          {title}
        </div>
        <button
          onClick={onClick}
          className="capitalize py-2 bg-[#F8F9FA] w-full"
        >
          Đồng Ý
        </button>
      </div>
    </Modal>
  );
}
export default Notification;
