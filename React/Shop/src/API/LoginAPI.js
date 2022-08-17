import { api } from "./api";

const checkLoginAPI = (accountLogin) => {
  return api("GET", "login/", null, accountLogin);
};

export { checkLoginAPI };
