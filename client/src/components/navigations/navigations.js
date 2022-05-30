import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { ImMenu } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { resetUser } from "../../redux/Slices/AuthSlice";
import Navigaiton from "./navigation/navigation";
import NavigationUser from "./navigationUser/navigationUser";
import pathRouters from "../../config/pathRoutes";

function Navigations(props) {
  const { currentUser } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  function handleLogout() {
    dispatch(resetUser());
    navigate(pathRouters.home);
  }

  return (
    <>
      <div
        className="block lg:hidden"
        onClick={() => {
          setShowNav(true);
        }}
      >
        <ImMenu className="text-white text-4xl" />
      </div>
      <div
        className={`fixed z-50 top-0 right-0 bg-black h-screen transition-all lg:transition-none lg:static lg:bg-transparent lg:h-auto lg:w-auto flex flex-col lg:flex lg:flex-row space-x-2 ${
          showNav ? "w-1/2" : "w-0"
        }`}
      >
        <div
          className="block lg:hidden"
          onClick={() => {
            setShowNav(false);
          }}
        >
          <GrClose className="bg-white text-4xl" />
        </div>
        {currentUser ? (
          <>
            <NavigationUser />
            <Navigaiton to={pathRouters.additem}>Đăng Bán</Navigaiton>
            <Navigaiton to={pathRouters.cart}>Giỏ Hàng</Navigaiton>
            <div onClick={handleLogout}>
              <Navigaiton>Đăng Xuất</Navigaiton>
            </div>
          </>
        ) : (
          <>
            <Navigaiton to={pathRouters.register}>Đăng Ký</Navigaiton>
            <Navigaiton to={pathRouters.login}>Đăng Nhập</Navigaiton>
          </>
        )}
      </div>
    </>
  );
}
export default Navigations;
