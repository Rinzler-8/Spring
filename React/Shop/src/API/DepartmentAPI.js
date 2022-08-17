import { api } from "./api";

const getDepartmentAPIList = () => {
  return api("GET", "departments", null, null);
};

// export

export { getDepartmentAPIList };
