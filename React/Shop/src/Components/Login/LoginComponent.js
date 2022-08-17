import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Formik, Field, Form } from "formik";
import CustomInput from "./CustomInput";
import * as Yup from "yup";

function LoginComponent(props) {
  let { handleLogin } = props;
  return (
    <div>
      <Formik
        initialValues={{
          Username: "",
          Password: "",
        }}
        validationSchema={Yup.object({
          Username: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .required("Không được để trống username"),
          Password: Yup.string()
            .min(6, "Must be between 6 and 50 characters")
            .max(50, "Must be between 6 and 50 characters")
            .required("Không được để trống password"),
        })}
        onSubmit={(values) => {
          let accountLogin = {
            Username: values.Username,
            Password: values.Password,
          };
          handleLogin(accountLogin);
        }}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ validateField, validateForm }) => (
          <Container>
            <Row style={{ marginTop: 90 }}>
              <Col
                sm={{
                  offset: 4,
                  size: 3,
                }}
              >
                <Form>
                  {/* Login */}
                  <br />
                  <br />
                  <h3>Login Form</h3>
                  {/* Username */}
                  <br />
                  <Field
                    name="Username"
                    type="text"
                    placeholder="Enter Username"
                    //validate = {validateFirstName}
                    label="Username:"
                    component={CustomInput}
                  />
                  {/* Password */}
                  <br />
                  <Field
                    name="Password"
                    type="password"
                    placeholder="Enter Password"
                    //validate = {validateLastName}
                    label="Password:"
                    component={CustomInput}
                  />

                  <br />
                  {/* Submit */}
                  <Row>
                    <Col>
                      <Button color="primary" type="submit">
                        Login
                      </Button>
                    </Col>
                    <Col>
                      <Button color="primary" type="reset">
                        Reset
                      </Button>
                    </Col>
                    <Col>
                      <Button color="primary" type="button">
                        Register
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

export default LoginComponent;
