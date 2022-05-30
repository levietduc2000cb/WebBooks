import LayoutAuth from "../../components/LayoutAuth/LayoutAuth";
import FormRegister from "../../components/FormRegister/FormRegister";
import pathRouters from "../../config/pathRoutes";
function Register(props) {
  return (
    <LayoutAuth
      content={"Bạn đã có tài khoản!"}
      textButton={"Đăng Nhập"}
      to={pathRouters.login}
      textButtonForm={"Đăng Ký"}
    >
      <FormRegister></FormRegister>
    </LayoutAuth>
  );
}
export default Register;
