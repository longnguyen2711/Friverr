import { baseService } from "./baseServices";

export class DemoCallApiService extends baseService {
  constructor() {
    super();
  }

  layDanhSachNguoiDung = () => {
    return this.get('api/jobs/by-name?name=v');
  };


}

export const demoCallApiService = new DemoCallApiService();
