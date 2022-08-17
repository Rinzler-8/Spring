import { api } from "./api";
import queryString from "query-string";

const getProductAPIList = (filter) => {
  // console.log("filter getProductAPIList: ", filter);
  // page = 1, size = 10
  const parameters = {};

  if (filter && filter.page) {
    parameters.page = filter.page;
  }
  if (filter && filter.size) {
    parameters.size = filter.size;
  }

  // sort: { sortField: "id", sortDirection: "asc" },
  if (filter && filter.sort) {
    parameters.sort = filter.sort.sortField + "," + filter.sort.sortDirection;
  }
  // search = ""
  if (filter && filter.search) {
    parameters.search = filter.search;
  }

  console.log("parameters: ", parameters);
  // Sử dụng thư viện queryString để chuyển đổi đối tượng thành các param
  // https://www.npmjs.com/package/query-string
  let url = "products?" + queryString.stringify(parameters);
  // products?page=1&size=10
  console.log("Link url: ", url);

  return api("GET", url, null, null);
};

// Add Product New
const addProductNewAPI = (ProductNew) => {
  return api("POST", "products/", ProductNew);
};

// Xóa Product
const deleteProductAPI = (id) => {
  let url = "products/" + id;
  return api("DELETE", url, null, null);
};
// Update Product
const updateProductAPI = (id, productUpdate) => {
  let url = "products/" + id;
  return api("PUT", url, productUpdate);
};

// export

export { getProductAPIList, addProductNewAPI, deleteProductAPI, updateProductAPI };
