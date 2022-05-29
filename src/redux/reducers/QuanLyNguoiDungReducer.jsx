import { Token, USER_LOGIN } from "../../util/config";
import { DANG_KY_ACTION, DANG_NHAP_ACTION } from "../types";

// Kiểm tra trong localStorage đã có thông tin đăng nhập hay chưa, nếu có rồi thì không cần đăng nhập lại
let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
  // Đăng nhập
  userLogin: user,
  thongTinNguoiDungDangNhap: {}, // Tách ra để sau này dễ lấy data chứ trong userLogin cũng có
  
  // Đăng ký
  userRegister: {},

};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      // Lưu thông tin đăng nhập vào localStorege
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(Token, JSON.stringify(thongTinDangNhap.token));
      
      // Thông tin người dùng đăng nhập
      state.thongTinNguoiDungDangNhap = action.thongTinDangNhap;

      // Lưu thông tin đăng nhập vào state
      return { ...state, userLogin: thongTinDangNhap };
    }


    case DANG_KY_ACTION: {
      state.userRegister = action.formDataDangKy;
      return { ...state };
    }


    
 
    default:
      return { ...state };
  }
};
