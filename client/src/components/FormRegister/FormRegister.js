import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import InputAuth from "../UI/Input/InputAuth";
import Spinner from "../UI/Spinner/Spinner";
import { registerUser, setErrorDefault } from "../../redux/Slices/AuthSlice";
import Notification from "../Notification/Notification";
import pathRouters from "../../config/pathRoutes";

function FormRegister(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, currentUser, error } = useSelector(
    (state) => state.AuthReducer
  );
  const [inputForm, setInputForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [avatar, setInputAvatar] = useState({ file: "", name: "" });

  useEffect(() => {
    if (currentUser) {
      navigate(pathRouters.home);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  function ChangeInput(e, keyInput) {
    setInputForm({ ...inputForm, [keyInput]: e.target.value });
  }
  function setAvatar(e) {
    setInputAvatar({ file: e.target.files[0], name: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    dispatch(registerUser({ ...inputForm, fileAvatar: avatar.file }));
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputAuth
          onChangeInput={ChangeInput}
          inputText={inputForm.fullname}
          idText={"fullname"}
          titleLaBel={"FULLNAME"}
          type={"text"}
          placeholder={"Nhập full name"}
        ></InputAuth>
        <div>
          <InputAuth
            onChangeInput={ChangeInput}
            inputText={inputForm.email}
            idText={"email"}
            titleLaBel={"EMAIL"}
            type={"text"}
            placeholder={"Nhập Email"}
          ></InputAuth>
        </div>
        <InputAuth
          onChangeInput={ChangeInput}
          inputText={inputForm.password}
          idText={"password"}
          titleLaBel={"PASSWORD"}
          type={"password"}
          placeholder={"Nhập Password"}
        ></InputAuth>
        <div className="w-10/12 mx-auto text-left">
          <label
            htmlFor="avatar"
            className="text-left font-bold text-[14px] sm:text-base"
          >
            AVATAR
          </label>
          <input
            value={avatar.name}
            id="avatar"
            className="w-full py-2 px-3 text-[14px] sm:text-lg"
            type="file"
            onChange={setAvatar}
          ></input>
        </div>
        <div
          className={`${
            loading ? "visible" : "invisible"
          } flex justify-center pb-3`}
        >
          <Spinner width={"w-[26px]"} height={"h-[26px]"} />
        </div>
        <div>
          <button
            className="w-10/12 py-3 font-bold bg-blue-600 text-white rounded-full text-[14px] sm:text-base"
            type="submit"
          >
            Đăng Ký
          </button>
        </div>
      </form>
      {error && (
        <Notification
          title="Đăng ký thất bại do trùng Email hoặc Mật khẩu"
          stateCreate="Error"
          onClick={() => {
            dispatch(setErrorDefault());
          }}
        />
      )}
    </>
  );
}

export default FormRegister;
