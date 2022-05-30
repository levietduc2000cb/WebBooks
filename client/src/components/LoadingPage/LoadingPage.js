import Modal from "../UI/Modal/Modal";
import Spinner from "../UI/Spinner/Spinner";
function LoadingPage(props) {
  return (
    <Modal>
      <Spinner width={"w-1/6"} height={"h-1/6"} />
    </Modal>
  );
}
export default LoadingPage;
