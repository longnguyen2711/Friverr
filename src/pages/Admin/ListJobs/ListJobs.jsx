import React, { memo, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Table, Input } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./ListJobs.scss";
import {
  layDanhSachCongViecTheoTenCongViecAction,
  xoaCongViecAction,
} from "../../../redux/actions/QuanLyCongViecAction";

export default function ListJobs(props) {
  const { danhSachCongViecTheoTenCongViec } = useSelector(
    (state) => state.QuanLyCongViecReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachCongViecTheoTenCongViecAction();
    dispatch(action);
  }, []);

  const { Search } = Input;
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (text, object) => {
        return (
          <Fragment>
            <img src={text} atl="..." width={"100%"} />
          </Fragment>
        );
      },

      width: "15%",
    },
    {
      title: "",
      dataIndex: "_id",
      render: (text, object) => {
        return (
          <Fragment>
            <NavLink
              to={`/admin/listjobs/updateimage/${text}`}
              className="ml-3 text-primary"
              title="Update image"
            >
              <i class="text-primary fa fa-edit"></i>
            </NavLink>
          </Fragment>
        );
      },

      width: "2.5%",
    },
    {
      title: "Job name",
      dataIndex: "name",
      value: (text, object) => {
        return <span style={{ textAlign: "justify" }}>{object}</span>;
      },
      sorter: (a, b) => {
        let nameA = a.name;
        let nameB = b.name;
        if (nameA > nameB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Sub type",
      dataIndex: "subType",
      render: (text, object) => {
        return <span>{object.subType.name}</span>;
      },
      sorter: (a, b) => {
        let nameA = a.name;
        let nameB = b.name;
        if (nameA > nameB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "17.5%",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      render: (text, object) => {
        return <span>{text}</span>;
      },
      sorter: (a, b) => {
        let genderA = a.gender.toLowerCase().trim();
        let genderB = b.gender.toLowerCase().trim();
        if (genderA > genderB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text, object) => {
        return <span>{text}</span>;
      },
      width: "10%",
    },
    {
      title: "Pro Service",
      dataIndex: "proServices",
      render: (text, object) => {
        return (
          <span>
            {object.proServices === true ? <i class="text-success fa fa-check"></i> : ""}
          </span>
        );
      },
      width: "10%",
    },

    {
      title: "",
      dataIndex: "_id",
      render: (text, object, index) => {
        return (
          <Fragment key={index} className="flex items-center">
            <NavLink
              to={`/admin/listjobs/editjob/${text}`}
              className="ml-3 text-primary"
              title="Edit job"
            >
              <i class="text-primary fa fa-user-edit"></i>
            </NavLink>

            <span
              className="ml-3 text-danger"
              style={{ cursor: "pointer" }}
              title="Delete job"
              onClick={() => {
                // Gọi action xóa
                if (
                  window.confirm("Are you sure you want to delete this job?")
                ) {
                  dispatch(xoaCongViecAction(object._id));
                }
              }}
            >
              <i class="text-danger fa fa-trash-alt"></i>
            </span>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
  ];

  // Lọc bỏ các công việc không có đủ dữ liệu
  const danhSachCongViecTheoTenCongViecFilter =
    danhSachCongViecTheoTenCongViec.filter(
      (job) =>
        job.subType !== null && job.image && job.rating && job.price && job.name
    );

  // Gán lại data
  const data = danhSachCongViecTheoTenCongViecFilter;

  // Hàm tìm kiếm
  const onSearch = (value) => {
    dispatch(layDanhSachCongViecTheoTenCongViecAction(value));
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  // Kiểm tra trong localStorage nếu không phải admin thì chuyển về trang profile
  // if (userLogin.maLoaiNguoiDung !== "QuanTri") {
  //   alert("Bạn không có quyền truy cập vào trang này !");
  //   return <Redirect to="/admin/profile" />;
  // }

  return (
    <div id="listJobs">
      <h2 className="mb-5">List jobs</h2>
      <div title="Click to add new job" className="mb-4">
        <NavLink
          to="/admin/listjobs/addnewjob"
          className="add-account-button"
        >
          Add new job
        </NavLink>
      </div>

      <Search
        className="mb-3"
        placeholder="Enter job name"
        // Nếu bỏ enterButton sẽ hiện kính lúp
        enterButton="Search"
        size="large"
        // suffix là search giọng nói
        // suffix={suffix}
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
