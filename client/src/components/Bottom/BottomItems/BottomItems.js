import BottomItem from "./BottomItem/BottomItem";

function BottomItems(props) {
  return (
    <div className="text-black text-left">
      <h1 className="font-bold opacity-70 mb-1">{props.title}</h1>
      {props.contents.map((content, index) => {
        return <BottomItem key={index}>{content}</BottomItem>;
      })}
    </div>
  );
}
export default BottomItems;
