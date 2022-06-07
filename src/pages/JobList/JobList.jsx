import { Input } from "antd";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { layDanhSachCongViecAction } from "../../redux/actions/QuanLyCongViecAction";
import "./JobList.scss";
import HeaderNotForHomePage from "../../_Component/Header/HeaderNotForHomePage";

export default function JobList(props) {
  // Mảng Api
  const { danhSachCongViec } = useSelector(
    (state) => state.QuanLyCongViecReducer
  );

  const danhSachCongViecFilter = danhSachCongViec.filter(
    (job) =>
      job.image &&
      job.name &&
      job.rating &&
      job.price 
  );

  console.log(danhSachCongViec.length);
  console.log(danhSachCongViec);

  console.log(danhSachCongViecFilter.length);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachCongViecAction());
  }, []);

  return (
    <section>
      <HeaderNotForHomePage />
      <Fragment>
        <div id="JobList">
          <div className="joblist-suggested">
            <p className="joblist-suggested-a">Suggested</p>
            <button className="joblist-suggested-btn">html css</button>
          </div>
          <div className="container">
            <div className="joblist-header"></div>

            <div className="joblist-list">
              <div className="joblist-result">result</div>
              <div className="joblist-list-tasks">
                <button>Category</button>
                <button>Category</button>
                <button>Category</button>
                <button>Category</button>
                <button>Category</button>

                <p>Pro service</p>
                <p>Pro service</p>
                <p>Pro service</p>
              </div>
            </div>

            <div className="joblist-list d-flex">
              {danhSachCongViecFilter.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <div className="joblist-item">
                      <div className="card">
                        <img src={item.image} alt=""/>
                        <div className="card-body">
                          <h1>{item.name}</h1>
                          <p>{item.rating}</p>
                        </div>
                        <div className="card-footer">
                        <span>{item.price}</span>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    </section>
  );
}
