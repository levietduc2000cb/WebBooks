import logoSaleNoti from "../../assets/logoSaleNoti.png";
import BottomItems from "./BottomItems/BottomItems";
function Bottom(props) {
  return (
    <div className="mt-20 pt-5 bg-[rgba(22,24,35,0.02)]">
      <div className="container mx-auto">
        <div className="max-w-7xl w-full mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-auto grid grid-cols-2 gap-x-2 md:gap-x-auto md:grid-cols-3 lg:grid-cols-4 pb-12">
          <BottomItems
            title={"Hỗ Trợ Khách Hàng"}
            contents={["Email: admin@nobita.vn", "Hotline: 0938 424 289"]}
          ></BottomItems>
          <BottomItems
            title={"Giới Thiệu"}
            contents={["Về nobita", "Tuyển dụng"]}
          ></BottomItems>
          <BottomItems
            title={"Tài Khoản"}
            contents={["Tài khoản", "Danh sách đơn hàng", "Thông báo"]}
          ></BottomItems>
          <BottomItems
            title={"Hướng Dẫn"}
            contents={[
              "Hướng dẫn mua hàng",
              "Phương thức thanh toán",
              "Câu hỏi thường gặp",
              "Phương thức vận chuyển",
            ]}
          ></BottomItems>
        </div>
        <div className="flex flex-col items-center py-4 boder border-solid border-t-2">
          <p>Copyright © 2014 Nobita.vn</p>
          <p>Địa chỉ: 25/5 Thăng Long, P. 4, Quận Tân Bình, TP. Hồ Chí Minh</p>
          <div>
            <img
              className="w-[242px] h-[77px] my-2"
              src={logoSaleNoti}
              alt="permit"
            ></img>
          </div>
          <p>
            Công ty lắp camera quan sát Dịch vụ lắp camera quan sát lắp báo động
            chống trộm
          </p>
        </div>
      </div>
    </div>
  );
}
export default Bottom;
