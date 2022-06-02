import { baseService } from "./baseServices";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  // Api 1: Lấy danh sách người dùng
  layDanhSachNguoiDung = (name = "") => {
    if (name.toLocaleLowerCase().trim() !== "") {
      return this.get(`api/users/pagination-search?name=${name}`);
    }
    return this.get(`api/users`);
  };

    // Api 1: Tạo người dùng mới
    taoNguoiDungMoi = () => {
      return this.post(`api/users`);
    };

  // Api 3: Lấy thông tin chi tiết của 1 người dùng
  layThongTinChiTietNguoiDung = (idNguoiDung) => {
    return this.get(`api/users/${idNguoiDung}`);
  };

  // Api 4: Cập nhật thông tin người dùng
  capNhatThongTinNguoiDung = (idNguoiDung) => {
    return this.put(`api/users/${idNguoiDung}`);
  };

  // Api 5: Xóa người dùng
  xoaNguoiDung = (idNguoiDung) => {
    return this.delete(`api/users/${idNguoiDung}`);
  };

  // Api 31: Đăng nhập
  dangNhap = (thongTinDangNhap) => {
    return this.post(`api/auth/signin`, thongTinDangNhap);
  };

  // Api 32: Đăng xuất
  dangKyTaiKhoan = (formDataDangKy) => {
    return this.post("api/auth/signup", formDataDangKy);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
