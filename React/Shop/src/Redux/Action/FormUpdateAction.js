import * as Types from "../Contant/FormUpdateActionType";
// Chuyển đổi trạng thái đóng mở của Account
export const actionToggleFormRedux = () => {
  return {
    type: Types.TOGGLE_FORM_UPDATE,
  };
};

// Lưu thông tin của Account Update lên redux
export const actionFetchAccountUpdateInfoRedux = (accountUpdate) => {
  return {
    type: Types.FETCH_ACCOUNT_UPDATE_INFO,
    payload: accountUpdate,
  };
};

// Chuyển đổi trạng thái đóng mở của Account
export const actionToggleProductFormRedux = () => {
  return {
    type: Types.TOGGLE_FORM_UPDATE,
  };
};

// Lưu thông tin của Account Update lên redux
export const actionFetchProductUpdateInfoRedux = (productUpdate) => {
  return {
    type: Types.FETCH_PRODUCT_UPDATE_INFO,
    payload: productUpdate,
  };
};
