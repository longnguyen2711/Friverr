import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_KY_ACTION, DANG_NHAP_ACTION } from "../types";
import { history } from "../../App";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

      if (result.status === 200) {
        await dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.user,
        });

        // Thông báo đăng nhập thành công và quay về trang chủ
        alert("Logged in successfully");
        history.push("/");
        window.location.reload();
      }
    } catch (error) {
      alert("Login failed, username or password is incorrect");
      console.log("error", error.response.data);
    }
  };
};

export const dangKyTaiKhoanAction = (formDataDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKyTaiKhoan(
        formDataDangKy
      );

      if (result.status === 201) {
        dispatch({
          type: DANG_KY_ACTION,
          formDataDangKy: result.data,
        });

        // Thông báo đăng ký thành công và đến trang đăng nhập
        alert("Successful registration, go to login page");
        history.push("/login");
        window.location.reload();
      }
    } catch (error) {
      alert("Registration failed, please check again");
      console.log("error", error.response.data);
    }
  };
};
