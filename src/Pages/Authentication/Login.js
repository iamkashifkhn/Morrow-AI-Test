import PropTypes from "prop-types";
import React from "react";
import MarrowAILight from "../../assets/images/marrow-ai.svg";
import "./login.css";
import { Row, Col, CardBody, Card, Alert, Form, Input, FormFeedback, Label } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";
import * as Yup from "yup";
import { useFormik } from "formik";
import { loginUser } from "../../store/actions";

const Login = (props) => {
  document.title = "Login | Marrow AI";

  const dispatch = useDispatch();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "admin@morrowai.com" || "",
      password: "123456" || "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values, props.router.navigate));
    },
  });



  const { error } = useSelector((state) => ({
    error: state.login.error,
  }));

  return (
    <div className="login-page">
      <div className="left-login">
        <img src={MarrowAILight} alt="morrow-ai" width={"400px"}/>
      </div>
      <div className="right-login">
        <Card className="login-card">
          <CardBody className="p-4">
            <div>
              <div className="text-center" >
                <Link to="/" style={{color:"#394B9F"}}>
                  {/* <img
                    src={MarrowAILight}
                    alt=""
                    height="70"
                    className="auth-logo logo-dark mx-auto"
                  />
                  <img
                    src={MarrowAILight}
                    alt=""
                    height="70"
                    className="auth-logo logo-light mx-auto"
                  /> */}
                  <i className="mdi mdi-48px   mdi-account-multiple"></i>
                </Link>
              </div>
              <h4 className="font-size-18 text-muted mt-2 text-center">
                Welcome Back !
              </h4>
              <Form
                className="form-horizontal"
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                {error ? (
                  <Alert color="danger">
                    <div>{error}</div>
                  </Alert>
                ) : null}
                <Row>
                  <Col md={12}>
                    <div className="mb-4">
                      <Label className="form-label">Email</Label>
                      <Input
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email || ""}
                        invalid={
                          validation.touched.email && validation.errors.email
                        }
                      />
                      {validation.touched.email && validation.errors.email && (
                        <FormFeedback type="invalid">
                          <div>{validation.errors.email}</div>
                        </FormFeedback>
                      )}
                    </div>
                    <div className="mb-4">
                      <Label className="form-label">Password</Label>
                      <Input
                        name="password"
                        value={validation.values.password || ""}
                        type="password"
                        placeholder="Enter Password"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        invalid={
                          validation.touched.password &&
                          validation.errors.password
                        }
                      />
                      {validation.touched.password && validation.errors.password && (
                        <FormFeedback type="invalid">
                          <div>{validation.errors.password}</div>
                        </FormFeedback>
                      )}
                    </div>

                    <Row>
                      <Col>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customControlInline"
                          />
                          <label
                            className="form-label form-check-label"
                            htmlFor="customControlInline"
                          >
                            Remember me
                          </label>
                        </div>
                      </Col>
                      <Col className="col-7">
                        <div className="text-md-end mt-3 mt-md-0">
                          <Link to="/auth-recoverpw" className="text-muted">
                            <i className="mdi mdi-lock"></i> Forgot your
                            password?
                          </Link>
                        </div>
                      </Col>
                    </Row>
                    <div className="d-grid mt-4">
                      <button
                      style={{backgroundColor:"#394B9F", color:'white'}}
                        className="btn waves-effect waves-light"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                    <div className="mt-4 text-center"></div>
                  </Col>
                </Row>
              </Form>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
