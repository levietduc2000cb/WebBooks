import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "../../components/Layout/Layout";
import BookDetail from "../../components/BookDetail/BookDetail";
import BookInfor from "../../components/BookInfor/BookInfor";
import Spinner from "../../components/UI/Spinner/Spinner";
import Notification from "../../components/Notification/Notification";
import { useSelector, useDispatch } from "react-redux";
import { setStateAdd } from "../../redux/Slices/CartItems";
import * as api from "../../config/apiBackEnd";

function Detail(props) {
  const params = useParams();
  const idBook = params.detailId;
  const { stateAdd } = useSelector((state) => state.CartItemsReducer);
  const dispatch = useDispatch();
  const [bookDetail, setBookDetail] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const booksDetail = async (idBook) => {
      try {
        const res = await fetch(`${api.pathProducts}/getdetailproduct`, {
          body: JSON.stringify({ productId: idBook }),
          headers: { "Content-Type": "application/json" },
          method: "POST",
        })
          .then((response) => response.json())
          .then((data) => {
            return data;
          });
        setBookDetail({ ...res.data.products });
      } catch (error) {
        alert("Có lỗi xảy ra trong quá trình tải trang");
      }
    };
    const time = setTimeout(() => {
      booksDetail(idBook);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, [idBook]);

  function handleStateSuccess() {
    dispatch(setStateAdd());
  }

  return (
    <>
      <Layout>
        <div>
          <div className="max-w-7xl w-full mx-auto">
            {bookDetail ? (
              <>
                <BookDetail
                  imageUrl={bookDetail.image}
                  name={bookDetail.name}
                  price={bookDetail.price}
                  seller={bookDetail.seller.name}
                  author={bookDetail.author}
                />
                <BookInfor
                  seller={bookDetail.seller.name}
                  author={bookDetail.author}
                  year={bookDetail.createdAt.slice(0, 4)}
                  description={bookDetail.description}
                />
              </>
            ) : (
              <div className="flex items-center justify-center pt-10">
                <Spinner width="w-1/12" height="h-1/12" />
              </div>
            )}
          </div>
        </div>
      </Layout>
      {stateAdd === true && (
        <Notification
          title="Thêm vào giỏ hàng thành công"
          stateCreate="Success"
          onClick={handleStateSuccess}
        />
      )}
    </>
  );
}
export default Detail;
