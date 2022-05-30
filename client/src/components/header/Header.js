import logo from "../../assets/logo.png";
import Search from "../search/search";
import Navigations from "../navigations/navigations";
import { Link } from "react-router-dom";
import pathRouters from "../../config/pathRoutes";

function Header(props) {
  return (
    <div className="w-screen h-auto bg-[#00CC66] pt-1 pb-2">
      <div className="container mx-auto">
        <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
          <Link to={pathRouters.home}>
            <div className="cursor-pointer">
              <img className="w-[80px] md:w-auto" src={logo} alt="logo"></img>
            </div>
          </Link>
          <div>
            <Search />
          </div>
          <div>
            <Navigations />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
