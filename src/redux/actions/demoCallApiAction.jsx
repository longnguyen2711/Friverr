  import { demoCallApiService } from "../../services/DemoCallApiService";
  
  
  export const layDanhSachNguoiDungAction = () => {
    return async (dispatch) => {
      try {
        const result = await demoCallApiService.layDanhSachNguoiDung();

        console.log(result,"result")

        // if (result.data.statusCode === 200) {
        //   dispatch({
        //     type: SET_DANH_SACH_TAI_KHOAN,
        //     danhSachTaiKhoan: result.data.content,
        //   });
        // }
      } catch (error) {
        console.log("error", error);
      }
    };
  };
