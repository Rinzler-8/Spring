import React, { useEffect } from "react";
import { Row, Col, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from "reactstrap";
import Carousels from "./../Components/Home/Carousel";
import Footer from "./../Components/Home/Footer";
import "../css/style.css";
import { Card, CardContent, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

function HomePage() {
  let dispatchRedux = useDispatch();
  useEffect(() => {
    // dispatchRedux(actionFetchProductAPI());
  }, []);
  return (
    <>
      {/* Carousels */}
      {<Carousels />}

      {
        <Row>
          <Col
            className="h4"
            md={{
              offset: 3,
              size: 6,
            }}
            sm="12"
          >
            <h4>SHOP AWARD-WINNING FAVORITES</h4>
          </Col>
        </Row>
      }

      {
        <Row>
          <Col className="bg" sm="4" xs="6">
            <Card className="card" color="light">
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="bg" sm="4" xs="6">
            <Card className="card">
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="bg" sm="4">
            <Card className="card">
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardContent>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                <Button>Button</Button>
              </CardContent>
            </Card>
          </Col>
        </Row>
      }

      <br></br>
      {
        <Row>
          <Col className="h4" sm="12">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/900/270?grayscale"
                style={{
                  height: 200,
                }}
                width="100%"
              ></CardImg>
            </Card>
          </Col>
        </Row>
      }
      <br></br>
      <br></br>
      <Grid container justify="center" spacing={6} className="grid-container"></Grid>

      <br></br>
      {/* Footer */}
      {<Footer />}
    </>
  );
}

export default HomePage;
