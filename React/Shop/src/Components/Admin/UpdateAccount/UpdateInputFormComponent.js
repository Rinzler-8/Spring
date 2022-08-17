import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import InputComponent from "./InputComponent";
import "./style.css";
import { useSelector } from "react-redux";

function UpdateInputFormComponent(props) {
  let { onHandleUpdateAccount } = props;

  // Lấy thông tin AccountUpdateInfo từ Redux để fill dữ liệu
  let accountUpdateInfo = useSelector((state) => state.formUpdateReducer.accountUpdateInfo);

  return (
    <div>
      {/* Formik */}
      <Formik
        initialValues={{
          //accountUpdateInfo.Entity=>Account(backend)
          Fullname: accountUpdateInfo.fullname,
          Avatar: accountUpdateInfo.avatarImageName,
          Mobile: accountUpdateInfo.mobile,
          Address: accountUpdateInfo.address,
        }}
        validationSchema={Yup.object({
          Fullname: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .required("Không được để trống fullname"),
          Avatar: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .required("Không được để trống avatar"),
          Mobile: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .required("Không được để trống mobile"),
          Address: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .required("Không được để trống address"),
        })}
        onSubmit={(values) => {
          let accountUpdateNew = {
            //FormForUpdating(backend): values...
            fullname: values.Fullname,
            avatarImageName: values.Avatar,
            mobile: values.Mobile,
            address: values.Address,
          };
          console.log("Thông tin Account Sau khi chỉnh sửa: ", accountUpdateNew);
          onHandleUpdateAccount(accountUpdateNew);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ validateField, validateForm }) => (
          <Container>
            <Row>
              <Col
                sm={{
                  offset: 2,
                  size: 8,
                }}
              >
                {/* Form thêm mới */}
                <Form>
                  {/* Fullname */}
                  <Field name="Fullname" type="text" placeholder="Enter Fullname" label="Fullname:" component={InputComponent} />
                  {/* Avatar */}
                  <Field name="Avatar" type="text" placeholder="Enter Avatar" label="Avatar:" component={InputComponent} />
                  {/* Mobile */}
                  <Field name="Mobile" type="text" placeholder="Enter Mobile" label="Mobile:" component={InputComponent} />
                  {/* Address */}
                  <Field name="Address" type="text" placeholder="Enter Address" label="Address:" component={InputComponent} />
                  <br />
                  <br />
                  {/* submit */}
                  <Row>
                    <Col>
                      <Button color="success" type="submit">
                        Save
                      </Button>
                    </Col>
                    <Col>
                      <Button color="primary" type="reset">
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        )}
      </Formik>
    </div>
  );
}

export default UpdateInputFormComponent;
