import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION } from "../types";
import { history } from "../../App";

  
export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
      try {
        const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
        console.log(result.data.message,"result")

        if (result.data.message === "Đăng Nhập Thành Công ! ") {
          await dispatch({
            type: DANG_NHAP_ACTION,
            thongTinDangNhap: result.data.user,
          });
  
          alert("Đăng nhập thành công");
          history.push('/'); 
          window.location.reload();      
        }
  
      } catch (error) {
        alert(
          "Đăng nhập không thành công, tên đăng nhập hoặc mật khẩu không chính xác"
        );
        console.log("error", error.response.data);
      }
    };
  };
