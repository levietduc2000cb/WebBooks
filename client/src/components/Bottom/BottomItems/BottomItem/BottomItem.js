function BottomItem(props) {
  return (
    <p className="hover:underline cursor-pointer mt-1">{props.children}</p>
  );
}
export default BottomItem;
