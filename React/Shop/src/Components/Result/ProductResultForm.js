import React from "react";
import { Table, Container } from "reactstrap";
import ProductResultFormItem from "./ProductResultFormItem";

function ProductResultForm(props) {
  let { onHandleDelete, onHandleEdit } = props;
  return (
    <Container>
      <br />
      <h3>Danh sách Product</h3>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Product Info</th>
            <th>Product Detail</th>
            <th>Rating Star</th>
            <th>Product Image</th>
            <th>Manufacturer</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ProductResultFormItem onHandleDelete={onHandleDelete} onHandleEdit={onHandleEdit} />
        </tbody>
      </Table>
    </Container>
  );
}

export default ProductResultForm;
