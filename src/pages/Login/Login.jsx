import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { ErrorMessage, useFormik } from "formik";
import { Input } from "antd";
import "./Login.scss";
import * as yup from "yup";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function Login(props) {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Account is required")
      .min(6, "Account must be at least 6 characters")
      .max(16, "Account must not exceed 16 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(16, "Password must not exceed 16 characters"),
  });
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);
    },
  });

  return (
    <div
      id="Login"
      className="d-flex justify-content-center align-items-center py-5 text-white col-12 col-md-6"
    >
      <form className="w-75 form" onSubmit={formik.handleSubmit}>
        <div>
          <div className="text-center">
            <NavLink to="/" title="Back to homepage">
              <img
                src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                alt="cyberlearn.vn"
              />
            </NavLink>
          </div>
        </div>
        <div>
          <h2 className="text-white my-5">Login</h2>
          <div>
            <div>
              <div className="form-group">
                <div>
                  {" "}
                  <label htmlFor="email">Account</label>
                </div>
                <Input
                  type="text"
                  placeholder="Please enter your account"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.taiKhoan}
                />
                <div className="text-danger mt-2">
                  {formik.errors.email ? (
                    formik.errors.email
                  ) : (
                    <div style={{ visibility: "hidden" }}>1</div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between mt-3">
                  <label htmlFor="password">Password</label>
                  <div>
                    <a href="#" title="Click to retrieve password">
                      Forgot password ?
                    </a>
                  </div>
                </div>
                <Input.Password
                  type="password"
                  placeholder="Please enter your password"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.matKhau}
                />
                <div className="text-danger mt-2">
                  {formik.errors.password ? (
                    formik.errors.password
                  ) : (
                    <div style={{ visibility: "hidden" }}>1</div>
                  )}
                </div>
              </div>
              <div className="mb-5 mt-4 text-center">
                <button
                  className="btn btn-primary w-100 font-weight-bold"
                  title="Click to login"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
            <div className="text-center d-sm-flex justify-content-center">
              <p className="mr-sm-3">Do not have an account ?</p>
              <NavLink
                className="font-weight-bold"
                to="/register"
                title="Click to register an account"
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
