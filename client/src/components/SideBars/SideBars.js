import SideBar from "./SideBar/SideBar";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
function NavBars(props) {
  const [showNav, setShowNav] = useState(false);
  const NavBarItems = [
    {
      title: "Nổi bật",
      items: ["Sách bán chạy", "Sách mới", "Sắp phát hành", "Sách giảm giá"],
    },
    {
      title: "Sách kinh tế",
      items: [
        "Tài chính - Kế toán",
        "Quản trị - Lãnh đạo",
        "Marketing - Bán hàng",
        "Kỹ năng làm việc",
        "Kinh tế học",
        "Khởi nghiệp",
        "Doanh nhân -  Tập đoàn",
        "Bài học kinh doanh",
      ],
    },
    {
      title: "Văn học nước ngoài",
      items: [
        "Tiểu sử - Hồi ký",
        "Truyện lịch sử -  Kiếm hiệp",
        "Truyện ngắn - Tản văn",
        "Tác phẩm kinh điển",
        "Huyền bí - Giả tưởng",
        "Truyện trinh thám -  Kinh dị",
        "Tiểu thuyết tình cảm - Lãng mạng",
        "Tiểu thuyết đam mỹ",
        "Bách hợp",
      ],
    },
    {
      title: "Văn học trong nước",
      items: [
        "Tiểu thuyết",
        "Truyện ngắn - Tản văn",
        "Huyền bí - Giả tưởng",
        "Phóng sự -  Ký sự",
        "Trinh thám -  Kinh dị",
        "Tiểu sử - Hồi ký",
      ],
    },
    {
      title: "Sách kỹ năng sống",
      items: ["Kỹ năng sống", "Nghệ thuật sống đẹp"],
    },
    {
      title: "Sách tuổi teen",
      items: [
        "Văn học teen",
        "Hướng nghiệp - Kỹ năng",
        "Light Novel",
        "Truyện tranh - Comic",
      ],
    },
    {
      title: "Học ngoại ngữ",
      items: [
        "Từ điển",
        "Sách học tiếng Anh",
        "Sách học tiếng Hoa",
        "Sách học tiếng Nhật",
      ],
    },
    {
      title: "Sách thiếu nhi",
      items: [
        "Truyện cổ tích - Thần thoại",
        "Vừa học vừa chơi",
        "Kiến thức - Kỹ năng",
        "Văn học",
        "Truyện kể cho bé",
      ],
    },
    {
      title: "Thưởng thức đời sống",
      items: [
        "Văn hóa - Du lịch",
        "Chăm sóc sức khỏe",
        "Phong thủy - Nhà cửa",
        "Nấu ăn",
        "Thể thao - Giải trí",
      ],
    },
    {
      title: "Sách chuyên ngành",
      items: [
        "Giáo dục",
        "Công nghệ thông tin",
        "Lịch sử - Địa lý",
        "Khoa học tự nhiên",
        "Mỹ thuật - Kiến trúc",
        "Chính trị - Triết học",
        "Doanh nhân - Người nổi tiếng",
        "Tâm linh - Tôn giáo",
        "Y dược",
        "Khoa học xã hội",
      ],
    },
    {
      title: "Văn phòng phẩm - Quà tặng",
      items: [
        "Bóp viết - Hộp bút",
        "Bình nước - Bình giữ nhiệt",
        "Phụ kiện - Quà tặng",
      ],
    },
  ];
  return (
    <div className="bg-[#F2F2F2]">
      <div className="container mx-auto">
        <div className="max-w-7xl w-full mx-auto">
          <div className="relative text-sm py-4">
            <div
              className="flex items-center font-bold cursor-pointer max-w-[194px]"
              onClick={(e) => {
                e.stopPropagation();
                setShowNav(!showNav);
              }}
            >
              <div className="mr-4 pl-1">
                <AiOutlineMenuUnfold />
              </div>
              <div className="uppercase">Danh mục sản phẩm</div>
            </div>
            {showNav ? (
              <div className="absolute top-full left-0 z-40">
                {NavBarItems.map((navItems, index) => {
                  return (
                    <SideBar
                      key={index}
                      title={navItems.title}
                      items={navItems.items}
                    />
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBars;
