import Layout from "../../components/Layout/Layout";
import CartItems from "../../components/CartItems/CartItems";
import emptyCart from "../../assets/empty-cart.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Cart(props) {
  const bookItems = useSelector((state) => state.CartItemsReducer.cartItems);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="max-w-7xl w-full mx-auto">
        {bookItems.length > 0 ? (
          <CartItems bookItems={bookItems} />
        ) : (
          <div className="flex justify-center items-center">
            <img src={emptyCart} alt="empty-img"></img>
          </div>
        )}
      </div>
    </Layout>
  );
}
export default Cart;
