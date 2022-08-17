import { api } from "./api";

const getManufacturerAPIList = () => {
  return api("GET", "manufacturers", null, null);
};

// export

export { getManufacturerAPIList };
