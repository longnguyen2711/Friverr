import { Token, USER_LOGIN } from "../../util/config";
import { LAY_CHI_TIET_LOAI_CONG_VIEC_CHINH_ACTION } from "../types";

const stateDefault = {
    chiTietLoaiCongViecChinh: [],

};

export const QuanLyCongViecReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_CHI_TIET_LOAI_CONG_VIEC_CHINH_ACTION: {
        // Có nhiều Job rác bị thêm vào nên phải lọc ra
        state.chiTietLoaiCongViecChinh = action.chiTietLoaiCongViecChinh.filter(item => item.subTypeJobs.length > 0)
      return { ...state };
    }



    
 
    default:
      return { ...state };
  }
};
