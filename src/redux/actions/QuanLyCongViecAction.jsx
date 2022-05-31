 import { history } from "../../App";
import { quanLyCongViecService } from "../../services/QuanLyCongViecService";
import { LAY_CHI_TIET_LOAI_CONG_VIEC_CHINH_ACTION, LAY_DANH_SACH_CONG_VIEC_ACTION } from "../types";

// Api 14: Lấy chi tiết loại công việc chính
export const layChiTietLoaiCongViecChinhAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyCongViecService.layChiTietLoaiCongViecChinh();
      if (result.status === 200) {
        await dispatch({
          type: LAY_CHI_TIET_LOAI_CONG_VIEC_CHINH_ACTION,
          chiTietLoaiCongViecChinh: result.data,
        });
      }

    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

// Api 20: Lấy danh sách công việc
export const layDanhSachCongViecAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyCongViecService.layDanhSachCongViec();

      if (result.status === 200) {
        await dispatch({
          type: LAY_DANH_SACH_CONG_VIEC_ACTION,
          danhSachCongViec: result.data,
        });
      }

    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};