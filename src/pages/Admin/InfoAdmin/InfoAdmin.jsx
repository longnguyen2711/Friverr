import moment from 'moment';
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './InfoAdmin.scss'

 function InfoAdmin(props) {

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  return (
    <div id="infoAdmin">
      <h2 className="mb-5">Admin: {userLogin.name}</h2>
      <div title="Click to update information"><NavLink to="/admin/infoadmin/updateinfoadmin" className="button-update-info">Update information</NavLink></div>
      <div className="d-flex justify-content-start">
        <table>
          <tbody >
            <tr>
              <td><span>Role</span><span>:</span></td>
              <td>
                {userLogin.role === "ADMIN" ? "Admin" : "Client"}
              </td>
            </tr>
            <tr>
              <td><span>Id</span><span>:</span></td>
              <td>{userLogin._id}</td>
            </tr>
            <tr>
              <td><span>Password</span><span>:</span></td>
              <td>{userLogin.password}</td>
            </tr>
            <tr>
              <td><span>Email</span><span>:</span></td>
              <td>{userLogin.email}</td>
            </tr>
            <tr>
              <td><span>Name</span><span>:</span></td>
              <td>{userLogin.name}</td>
            </tr>
            <tr>
              <td><span>Birthday</span><span>:</span></td>
              <td>{moment(userLogin.birthday).format("DD/MM/YYYY")}</td>
            </tr>
            <tr>
              <td><span>Phone</span><span>:</span></td>
              <td>{userLogin.phone}</td>
            </tr>
            <tr>
              <td><span>Gender</span><span>:</span></td>
              <td>{userLogin.gender = true ? "Male" : "Female"}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
  )
}

export default memo(InfoAdmin)