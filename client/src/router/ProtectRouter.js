import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import pathRouters from "../config/pathRoutes";

function ProtectRouter({ children }) {
  const { currentUser } = useSelector((state) => state.AuthReducer);
  if (!currentUser) {
    return <Navigate to={pathRouters.login} replace />;
  }
  return children;
}
export default ProtectRouter;
