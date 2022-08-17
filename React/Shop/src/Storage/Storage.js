const setRememberMe = (isRememberMe) => {
  localStorage.setItem("isRememberMe", isRememberMe);
};

const isRememberMe = () => {
  if (localStorage.getItem("isRememberMe") === null || localStorage.getItem("isRememberMe") === undefined) {
    return false; //false: TH này không để RememberMe
  }

  // convert string to boolean
  return JSON.parse(localStorage.getItem("isRememberMe"));
};

const setItem = (key, value) => {
  if (isRememberMe()) {
    localStorage.setItem(key, value);
  } else {
    sessionStorage.setItem(key, value);
  }
};

const getItem = (key) => {
  if (isRememberMe()) {
    return localStorage.getItem(key);
  } else {
    return sessionStorage.getItem(key);
  }
};

// const setToken = (token) => {
//   setItem("token", token);
// };

// const getToken = () => {
//   return getItem("token");
// };

const setUserInfo = (accountLogin) => {
  setItem("id", accountLogin.id);
  setItem("username", accountLogin.username);
  setItem("password", accountLogin.password);
  setItem("fullname", accountLogin.fullname);
};

const getUserInfo = () => {
  return {
    id: getItem("id"),
    username: getItem("username"),
    password: getItem("password"),
    fullname: getItem("fullname"),
  };
};
// export
const storage = { isRememberMe, setRememberMe, setUserInfo, getUserInfo };
export default storage;
