import { history } from "../../App";
import { quanLyCongViecService } from "../../services/QuanLyCongViecService";

export const layChiTietLoaiCongViecChinhAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyCongViecService.layChiTietLoaiCongViecChinh();

      console.log(result, "result")

    //   if (result.status === 200) {
    //     await dispatch({
    //       type: DANG_NHAP_ACTION,
    //       thongTinDangNhap: result.data.user,
    //     });

    //     // Thông báo đăng nhập thành công và quay về trang chủ
    //     alert("Logged in successfully");
    //     history.push("/");
    //     window.location.reload();
    //   }

    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

