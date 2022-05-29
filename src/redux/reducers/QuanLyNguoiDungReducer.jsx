import { Token, USER_LOGIN } from "../../util/config";
import { DANG_NHAP_ACTION } from "../types";

// Kiểm tra trong localStorage đã có thông tin đăng nhập hay chưa, nếu có rồi thì không cần đăng nhập lại
let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  thongTinNguoiDung: {},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      console.log(thongTinDangNhap)
      // Lưu thông tin đăng nhập vào localStorege
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(Token, thongTinDangNhap.accessToken);
      // Lưu thông tin đăng nhập vào state
      return { ...state, userLogin: thongTinDangNhap };
    }

 
    default:
      return { ...state };
  }
};
