import { api } from "./api";

const getPositionAPIList = () => {
  return api("GET", "positions", null, null);
};

// export

export { getPositionAPIList };
