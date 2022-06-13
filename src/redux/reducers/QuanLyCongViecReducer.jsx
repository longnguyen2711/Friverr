import { DANH_SACH_CONG_VIEC_HOAN_THANH_STORAGE } from "../../util/config";
import {
  FINISH_JOB,
  LAY_CHI_TIET_LOAI_CONG_VIEC_CHINH_ACTION,
  LAY_DANH_SACH_CONG_VIEC_ACTION,
  LAY_DANH_SACH_CONG_VIEC_THEO_TEN_CONG_VIEC_ACTION,
  LAY_THONG_TIN_CHI_TIET_CONG_VIEC,
  LAY_THONG_TIN_CHI_TIET_LOAI_CONG_VIEC_CHINH,
  LOCAL_SELLERS,
  ONLINE_SELLERS,
  PRO_SERVICES,
  RESET_JOB,
} from "../types";

let DSCVHTLocalStorage = [];
if (localStorage.getItem(DANH_SACH_CONG_VIEC_HOAN_THANH_STORAGE)) {
  DSCVHTLocalStorage = JSON.parse(
    localStorage.getItem(DANH_SACH_CONG_VIEC_HOAN_THANH_STORAGE)
  );
}

const stateDefault = {
  // Api 14
  chiTietLoaiCongViecChinh: [],
  // Api 17
  thongTinChiTietLoaiCongViecChinh: [],
  // Api 20
  danhSachCongViec: [],
  danhSachCongViecFilter: [],
  danhSachCongViecDefault: [],
  // Api 23
  thongTinChiTietCongViec: [],
  // Api 28
  danhSachCongViecDaHoanThanh: DSCVHTLocalStorage,
  // Api 29
  danhSachCongViecTheoTenCongViec: [],
  // Lọc
  proServices: false,
  localSellers: false,
  onlineSellers: false,
};

export const QuanLyCongViecReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_CHI_TIET_LOAI_CONG_VIEC_CHINH_ACTION: {
      state.chiTietLoaiCongViecChinh = action.chiTietLoaiCongViecChinh.filter(
        (item) => item.subTypeJobs.length > 0
      );
      return { ...state };
    }

    case LAY_DANH_SACH_CONG_VIEC_ACTION: {
      // Có nhiều Job rác bị thêm vào nên phải lọc ra
      state.danhSachCongViec = action.danhSachCongViec;
      state.danhSachCongViecDefault = action.danhSachCongViec;
      return { ...state };
    }

    case LAY_DANH_SACH_CONG_VIEC_THEO_TEN_CONG_VIEC_ACTION: {
      // Có nhiều Job rác bị thêm vào nên phải lọc ra
      state.danhSachCongViecTheoTenCongViec =
        action.danhSachCongViecTheoTenCongViec;
      return { ...state };
    }

    case LAY_THONG_TIN_CHI_TIET_CONG_VIEC: {
      state.thongTinChiTietCongViec = action.thongTinChiTietCongViec;
      return { ...state };
    }

    case PRO_SERVICES: {
      state.proServices = !state.proServices;
      if (state.proServices === true) {
        state.danhSachCongViecFilter = state.danhSachCongViec.filter(
          (job) => job.proServices === state.proServices
        );
        state.danhSachCongViec = state.danhSachCongViecFilter;
      }
      return { ...state };
    }

    case LOCAL_SELLERS: {
      state.localSellers = !state.localSellers;
      if (state.localSellers === true) {
        state.danhSachCongViecFilter = state.danhSachCongViec.filter(
          (job) => job.localSellers === state.localSellers
        );
        state.danhSachCongViec = state.danhSachCongViecFilter;
      }
      return { ...state };
    }

    case ONLINE_SELLERS: {
      state.onlineSellers = !state.onlineSellers;
      if (state.onlineSellers === true) {
        state.danhSachCongViecFilter = state.danhSachCongViec.filter(
          (job) => job.onlineSellers === state.onlineSellers
        );
        state.danhSachCongViec = state.danhSachCongViecFilter;
      }
      return { ...state };
    }

    case RESET_JOB: {
      state.danhSachCongViec = state.danhSachCongViecDefault;
      if ((state.proServices = true)) {
        state.proServices = !state.proServices;
      }
      if ((state.localSellers = true)) {
        state.localSellers = !state.localSellers;
      }
      if ((state.onlineSellers = true)) {
        state.onlineSellers = !state.onlineSellers;
      }
      return { ...state };

      // window.location.reload();
    }

    case FINISH_JOB: {
      state.danhSachCongViecDaHoanThanh.push(action.congViecDaHoanThanh);
      localStorage.setItem(
        DANH_SACH_CONG_VIEC_HOAN_THANH_STORAGE,
        JSON.stringify(state.danhSachCongViecDaHoanThanh)
      );
      return { ...state };
    }

    case LAY_THONG_TIN_CHI_TIET_LOAI_CONG_VIEC_CHINH: {
      state.thongTinChiTietLoaiCongViecChinh = action.thongTinChiTietLoaiCongViecChinh
      return { ...state };
    }

    default:
      return { ...state };
  }
};
