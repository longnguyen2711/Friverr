import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachNguoiDungAction } from "../../../redux/actions/demoCallApiAction";


function Carousel(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachNguoiDungAction();
    dispatch(action);
  }, [])

  return (
    <div>Carousel</div>
  )
}

export default memo(Carousel)
