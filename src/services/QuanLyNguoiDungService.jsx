import { baseService } from "./baseServices";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  dangNhap = (thongTinDangNhap) => {//{taiKhoan:'', matKhau:''}
    return this.post(`api/auth/signin`, thongTinDangNhap);
  };

  dangKyTaiKhoan = (formDataDangKy) => {
    return this.post('api/auth/signup', formDataDangKy);
  };


}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
