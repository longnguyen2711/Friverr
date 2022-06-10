import { Form, Input, Switch } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { layDanhSachCongViecAction } from "../../redux/actions/QuanLyCongViecAction";
import "./JobList.scss";
import HeaderNotForHomePage from "../../_Component/Header/HeaderNotForHomePage";
import { StarFilled, HeartFilled } from "@ant-design/icons";
import { Pagination } from "antd";
import Suggested from "../../_Component/Suggested/Suggested";
import {
  LOCAL_SELLERS,
  ONLINE_SELLERS,
  PRO_SERVICES,
  RESET_JOB,
} from "../../redux/types";

const number = 4;

export default function JobList(props) {
  // Mảng Api
  const { danhSachCongViec, nhap1 } = useSelector(
    (state) => state.QuanLyCongViecReducer
  );

  const danhSachCongViecFilter = danhSachCongViec.filter(
    (job) => job.image && job.name && job.rating && job.price
  );

  const [radio, setRadio] = useState(false);

  // console.log(danhSachCongViec.length);
  // console.log(danhSachCongViec);

  // console.log(danhSachCongViecFilter.length);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(layDanhSachCongViecAction());
  }, []);

  return (
    <section>
      <HeaderNotForHomePage />
      <Suggested />
      <Fragment>
        <div id="JobList">
          <div className="container">
            <div className="joblist__reset">
              <button
                className="btn btn-success"
                title="Click to relay list jobs"
                onClick={() => {
                  dispatch({ type: RESET_JOB });
                }}
              >
                Relay
              </button>
            </div>

            <div className="joblist__filter">
              <Form className="filter-box">
                <Form.Item label="Pro services" className="filter-button">
                  <Switch
                    name="proServices"
                    onChange={() => {
                      dispatch({ type: PRO_SERVICES });
                    }}
                  />
                </Form.Item>
                <Form.Item label="Local sellers" className="filter-button">
                  <Switch
                    name="localSellers"
                    onChange={() => {
                      dispatch({ type: LOCAL_SELLERS });
                    }}
                  />
                </Form.Item>
                <Form.Item label="Online sellers" className="filter-button">
                  <Switch
                    name="onlineSellers"
                    onChange={() => {
                      dispatch({ type: ONLINE_SELLERS });
                    }}
                  />
                </Form.Item>
              </Form>
            </div>

            <h1 className="services-available">
              {nhap1.length.toLocaleString()} services available
            </h1>

            <div className="joblist__list d-flex">
              {nhap1.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <NavLink
                      to={`/jobdetail/${item._id}`}
                      title="Detail"
                      className="joblist-item"
                    >
                      <div className="card">
                        <div className="joblist-img">
                          <img src={item.image} alt="job-list-img" />
                        </div>
                        <div className="card-body">
                          <div>
                            {" "}
                            {item.name.length > 50 ? (
                              <h1>{item.name.slice(0, 50)}...</h1>
                            ) : (
                              <h1>{item.name}</h1>
                            )}
                          </div>
                          <p>
                            <StarFilled className="start" /> {item.rating}
                          </p>
                        </div>
                        <div className="card-footer">
                          <p>
                            <HeartFilled className="heart" /> STARTING AT $
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </Fragment>
                );
              })}
              <Pagination
                total={nhap1.length}
                defaultCurrent={1}
                showSizeChanger={true}
                showQuickJumper
                showTotal={(total) => `Total ${total}`}
              />
            </div>
          </div>
        </div>
      </Fragment>
    </section>
  );
}
