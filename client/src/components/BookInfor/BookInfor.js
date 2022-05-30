function BookInfor({ seller, author, year, description }) {
  return (
    <div className="bg-white my-5 rounded-lg">
      <div className="mx-6 text-left">
        <div className="text-[22px] font-bold py-5">Thông tin sản phẩm</div>
        <div className="pb-10">
          <div className="grid grid-cols-2 gap-x-2 md:gap-x-0 md:grid-cols-4">
            <div className="text-[15px] sm:text-base">
              <div className="py-2">Tên Nhà Cung Cấp</div>
              <div className="py-2">Tác giả</div>
              <div className="py-2">Người Dịch</div>
              <div className="py-2">NXB</div>
              <div className="py-2">Năm XB</div>
              <div className="py-2">Trọng lượng (gr)</div>
              <div className="py-2">Kích Thước Bao Bì</div>
              <div className="py-2">Hình thức</div>
            </div>
            <div className="text-[15px] sm:text-base">
              <div className="py-2">{seller}</div>
              <div className="py-2">{author}</div>
              <div className="py-2">{author}</div>
              <div className="py-2">NXB Nobita.vn</div>
              <div className="py-2">{year}</div>
              <div className="py-2">900</div>
              <div className="py-2">19 x 13 cm</div>
              <div className="py-2">Bìa Mềm</div>
            </div>
          </div>
        </div>
        <div className="pt-10 boder border-solid border-t-2 border-gray-500">
          {description}
        </div>
      </div>
    </div>
  );
}
export default BookInfor;
