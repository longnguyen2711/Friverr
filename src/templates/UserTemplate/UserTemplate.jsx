import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";

export const UserTemplate = (props) => {
  const { Component, ...restProps } = props; // path, exact, Component

  // Tự động chuyển hướng về đầu trang khi trở lại trang trước đó
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location, props.history, props.match
        return (
          <Fragment>
            <div
              className="w-100 d-flex justify-content-center align-items-center py-md-5"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(https://wallpaperaccess.com/full/17538.jpg)`,
              }}
            >
              <Component {...propsRoute} />
            </div>
          </Fragment>
        );
      }}
    />
  );
};
