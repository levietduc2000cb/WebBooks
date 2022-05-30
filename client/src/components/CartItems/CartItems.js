import { useMemo } from "react";

import CartItem from "./CartItem/CartItem";
import { handleNumber } from "../../util/handleNumber";

function CartItems(props) {
  const total = useMemo(() => {
    return props.bookItems.reduce((total, item) => {
      return total + item.price * item.amount;
    }, 0);
  }, [props.bookItems]);

  return (
    <div>
      <div className="py-2 text-xl font-bold pl-1 text-left text-white bg-[#00CC66]">
        Danh sách sản phẩm
      </div>
      <table className="w-full">
        <tbody>
          <tr className="text-[13px] md:text-lg font-bold">
            <th className="text-left py-2 hidden md:table-cell">Hình ảnh</th>
            <th className="py-2">Tên sản phẩm</th>
            <th>Số lượng</th>
            <th className="hidden md:table-cell">Mức giá</th>
            <th>Thành tiền</th>
          </tr>
        </tbody>
        {props.bookItems.map((book, index) => {
          return (
            <CartItem
              key={index}
              indexItem={index}
              namebook={book.name}
              price={book.price}
              reallyPrice={book.price * book.amount}
              amount={book.amount}
              imgUrl={book.imageUrl}
            />
          );
        })}
      </table>
      <div className="flex justify-end items-center px-2 py-2 font-bold">
        <div className="text-[#00CC66] text-base md:text-2xl">Tổng Tiền:</div>
        <div className="text-sm md:text-xl pl-2">
          {handleNumber(total)}
          <strong>đ</strong>
        </div>
      </div>
      <div>
        <button className="w-full py-3 border-0 outline-none rounded-full bg-[#F6402D] font-bold text-white md:hover:bg-[#FB5631]">
          Tạo đơn hàng
        </button>
      </div>
    </div>
  );
}
export default CartItems;
