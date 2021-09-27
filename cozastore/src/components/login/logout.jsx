import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../../actions/user";
import { useCookies } from "react-cookie";

const LogOut = ({ history }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("persist:root");
    dispatch(clearUser());
    removeCookie("user", { path: "/" });
    removeCookie("token", { path: "/" });
    history.push("/");
  }, []);
  return null;
};

export default LogOut;
