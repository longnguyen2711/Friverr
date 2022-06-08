import React, { useEffect, Fragment } from "react";
import HeaderNotForHomePage from "../../_Component/Header/HeaderNotForHomePage";
import "./JobDetail.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



export default function JobDetail(props) {

  const dispatch = useDispatch();

  const { userLogin, thongTinChiTietNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  useEffect(() => {
    // dispatch(layChiTietLoaiCongViecChinhAction());
    // dispatch(layThongTinChiTietNguoiDungAction(userLogin._id));
  }, []);

  return (
    <section id="jobDetail">
      <HeaderNotForHomePage />
      <div className="jobDetail-main">
        <div className="container">

          <div className="left"></div>

          <div className="booking-job">
            <div className="card card-1">
              <div className="card-header">
                <p title="Basic">Basic</p>
                <p title="Standard">Standard</p>
                <p title="Premium">Premium</p>
              </div>
              <div className="card-body">
                <div>
                  <h1>Standard</h1>
                  <p>$1000</p>
                </div>
                <p>adjshfkajidsfhadshfkasdh</p>
                <h1>
                  <i class="fa fa-clock"></i>30 Days Delivery{" "}
                  <i class="fa fa-sync-alt"></i> 1 Revision
                </h1>
                <ul>
                  <li>
                    <i class="text-success fa fa-check"></i>Design Customization
                  </li>
                  <li>
                    <i class="text-success fa fa-check"></i>Content Upload
                  </li>
                  <li>
                    <i class="text-success fa fa-check"></i>Responsive Design
                  </li>
                  <li>
                    <i class="text-success fa fa-check"></i>Include Source Code
                  </li>
                  <li>
                    <i class="text-success fa fa-check"></i>1 Page
                  </li>
                </ul>
                <button title="Continue">Continue ($1000)</button>
                <h2>Compare Packages</h2>
              </div>
            </div>

            <div className="card card-2">
              <div className="card-body">
                <h1>Do you have any special requiredments?</h1>
                <button title="Get a Quote">Get a Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
