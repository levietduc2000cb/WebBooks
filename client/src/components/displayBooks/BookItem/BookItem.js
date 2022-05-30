import { Link } from "react-router-dom";
import { handleNumber } from "../../../util/handleNumber";
function BookItem(props) {
  return (
    <div className="max-w-[167px] w-full mx-auto">
      <Link to={`/detail/${props.to}`}>
        <div className="relative max-h-[232px] h-full">
          <img
            className="object-contain w-full h-full cursor-pointer"
            src={props.bookUrlImg}
            alt="img-book"
          ></img>
          <div className="absolute bg-[#FFC000] w-[50px] h-[32px] top-0 right-0 flex items-center justify-center">
            <div className="text-white font-bold">-5%</div>
            <div className="arrow-down absolute top-full"></div>
          </div>
        </div>
        <div className="text-left text-sm">
          <h1 className="capitalize mt-2 hover:text-[#00CC66] cursor-pointer truncate">
            {props.name}
          </h1>
          <p className="capitalize text-xs my-2 hover:text-[#00CC66] cursor-pointer truncate">
            {props.author}
          </p>
          <h1 className="font-bold mt-1">
            {handleNumber(props.price)}
            <strong>đ</strong>
          </h1>
        </div>
      </Link>
    </div>
  );
}
export default BookItem;
