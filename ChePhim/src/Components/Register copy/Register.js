import React, { useState } from "react";
import { Button, Container, Row, Col, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Formik, Field, Form } from "formik";
import CustomInput from "./CustomInput";
import * as Yup from "yup";
import "./../../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { getUsernameExists, getEmailExists } from "../../API/AccountAPI";
import { addAccountNewAPI } from "../../API/RegisterAPI";

function RegisterComponent(props) {
  const [isShown, setIsShown] = useState(false);
  // Quản lý trạng thái ẩn hiện Moadal
  let [showModal, SetShowModal] = useState(false);

  // Xử lý ẩn hiện modal
  let toggle = () => {
    SetShowModal(!showModal);
  };

  let navigate = useNavigate();

  const togglePassword = () => {
    setIsShown((isShown) => !isShown);
  };

  return (
    <div className="row">
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
              email: "",
              password: "",
              ConfirmPassword: "",
            }}
            validationSchema={Yup.object({
              username: Yup.string()
                .min(6, "Must be between 6 and 50 characters")
                .max(50, "Must be between 6 and 50 characters")
                .required("Không được để trống username")
                .test("checkUniqueUsername", "Tên người dùng đã được đăng ký.", async (username) => {
                  // call api
                  const isExists = await getUsernameExists(username);
                  return !isExists;
                }),

              email: Yup.string()
                .min(6, "Must be between 6 and 50 characters")
                .max(50, "Must be between 6 and 50 characters")
                .required("Không được để trống email")
                .test("checkUniqueEmail", "Email đã được đăng ký.", async (email) => {
                  // call api
                  const isExists = await getEmailExists(email);
                  return !isExists;
                }),

              password: Yup.string()
                .min(6, "Must be between 6 and 50 characters")
                .max(50, "Must be between 6 and 50 characters")
                .required("Không được để trống password"),
              ConfirmPassword: Yup.string()
                .required("Không được để trống password")
                .when("password", {
                  is: (val) => (val && val.length > 0 ? true : false),
                  then: Yup.string().oneOf([Yup.ref("password")], "Mật khẩu không khớp."),
                }),
            })}
            onSubmit={(values) => {
              try {
                const accountRegister = {
                  username: values.username,
                  email: values.email,
                  password: values.password,
                  role: values.role,
                };
                addAccountNewAPI(accountRegister);
                SetShowModal(true);
                // navigate("/login");
              } catch (error) {
                // alert("Hãy kiểm tra lại thông tin!");
                // navigate("/login");
              }
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
                    style={{ marginTop: 60 }}
                  >
                    <Form>
                      {/* Register */}
                      <br />
                      <br />
                      <h3>THAM GIA CHÊ PHIM NGAY</h3>
                      <hr style={{ color: "red", height: "5px" }}></hr>
                      <h3>Đăng ký</h3>
                      <hr style={{ color: "red", height: "6px", width: "100px" }}></hr>
                      {/* username */}
                      <br />
                      <Field className="input" name="username" type="text" placeholder="Nhập Tên Đăng Ký" label="Tên đăng ký:" component={CustomInput} />
                      <Field className="input" name="email" type="email" placeholder="Nhập email" label="email:" component={CustomInput} />
                      {/* password */}
                      <Field
                        className="input"
                        name="password"
                        type={isShown ? "text" : "password"}
                        placeholder="Nhập Mật khẩu"
                        label="Mật khẩu:"
                        component={CustomInput}
                      />
                      <Field
                        className="input"
                        name="ConfirmPassword"
                        type={isShown ? "text" : "password"}
                        placeholder="Nhập lại Mật Khẩu"
                        label="Nhập lại Mật Khẩu:"
                        component={CustomInput}
                      />

                      {/* Checkbox */}

                      <div className="checkbox-container">
                        <input id="checkbox" type="checkbox" checked={isShown} onChange={togglePassword} />
                        <label htmlFor="checkbox">Hiện Mật Khẩu</label>
                      </div>

                      {/* Submit */}
                      <Row className="button">
                        <Button color="danger" type="submit">
                          Đăng ký
                        </Button>
                        <Link to={"/login"} style={{ color: "red", paddingTop: "50px" }}>
                          Quay lại
                        </Link>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Container>
            )}
          </Formik>

          <Modal isOpen={showModal} toggle={toggle}>
            {/* header */}
            <ModalHeader>Đăng ký thành công</ModalHeader>

            {/* body */}
            <ModalBody className="m-3">
              <p>Tài khoản của bạn đã đăng ký thành công.</p>
            </ModalBody>

            {/* footer */}
            <ModalFooter>
              <Button color="danger" href={"/login"}>
                Sang trang đăng nhập
              </Button>

              <Button color="danger" onClick={toggle}>
                Đóng
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
