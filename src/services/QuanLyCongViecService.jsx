import { baseService } from "./baseServices";

export class QuanLyCongViecService extends baseService {
  constructor() {
    super();
  }

  layChiTietLoaiCongViecChinh = () => {
    return this.get(`api/type-jobs`)
  };


}

export const quanLyCongViecService = new QuanLyCongViecService();
