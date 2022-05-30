import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import { removeCartItem } from "../../../redux/Slices/CartItems";
import { handleNumber } from "../../../util/handleNumber";

function CartItem(props) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(removeCartItem(props.indexItem));
  }

  return (
    <tbody>
      <tr
        className={`text-[13px] md:text-base font-semibold boder border-t-2 border-gray-500 ${classes.itemHover} md:hover:cursor-default md:hover:bg-[rgba(1,1,1,0.05)]`}
      >
        <td className="py-3 hidden md:block">
          <div className="max-w-[120px] w-full max-h-[140px] h-full">
            <div>
              <img
                className="w-full h-full object-contain"
                src={props.imgUrl}
                alt="img-shopee"
              ></img>
            </div>
          </div>
        </td>
        <td className="text-center max-w-[280px] py-2">{props.namebook}</td>
        <td className="py-3">{props.amount}</td>
        <td className="py-3 hidden md:table-cell">
          {handleNumber(props.price)} <strong>đ</strong>
        </td>
        <td className="py-3">
          {handleNumber(props.reallyPrice)} <strong>đ</strong>
        </td>
        <td className="py-3">
          <div onClick={handleDelete}>
            <button
              className={`hidden md:block  lg:invisible ${classes.buttonHover} bg-red-600 py-2 px-6 text-white outline-none rounded font-semibold`}
            >
              Xóa
            </button>
            <button className="block md:hidden px-2 py-1 bg-red-600 rounded">
              <AiOutlineDelete className="text-white" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
export default CartItem;
