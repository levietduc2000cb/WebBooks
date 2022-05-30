import LayoutAuth from "../../components/LayoutAuth/LayoutAuth";
import FormLogin from "../../components/FormLogin/FormLogin";
import pathRouters from "../../config/pathRoutes";
function Login(props) {
  return (
    <LayoutAuth
      content={"Bạn chưa có tài khoản?"}
      textButton={"Đăng Ký"}
      to={pathRouters.register}
      textButtonForm={"Đăng Nhập"}
    >
      <FormLogin></FormLogin>
    </LayoutAuth>
  );
}
export default Login;
