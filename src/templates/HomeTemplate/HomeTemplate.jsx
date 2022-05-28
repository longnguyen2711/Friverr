import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "../../_Component/Header/Header";
import Footer from "../../_Component/Footer/Footer";

export const HomeTemplate = (props) => {
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
            <Header />
            <Component {...propsRoute} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
