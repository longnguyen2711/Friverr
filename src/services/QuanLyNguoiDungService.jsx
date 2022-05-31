import { baseService } from "./baseServices";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  // Api  31
  dangNhap = (thongTinDangNhap) => {
    return this.post(`api/auth/signin`, thongTinDangNhap);
  };

  // Api 32
  dangKyTaiKhoan = (formDataDangKy) => {
    return this.post('api/auth/signup', formDataDangKy);
  };


}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
