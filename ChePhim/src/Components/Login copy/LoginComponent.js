import React, { useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Formik, Field, Form } from "formik";
import CustomInput from "./CustomInput";
import * as Yup from "yup";
import "./../../css/Login.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import storage from "./../../Storage/Storage";

function LoginComponent(props) {
  const [isShown, setIsShown] = useState(false);

  const togglePassword = () => {
    setIsShown((isShown) => !isShown);
  };
  let { handleLogin } = props;
  return (
    <div className="row ">
      <div className="col ">
        <div className="left">
          <img alt="Sample" src={require("../../Assets/Banner/background.jpg")} />
        </div>
      </div>
      <div className="col ">
        <div className="right">
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={Yup.object({
              username: Yup.string()
                .min(6, "Must be between 6 and 50 characters")
                .max(50, "Must be between 6 and 50 characters")
                .required("Không được để trống username"),
              password: Yup.string()
                .min(6, "Must be between 6 and 50 characters")
                .max(50, "Must be between 6 and 50 characters")
                .required("Không được để trống password"),
            })}
            onSubmit={(values) => {
              let accountLogin = {
                username: values.username,
                password: values.password,
              };
              handleLogin(accountLogin);
            }}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ validateField, validateForm }) => (
              <Container>
                <Row>
                  <Col
                    sm={{
                      offset: 1,
                      size: 7,
                    }}
                    style={{ marginTop: 70 }}
                  >
                    <Form>
                      {/* Login */}
                      <br />
                      <br />
                      <h3>THAM GIA CHÊ PHIM NGAY</h3>
                      <hr style={{ color: "red", height: "5px" }}></hr>
                      <h3>Đăng nhập</h3>
                      <hr style={{ color: "red", height: "6px", width: "140px" }}></hr>
                      {/* username */}
                      <br />
                      <Field className="input" name="username" type="text" placeholder="Nhập Tên Đăng Nhập" label="Tên đăng nhập:" component={CustomInput} />
                      {/* password */}

                      <Field
                        className="input"
                        name="password"
                        type={isShown ? "text" : "password"}
                        placeholder="Nhập Mật khẩu"
                        label="Mật khẩu:"
                        component={CustomInput}
                      />
                      <label className="checkbox">
                        <Field type="checkbox" style={{ backgroundColor: "red" }} name="toggle" checked={isShown} onChange={togglePassword} />
                        {`Hiện Mật Khẩu`}
                      </label>

                      {/* Submit */}
                      <Row className="button">
                        <Button color="danger" type="submit">
                          Đăng nhập
                        </Button>

                        <Row className="loginThirdParties">
                          <Col className="">Đăng nhập bằng:</Col>
                          <Col className="socialIcons">
                            <IconButton href="">
                              <FacebookIcon />
                            </IconButton>
                            <IconButton href="">
                              <GoogleIcon />
                            </IconButton>
                            <IconButton href="">
                              <AppleIcon />
                            </IconButton>
                          </Col>
                        </Row>

                        <Button color="danger" type="button" href={"/register"}>
                          Đăng ký
                        </Button>
                        <br />
                        <Link to={"/forgot"} style={{ color: "red", marginTop: "50px" }}>
                          Quên mật khẩu
                        </Link>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Container>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
