import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { Input } from "antd";
import React from "react";
import "./Register.scss";

export default function Register(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      // taiKhoan: "",
      // matKhau: "",
      // email: "",
      // soDt: "",
      // maNhom: "",
      // hoTen: "",
      // accessToken: TOKEN_CYBERSOFT,
      // maLoaiNguoiDung: "KhachHang",
    },
    onSubmit: (values) => {
      // console.log(values);
      // dispatch(dangKyTaiKhoanAction(values));
    },
  });

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
              <div className="form-group">
                <div>
                  {" "}
                  <label htmlFor="email">Email</label>
                </div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="mt-4 form-group">
                <div>
                  {" "}
                  <label htmlFor="taiKhoan">Account</label>
                </div>
                <Input
                  type="text"
                  placeholder=""
                  name="taiKhoan"
                  id="taiKhoan"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="mt-4 form-group">
                <div>
                  {" "}
                  <label htmlFor="matKhau">Password</label>
                </div>
                <Input.Password
                  type="password"
                  placeholder="Password"
                  name="matKhau"
                  id="matKhau"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="mt-4 form-group">
                <div>
                  {" "}
                  <label htmlFor="hoTen">Name</label>
                </div>
                <Input
                  type="text"
                  placeholder=""
                  name="hoTen"
                  id="hoTen"
                  onChange={formik.handleChange}
                />
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
              <p className="mr-3">Have an account ?</p>
              <NavLink
                className="font-weight-bold"
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
