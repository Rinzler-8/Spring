import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardContent, Grid } from "@mui/material";
import { Container } from "reactstrap";

function Product(props) {
  let stateRedux = useSelector((state) => state);
  let listProduct = stateRedux.ListProductReducer;
  let renderList = listProduct.map((product) => {
    return (
      <Col sm="4" style={{ padding: 30 }} key={product.id}>
        <Link to={`/product/${product.id}`}>
          <Card>
            <img alt="Sample" src="https://picsum.photos/300/300" style={{ paddingTop: 30 }} />
            <CardContent>
              <CardTitle tag="h5">{product.name}</CardTitle>
              <CardText>{product.price}</CardText>
              <CardText>{product.info}</CardText>
              <CardText>{product.detail}</CardText>
            </CardContent>
          </Card>
        </Link>
      </Col>
    );
  });
  return <>{renderList}</>;
}

export default Product;
