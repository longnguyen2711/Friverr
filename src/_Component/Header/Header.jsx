import React, { useEffect, useState, Fragment } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Token, USER_LOGIN } from "../../util/config";
import { history } from "../../App";

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  // Trạng thái đăng nhập, nếu chưa đăng nhập thì hiển thị đăng nhập và đăng ký, nếu đã đăng nhập thì hiển thị đăng xuất
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <div className="navbar-nav ml-auto">
            <NavLink
              className="nav-link text-black pl-2 ml-4 font-weight-bold"
              to="/home"
              title="Become a Seller"
            >
              Become a Seller
            </NavLink>
            <NavLink
              className="nav-link text-black pl-2 ml-4 font-weight-bold "
              to="/login"
              title="Login"
            >
              Login
            </NavLink>
            <NavLink
              className="nav-link text-black pl-2 ml-4 font-weight-bold "
              to="/register"
              title="Register"
            >
              Register
            </NavLink>
          </div>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <div className="navbar-nav ml-auto">
          <NavLink
            className="nav-link text-black pl-2 ml-4 font-weight-bold"
            to="/home"
            title="Become a Seller"
          >
            Become a Seller
          </NavLink>
          <div
            className="nav-link text-black pl-2 ml-4 font-weight-bold"
            style={{ cursor: "pointer" }}
            title="Click to sign out"
            onClick={() => {
              if (window.confirm("Are you sure you want to sign out?")) {
                // Xóa trong localStorage
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(Token);
                // Chuyển hướng về home
                history.push("/");
                // Reload lại trang web
                window.location.reload();
              }
            }}
          >
            Log out
          </div>
          <div
            className="nav-link text-black pl-2 ml-4 font-weight-bold"
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push("/profile");
            }}
            title="Go to the personal page"
          >
            {userLogin.name}
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <header id="header" className="header">
      <main className="herader__main py-2">
        <div className="container">
          <nav className="navbar navbar-expand-md p-0">
            <NavLink
              className="navbar-brand font-weight-bold"
              to="/"
              title="fiverr"
            >
              fiverr<i className="fa fa-circle text-success"></i>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars text-black border py-2 px-3 rounded"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              {renderLogin()}
            </div>
          </nav>
        </div>
      </main>
      <div className="back-to-top">
        <a href="#" title="Back to top">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </header>
  );
}
