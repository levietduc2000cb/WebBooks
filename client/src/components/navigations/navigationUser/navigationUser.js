import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function NavigationUser(props) {
  const [selectImgFile, setSelectImgFile] = useState();
  const { myuser } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    setSelectImgFile(myuser.avatar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // function handleFileInputChange(e) {
  //   console.log("Input file avatar");
  //   const file = e.target.files[0];
  //   previewFile(file);
  // }
  // function previewFile(file) {
  //   if (!file) {
  //     return;
  //   }
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setSelectImgFile(reader.result);
  //   };
  //   uploadImg(selectImgFile);
  // }
  // async function uploadImg(base64Img) {
  //   console.log(base64Img);
  //   try {
  //   } catch (error) {}
  // }
  return (
    <div className="flex items-center justify-center mt-2 sm:mt-0">
      <div className="w-[30px] h-[30px] rounded-full overflow-hidden mr-2">
        <label htmlFor="avatar" className="cursor-pointer">
          <img className="object-cover" src={selectImgFile} alt="avatar"></img>
        </label>
        <input
          type="file"
          id="avatar"
          // onChange={handleFileInputChange}
          hidden
        ></input>
      </div>
      <div className="text-white text-sm font-bold ">{myuser.userName}</div>
    </div>
  );
}

export default NavigationUser;
