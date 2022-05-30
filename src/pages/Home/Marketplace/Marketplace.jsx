import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { layChiTietLoaiCongViecChinhAction } from "../../../redux/actions/QuanLyCongViecAction";

export default function Marketplace(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layChiTietLoaiCongViecChinhAction())
  },[])

  return (
    <div>Matketplace</div>
  )
}
