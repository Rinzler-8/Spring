import { api } from "./api";

const getCategoryAPIList = () => {
  return api("GET", "categories", null, null);
};

// export

export { getCategoryAPIList };
