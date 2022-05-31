import { baseService } from "./baseServices";

export class QuanLyCongViecService extends baseService {
  constructor() {
    super();
  }

  // Api 14: Lấy chi tiết loại công việc chính
  layChiTietLoaiCongViecChinh = () => {
    return this.get(`api/type-jobs`)
  };

  // Api 25: Lấy danh sách công việc theo công việc chính


}

export const quanLyCongViecService = new QuanLyCongViecService();
