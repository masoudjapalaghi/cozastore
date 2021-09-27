import React, { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { addUser } from "../actions/user";
import {
  informatinUser,
  loginUser,
  registerUser,
} from "../services/usersService";
import { userContext } from "./userContext";

const UserGlobalestate = ({ children, history }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [policy, setPolicy] = useState("");
  const [gender, setGender] = useState("");
  const [token, setToken] = useState();
  const [, forceUpdate] = useState();
  const dispatch = useDispatch();
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی میباشد؟!؟",
        min: " کاراکتر کمی را وارد کردید؟!؟",
        email: "ایمیل وارد شده صحیح نمی باشد؟!؟",
        alpha_num: "رمز عبور باید مجوعه ای از حروف انگلیسی و اعداد باشد؟!؟",
      },
    })
  );
  const restState = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setPolicy("");
  };

  useEffect(() => {
    
    
  }, [addUser])
  const handleRegister = async (event) => {
    event.preventDefault();
    const user = {
      username,
      email,
      password,
      gender,
      phone,
    };
    try {
      if (validator.current.allValid()) {
        dispatch(showLoading());
        const { status } = await registerUser(user);
        if (status === 200) {
          toast.success("کاربر با موفقیت ساخته شد.");
          history.replace("/login");
          dispatch(hideLoading());
          restState();
        }
      } else {
        dispatch(hideLoading());
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      toast.error("نام کاربری قبل استفاده شده است؟!؟",{
        position:"bottom-right"
      });
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      identifier: email,
      password,
    };
    try {
      const { status, data } = await loginUser(user);
      if (validator.current.allValid()) {
        dispatch(showLoading());
        if (status === 200) {
          dispatch(hideLoading());
          toast.success(`${data.user.username} خوش اومدی`);
          setCookie('token',data.jwt,{path:"/"})
          restState();
          history.replace("/");
          await informatinUser(data.jwt)
            .then((response) => {
              console.log(response)
              setCookie('user', response.data, { path: '/' });
              dispatch(addUser(response.data));
            })
            .catch((error) => {
              console.log("An error occurred:", error.response);
            });
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      toast.error("ایمیل یا نام کاربری معتبر نمی باشد؟!؟",{
        position:"bottom-right"
      });
      dispatch(hideLoading());
    }
  };

  return (
    <userContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        phone,
        setPhone,
        policy,
        setPolicy,
        gender,
        setGender,
        token,
        setToken,
        validator,
        forceUpdate,
        handleLogin,
        handleRegister,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default withRouter(UserGlobalestate);
