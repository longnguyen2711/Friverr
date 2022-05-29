import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { DatePicker, Input, Select } from "antd";
import React from "react";
import "./Register.scss";
import moment from "moment";
import { dangKyTaiKhoanAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { Option } from "antd/lib/mentions";
import * as yup from "yup";

export default function Register(props) {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Must be a valid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(16, "Password must not exceed 16 characters"),
    phone: yup
      .string()
      .required("Phone is required")
      .min(10, "Phone must be at least 10 characters")
      .max(12, "Phone must not exceed 12 characters"),
    birthday: yup.string().required("Birthday is required"),
    gender: yup.string().required("Gender is required"),
  });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: "", // Giới tính true là nam, false là nữ theo backend
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      dispatch(dangKyTaiKhoanAction(values));
    },
  });

  //  Set lại định dạng ngày tháng
  const handleChangeDatePicker = (value) => {
    let birthday = moment(value);
    formik.setFieldValue("birthday", birthday);
  };

  const onGenderChange = (value) => {
    formik.setFieldValue("gender", value);
  };

  return (
    <div
      id="Register"
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
          <h2 className="text-white my-5">Register</h2>
          <div>
            <div>
              <div className=" mb-0form-group">
                {" "}
                <label htmlFor="name">Name</label>
                <Input
                  type="text"
                  placeholder="Please enter your name"
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                />
                <div className="text-danger mt-1">
                  {formik.errors.name ? (
                    formik.errors.name
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="mt-3 mb-0 form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  placeholder="Please enter your email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                />
                <div className="text-danger mt-1">
                  {" "}
                  {formik.errors.email ? (
                    formik.errors.email
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="mt-3 mb-0 form-group">
                <label htmlFor="password">Password</label>
                <Input.Password
                  type="password"
                  placeholder="Please enter your password"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                />
                <div className="text-danger mt-1">
                  {" "}
                  {formik.errors.password ? (
                    formik.errors.password
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="mt-3 mb-0 form-group">
                <label htmlFor="phone">Phone</label>
                <Input
                  type="text"
                  placeholder="Please enter your phone number"
                  name="phone"
                  id="phone"
                  onChange={formik.handleChange}
                />
                <div className="text-danger mt-1">
                  {" "}
                  {formik.errors.phone ? (
                    formik.errors.phone
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="mt-3 mb-0 form-group">
                <div>
                  {" "}
                  <label>Birthday</label>
                </div>
                <DatePicker onChange={handleChangeDatePicker} />
                <div className="text-danger mt-1">
                  {" "}
                  {formik.errors.birthday ? (
                    formik.errors.birthday
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="mt-3 mb-0 form-group">
                <div>
                  <label>Gender</label>
                </div>
                <Select
                  placeholder="Select gender"
                  onChange={onGenderChange}
                  allowClear
                >
                  <Option value="true">Male</Option>
                  <Option value="false">Female</Option>
                </Select>
                <div className="text-danger mt-1">
                  {" "}
                  {formik.errors.gender ? (
                    formik.errors.gender
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="my-5 text-center">
                <button
                  className="btn btn-primary w-100 font-weight-bold"
                  title="Click to register an account"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <p className="mr-3 h6">Have an account ?</p>
              <NavLink
                className="font-weight-bold h6"
                to="/login"
                title="Click to login an account"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
