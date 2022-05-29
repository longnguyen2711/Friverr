import { baseService } from "./baseServices";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  dangNhap = (thongTinDangNhap) => {//{taiKhoan:'', matKhau:''}
    return this.post(`api/auth/signin`, thongTinDangNhap);
  };



}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
