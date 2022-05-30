import classes from "./SideBar.module.css";
import { AiOutlineRight } from "react-icons/ai";
import Side from "./Side/Side";

function SideBar(props) {
  return (
    <div
      className={`relative z-40 ${classes.showNavBar} px-1 py-2 bg-white w-[150px] sm:w-auto`}
    >
      <div className="flex items-center justify-between cursor-pointer">
        <div className="text-left">{props.title}</div>
        <div className="pl-2">
          <AiOutlineRight />
        </div>
      </div>
      <div
        className={`absolute top-0 left-full bg-[#F2F2F2] w-[150px] sm:w-[200px] hidden cursor-pointer ${classes.nav} boder border-l-[6px] border-green-600`}
      >
        {props.items.map((item, index) => {
          return <Side key={index}>{item}</Side>;
        })}
      </div>
    </div>
  );
}
export default SideBar;
