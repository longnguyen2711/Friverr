import { useSelector } from "react-redux";
import React, { Fragment } from "react";

// Hiển thị trong thời gian chờ load dữ liệu

export default function Loading(props) {
  const { isLoading } = useSelector((state) => state.LoadingReducer);

  return (
    <Fragment>
      {isLoading ? (
        <div
          className="fixed top-0 left-0 w-100 h-100 flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,1)" }}
        >
          <img
            style={{ width: "400px", zIndex: '50' }}
            src="https://vietnamphotographer.net/images/loading.gif"
            alt="loading-gif"
          />
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}