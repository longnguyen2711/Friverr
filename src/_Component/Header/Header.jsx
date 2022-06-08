import { layThongTinChiTietNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { useDispatch, useSelector } from "react-redux";
import { Token, USER_LOGIN } from "../../util/config";
import React, { useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../App";
import "./Header.scss";
import _ from "lodash";
import { layChiTietLoaiCongViecChinhAction } from "../../redux/actions/QuanLyCongViecAction";

export default function Header(props) {
  const { chiTietLoaiCongViecChinh } = useSelector(
    (state) => state.QuanLyCongViecReducer
  );
  const { userLogin, thongTinChiTietNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layChiTietLoaiCongViecChinhAction());
    dispatch(layThongTinChiTietNguoiDungAction(userLogin._id));
  }, []);

  // Trạng thái đăng nhập, nếu chưa đăng nhập thì hiển thị đăng nhập và đăng ký, nếu đã đăng nhập thì hiển thị đăng xuất
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <div className="navbar-nav ml-auto">
            <NavLink
              className="nav-link text-left pl-2 ml-4 font-weight-bold "
              to="/login"
              title="Sign in"
            >
              Sign in
            </NavLink>
            <NavLink
              className="nav-link  nav-link-join ml-4 font-weight-bold"
              to="/register"
              title="Join"
            >
              Join
            </NavLink>
          </div>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <div className="navbar-nav ml-auto">
          <div
            className="nav-link pl-2 ml-4 font-weight-bold"
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
            Sign out
          </div>
          <NavLink
              className="nav-link  nav-link-join ml-4 font-weight-bold"
              to="/admin/infoadmin"
              title="Go to Admin page"
            >
              Join
            </NavLink>
          <div
            className="nav-link text-black pl-2 ml-4 font-weight-bold"
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push("/profile");
            }}
            title="Go to the personal page"
          >
            {thongTinChiTietNguoiDung.name}
          </div>
        </div>
      </Fragment>
    );
  };

  // // Sticky header
  window.addEventListener("scroll", function () {
    var header = this.document.querySelector("#header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
  });

  return (
    <header id="header" className="header sticky">
      <main className="header__main">
        <nav className="navbar navbar-expand-sm p-0">
          <div className="container">
            <NavLink
              className="navbar-brand font-weight-bold"
              to="/home"
              title="fiverr"
            >
              fiverr<i className="fa fa-circle text-success"></i>
            </NavLink>

            <div className="nav-bar-search input-group-sm">
              <input
                type="text"
                className="form-control"
                placeholder="Find services"
              />
              <button className="input-group-prepend">Search</button>
            </div>

            <button
              className="navbar-toggler ml-2"
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
          </div>
        </nav>
        <div className="job-type">
          <div className="my-container">
            {" "}
            {chiTietLoaiCongViecChinh.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  title={item.name}
                  to="/"
                  className="navlink-jobtype"
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
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
