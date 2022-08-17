import { addProductNewAPI, deleteProductAPI, getProductAPIList, updateProductAPI } from "../../API/ProductAPI";
import * as Types from "../Contant/ProductActionType";
import * as Types_Page from "../Contant/PageActionType";
import { actionToggleFormRedux } from "./FormUpdateAction";
import { actionChangePage, actionChangeSortDirection, actionChangeSortField } from "./PageAction";
// Viết các Action liên quan đến Call API
export const actionFetchProductAPI = (filter) => {
  return (dispatch) => {
    return getProductAPIList(filter).then((response) => {
      console.log("reponseAPI:", response);
      dispatch(actionFetchProductRedux(response.content));
      dispatch(actionSetTotalPageProductRedux(response.totalPages));
    });
  };
};

// Dispath action này tới redux để lưu list Product vào redux
export const actionFetchProductRedux = (products) => {
  return {
    type: Types.FETCH_PRODUCT_LIST,
    payload: products,
  };
};

// Dispath action này tới redux để lấy tổng số trang Product
export const actionSetTotalPageProductRedux = (totalPage) => {
  return {
    type: Types_Page.SET_TOTAL_PAGE,
    payload: totalPage,
  };
};

// Acction thêm mới Product
export const actionAddProductAPI = (ProductNew) => {
  return (dispatch) => {
    return addProductNewAPI(ProductNew).then((response) => {
      console.log("reponseAPI After add New Product:", response);
      alert("Tao tai khoan thanh cong");
      dispatch(actionFetchProductAPI());
      dispatch(actionChangePage(0)); // Chuyển về trang 1 sau khi thêm mới thành công
      dispatch(actionChangeSortField("id")); // Thay đổi trường sort về id
      dispatch(actionChangeSortDirection("DESC")); // Sort theo chiều giảm dần
    });
  };
};

// Acction xóa Product
export const actionDeleteProductAPI = (id) => {
  // console.log("deleteProductById: ", id);
  return (dispatch) => {
    return deleteProductAPI(id).then((response) => {
      console.log("response sau khi xóa Product: ", response);
      alert("Xoa tai khoan thanh cong");
      dispatch(actionFetchProductAPI());
      dispatch(actionChangePage(0)); // Chuyển về trang 1 sau khi thêm mới thành công
      dispatch(actionChangeSortField("id")); // Thay đổi trường sort về id
      dispatch(actionChangeSortDirection("DESC")); // Sort theo chiều giảm dần
    });
  };
};

// Acction Update Product
export const actionUpdateProductAPI = (id, productUpdate) => {
  // console.log("productUpdate: ", productUpdate);
  // console.log("id: ", id);
  return (dispatch) => {
    return updateProductAPI(id, productUpdate).then((response) => {
      console.log("response sau khi Update Product: ", response);
      dispatch(actionFetchProductAPI()); // Load lại dữ liệu API
      dispatch(actionToggleFormRedux()); // Đóng FormUpdate
    });
  };
};
