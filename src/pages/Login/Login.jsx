import React from 'react'
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { useFormik } from "formik";
import { Input } from "antd";
import './Login.scss'

export default function Login(props) {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      // console.log(values)
      // const action = dangNhapAction (values);
      // dispatch(action);
    },
  });

  return (
    <div id="Login" className='d-flex justify-content-center align-items-center py-5 text-white col-12 col-md-6'>
    <form
    className='w-75 form'
    onSubmit={formik.handleSubmit}
  >
    <div>
      <div className='text-center'>
        <NavLink to="/" title="Back to homepage">
          <img
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="cyberlearn.vn"
          />
        </NavLink>
      </div>
    </div>
    <div>
      <h2 className='text-white my-5'>
        Login
      </h2>
      <div>
        <div>
          <div className='form-group'>
            <div>
              {" "}
              <label
                htmlFor="taiKhoan"
              >
                Account
              </label>
            </div>
            <Input
              type="text"
              placeholder="Please enter your accont"
              name="taiKhoan"
              id="taiKhoan"
              onChange={formik.handleChange}
            />
          </div>
          <div className='form-group'>
            <div className='d-flex justify-content-between mt-4'>
              <label
                htmlFor="matKhau"
              >
                Password
              </label>
              <div>
                <a
                  href="#"
                  title="Click to retrieve password"
                >
                  Forgot password ?
                </a>
              </div>
            </div>
            <Input.Password
              type="password"
              placeholder="Please enter your password"
              name="matKhau"
              id="matKhau"
              onChange={formik.handleChange}
            />
          </div>
          <div className='my-5 text-center'>
            <button
              className='btn btn-primary w-100 font-weight-bold'
              title="Click to login"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
        <div className='text-center d-sm-flex justify-content-center'>
          <p className='mr-sm-3'>
            Do not have an account ?
          </p>
          <NavLink
            className='font-weight-bold'
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

  )
}