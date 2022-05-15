import axios from "axios";
import { setInterceptors } from "@/api/common/interceptors";

const createAxios = () => {
  const axiosService = axios.create({
    baseURL: process.env.VUE_APP_MOCK_API_URL,
  });
  return setInterceptors(axiosService);
}

const axiosService = createAxios();

export default axiosService;