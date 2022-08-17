import React from "react";
import { Table, Container } from "reactstrap";
import AccountResultFormItem from "./AccountResultFormItem";

function AccountResultForm(props) {
  // Lấy các props từ bên trên truyền xuống
  let { onHandleDelete, onHandleEdit } = props;

  return (
    <Container>
      <br />
      <h3>Danh sách Account</h3>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Fullname</th>
            <th>Avatar Image</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Create Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <AccountResultFormItem onHandleDelete={onHandleDelete} onHandleEdit={onHandleEdit} />
        </tbody>
      </Table>
    </Container>
  );
}

export default AccountResultForm;
