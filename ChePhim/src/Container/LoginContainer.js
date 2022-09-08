import React, { useEffect } from "react";
import LoginComponent from "./../Components/Login/LoginComponent";
import { checkLoginAPI } from "../API/LoginAPI";
import storage from "../Storage/Storage";
import { useNavigate } from "react-router-dom";

// import { useCookies } from 'react-cookie';
// const [cookies, setCookie] = useCookies(['name']);

function LoginContainer(props) {
  let navigate = useNavigate();

  let handleLogin = (accountLogin) => {
    // console.log("Value: ", accountLogin);
    // Call API
    checkLoginAPI(accountLogin)
      .then((response) => {
        if (response !== null && response !== undefined) {
          alert("Login thành công!");
          console.log("response: ", response);
          let accountLoginSaveToStorage = {
            id: response.id,
            username: accountLogin.username,
            email: response.email,
            role: response.roles,
            status: response.status,
          };
          // Lưu thông tin Account vào LocalStorage để sử dụng về sau
          storage.setUserInfo(accountLoginSaveToStorage);
          storage.setToken(accountLoginSaveToStorage);
          console.log(localStorage.getItem("role"));
          navigate("/admin");
          // Chuyển đến trang admin page
          // navigate("/admin");
        } else {
          alert("Thông tin đăng nhập sai. Vui lòng thử lại!");
        }
      })
      .catch((err) => {
        alert("Đã có lỗi xảy ra!!");
      });
  };

  // useEffect(() => {
  //   let accountLoginSaveToStorage = storage.getUserInfo();
  //   if (accountLoginSaveToStorage) {
  //     // TH này khi User đã login sẽ chuyển tới trang home
  //     return navigate("/admin");
  //   }
  // }, []);
  return (
    <div>
      <LoginComponent handleLogin={handleLogin} />
    </div>
  );
}

export default LoginContainer;
