 import { history } from "../../App";
import { quanLyCongViecService } from "../../services/QuanLyCongViecService";
import { LAY_CHI_TIET_LOAI_CONG_VIEC_CHINH_ACTION } from "../types";

// API 14
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

