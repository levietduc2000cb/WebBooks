import imgTitleAuth from "../../assets/img-auth.jpg";
import { Link } from "react-router-dom";
import pathRouLink from "../../config/pathRoutes";

function LayoutAuth(props) {
  return (
    <div className="bg-background-auth w-screen h-screen bg-repeat flex justify-center items-center">
      <div className="bg-white w-full mx-2 sm:w-10/12 md:max-w-7xl sm:mx-auto grid grid-cols-1 md:grid-cols-2 rounded-md animate-transformTop">
        <div className="p-6">
          <div className="flex justify-center">
            <Link
              to={pathRouLink.home}
              className="block font-smooch text-5xl font-bold text-[#00CC66]"
            >
              Nobita.vn
            </Link>
          </div>
          <h1 className="font-bold text-3xl">{props.textButtonForm}</h1>
          <div>{props.children}</div>
          <div className="mt-6 text-[10px] sm:text-base">
            <div className="w-10/12 mx-auto flex justify-between items-center">
              <div className="font-semibold">{props.content}</div>
              <div>
                <Link to={props.to}>
                  <button className="boder border-red-600 text-red-600 font-semibold border-2 py-2 px-6 rounded hover:bg-red-600 hover:text-white">
                    {props.textButton}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative w-full h-full">
            <img
              className="w-full h-full"
              src={imgTitleAuth}
              alt="img-title"
            ></img>
            <div className="absolute top-0 left-0 right-0 bottom-0 text-white bg-[rgba(1,1,1,0.5)] text-center text-5xl flex justify-center items-center font-smooch px-4 leading-relaxed">
              Hãy ghé qua Nobita.vn với nhiều cuốn sách, truyện tranh, tiểu
              thuyết hấp dẫn với giá rẻ và chất lượng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LayoutAuth;
