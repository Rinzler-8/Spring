import React from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";

function AccountResultFormItem(props) {
  // Lấy các props từ bên trên truyền xuống
  let { onHandleEdit, onHandleDelete } = props;
  let stateRedux = useSelector((state) => state);
  let listAccount = stateRedux.ListAccountReducer;

  // Hàm xử lý khi click vào nút Edit
  let handleEditButton = (account) => {
    // dispatchRedux(actionShowUpdateForm());
    onHandleEdit(account);
  };

  // Khai báo item hiển thị dữ liệu
  let rowItem = "";
  // Kiểm tra nếu listAccount !="" sẽ hiển thị dữ liệu
  if (listAccount) {
    rowItem = listAccount.map((account, index) => {
      return (
        <tr key={index}>
          <td>{account.id}</td>
          <td>{account.username}</td>
          <td>{account.email}</td>
          <td>
            {account.role.map((role, index2) => {
              return (
                <tr key={index2}>
                  <td>{role.name}</td>
                </tr>
              );
            })}
          </td>
          <td>{account.status}</td>
          <td>{account.bandays}</td>
          <td>
            <Button color="warning" onClick={() => handleEditButton(account)}>
              Deactivate
            </Button>
          </td>
        </tr>
      );
    });
  }
  return rowItem;
}

export default AccountResultFormItem;
