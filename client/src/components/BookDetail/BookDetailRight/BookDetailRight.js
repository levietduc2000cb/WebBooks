import { useState, memo } from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { GrSubtract, GrAdd } from "react-icons/gr";

import { handleNumber } from "../../../util/handleNumber";

function BookDetailRight({
  name,
  price,
  seller,
  author,
  handleClickAddCart,
  handleClickBuy,
}) {
  const [amount, setAmount] = useState(1);
  function AddAmount() {
    setAmount((preAmount) => preAmount + 1);
  }
  function SubtractAmount() {
    setAmount((preAmount) => {
      if (preAmount === 1) {
        return 1;
      }
      return preAmount - 1;
    });
  }

  return (
    <div className="flex flex-col my-10 mx-5 md:mx-auto md:my-auto">
      <h1 className="text-2xl font-medium text-left">{name}</h1>
      <div className="flex justify-between text-sm text-left my-4">
        <div>
          <p>
            Nhà cung cấp:
            <span className="text-[#2489F5] font-semibold">{seller}</span>
          </p>
          <p>
            Nhà xuất bản:
            <span className="text-black font-semibold">Nobita.vn</span>
          </p>
        </div>
        <div>
          <p>
            Tác giả:
            <span className="text-text-black font-semibold">{author}</span>
          </p>
          <p>
            Hình thức bìa:
            <span className="text-black font-semibold">Bìa Mềm</span>
          </p>
        </div>
      </div>
      <div className="flex">
        <AiFillStar className="text-[#FFFF33]" />
        <AiFillStar className="text-[#FFFF33]" />
        <AiFillStar className="text-[#FFFF33]" />
        <AiFillStar className="text-gray-500" />
        <AiFillStar className="text-gray-500" />
      </div>
      <div className="text-left text-4xl text-[#C92127] font-bold my-4">
        {handleNumber(price)} <strong>đ</strong>
      </div>
      <div className="flex text-left my-2 text-[14px] sm:text-base">
        <div className="pr-8">Chính sách đổi trả</div>
        <div>Đổi trả sản phẩm trong 30 ngày</div>
      </div>
      <div className="flex items-center my-3">
        <div className="text-[14px] sm:text-lg font-bold mr-24">Số lượng: </div>
        <div className="flex boder border-[2px] border-solid rounded text-[14px] sm:text-lg">
          <button className="outline-none px-3 py-1" onClick={SubtractAmount}>
            <GrSubtract className="font-bold " />
          </button>
          <div className="px-2 py-1 font-bold">{amount}</div>
          <button className="outline-none px-3 py-1" onClick={AddAmount}>
            <GrAdd className="font-bold " />
          </button>
        </div>
      </div>
      <div className="text-[12px] sm:text-base text-left font-bold text-[#2489F6] bg-[#C9F0FF] py-2 pl-2 my-2">
        Sách đang có sẵn tại Nobita.vn
      </div>
      <div className="flex space-x-3 my-4 text-[12px] sm:text-lg">
        <button
          onClick={() => {
            handleClickAddCart(amount);
          }}
          className="flex items-center text-[#C92127] bg-white font-bold px-4 py-3 boder border-solid border-2 border-red-600 rounded-lg"
        >
          <div className="mr-3">
            <AiOutlineShoppingCart />
          </div>
          <div>Thêm vào giỏ hàng</div>
        </button>
        <button
          onClick={() => {
            handleClickBuy(amount);
          }}
          className="flex items-center font-bold text-white bg-[#C92127] px-4 py-3 rounded-lg"
        >
          Mua ngay
        </button>
      </div>
    </div>
  );
}
export default memo(BookDetailRight);
