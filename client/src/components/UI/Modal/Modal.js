function Modal(props) {
  return (
    <div className="bg-[rgba(1,1,1,0.2)] w-screen h-screen z-[999] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      {props.children}
    </div>
  );
}
export default Modal;
