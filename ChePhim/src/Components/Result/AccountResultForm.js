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
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Ban Days</th>
            <th>Deactivate</th>
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
