import { Token, USER_LOGIN } from "../../util/config";
import {
  LAY_CHI_TIET_LOAI_CONG_VIEC_CHINH_ACTION,
  LAY_DANH_SACH_CONG_VIEC_ACTION,
  LAY_DANH_SACH_CONG_VIEC_THEO_TEN_CONG_VIEC_ACTION,
  LAY_THONG_TIN_CHI_TIET_CONG_VIEC,
} from "../types";

const stateDefault = {
  // Api 14
  chiTietLoaiCongViecChinh: [],
  // Api 20
  danhSachCongViec: [],
  // Api 23
  thongTinChiTietCongViec: [],
  // Api 29
  danhSachCongViecTheoTenCongViec: [],
};

export const QuanLyCongViecReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_CHI_TIET_LOAI_CONG_VIEC_CHINH_ACTION: {
      // Có nhiều Job rác bị thêm vào nên phải lọc ra
      state.chiTietLoaiCongViecChinh = action.chiTietLoaiCongViecChinh.filter(
        (item) => item.subTypeJobs.length > 0
      );
      return { ...state };
    }

    case LAY_DANH_SACH_CONG_VIEC_ACTION: {
      // Có nhiều Job rác bị thêm vào nên phải lọc ra
      state.danhSachCongViec = action.danhSachCongViec;
      return { ...state };
    }

    case LAY_DANH_SACH_CONG_VIEC_THEO_TEN_CONG_VIEC_ACTION: {
      // Có nhiều Job rác bị thêm vào nên phải lọc ra
      state.danhSachCongViecTheoTenCongViec =
        action.danhSachCongViecTheoTenCongViec;
      return { ...state };
    }

    case LAY_THONG_TIN_CHI_TIET_CONG_VIEC: {
      // Có nhiều Job rác bị thêm vào nên phải lọc ra
      state.thongTinChiTietCongViec = action.thongTinChiTietCongViec;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
