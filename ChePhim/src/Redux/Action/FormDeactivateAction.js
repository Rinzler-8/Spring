import * as Types from "../Contant/FormDeactivateActionType";
// Chuyển đổi trạng thái đóng mở của Account
export const actionToggleFormRedux = () => {
  return {
    type: Types.TOGGLE_FORM_DEACTIVATE,
  };
};

// Lưu thông tin của Account Update lên redux
export const actionFetchAccountDeactivateInfoRedux = (accountDeactivate) => {
  return {
    type: Types.FETCH_ACCOUNT_DEACTIVATE_INFO,
    payload: accountDeactivate,
  };
};
