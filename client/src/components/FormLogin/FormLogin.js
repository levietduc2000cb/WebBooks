import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser, setErrorDefault } from "../../redux/Slices/AuthSlice";
import InputAuth from "../UI/Input/InputAuth";
import Spinner from "../UI/Spinner/Spinner";
import Notification from "../Notification/Notification";
import pathRoutes from "../../config/pathRoutes";

function FormLogin(props) {
  const navigate = useNavigate();
  const { loading, currentUser, error } = useSelector(
    (state) => state.AuthReducer
  );
  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (currentUser) {
      navigate(pathRoutes.home);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  function ChangeInput(e, keyInput) {
    setInputForm({ ...inputForm, [keyInput]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(inputForm));
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputAuth
          onChangeInput={ChangeInput}
          inputText={inputForm.username}
          idText={"email"}
          titleLaBel={"EMAIL"}
          type={"text"}
          placeholder={"Nhập Email"}
        ></InputAuth>
        <InputAuth
          onChangeInput={ChangeInput}
          inputText={inputForm.password}
          idText={"password"}
          titleLaBel={"PASSWORD"}
          type={"password"}
          placeholder={"Nhập Password"}
        ></InputAuth>
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
            Đăng Nhập
          </button>
        </div>
      </form>
      {error && (
        <Notification
          title="Đăng nhập thất bại"
          stateCreate="Error"
          onClick={() => {
            dispatch(setErrorDefault());
          }}
        />
      )}
    </>
  );
}
export default FormLogin;
