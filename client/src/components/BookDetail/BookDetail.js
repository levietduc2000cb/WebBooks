import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { addCartItem } from "../../redux/Slices/CartItems";
import BookDetailLeft from "./BookDetailLeft/BookDetailLeft";
import BookDetailRight from "./BookDetailRight/BookDetailRight";
import Notification from "../Notification/Notification";
import pathRoutes from "../../config/pathRoutes";

function BookDetail({ imageUrl, name, price, seller, author }) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.AuthReducer);
  const navigate = useNavigate();
  const [checkUser, setCheckUser] = useState(true);
  function handleAddCart(amount) {
    if (currentUser) {
      const item = {
        actionType: "addcart",
        newItems: {
          imageUrl,
          name,
          amount,
          price,
        },
      };
      dispatch(addCartItem(item));
    } else {
      setCheckUser(false);
    }
  }
  function handleBuy(amount) {
    if (currentUser) {
      const item = {
        actionType: "buy",
        newItems: {
          imageUrl,
          name,
          amount,
          price,
        },
      };
      dispatch(addCartItem(item));
      navigate(pathRoutes.cart);
    } else {
      setCheckUser(false);
    }
  }

  function handleClickNotification() {
    setCheckUser(true);
    navigate(pathRoutes.login);
  }

  return (
    <>
      <div className="max-w-7xl mx-auto w-full bg-white">
        <div className="flex flex-col md:flex-row py-7 rounded-lg">
          <BookDetailLeft imageUrl={imageUrl} />
          <BookDetailRight
            name={name}
            price={price}
            seller={seller}
            author={author}
            handleClickAddCart={handleAddCart}
            handleClickBuy={handleBuy}
          />
        </div>
      </div>
      {checkUser === false ? (
        <Notification
          onClick={handleClickNotification}
          title="Người dùng phải đăng nhập"
          stateCreate
        />
      ) : null}
    </>
  );
}
export default BookDetail;
