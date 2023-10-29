/** @format */

import axios from "axios";
import { toast } from "react-toastify";

class AxiosService {
  constructor() {
    this.initializeHttpClient();
    this.setupRequestInterceptor();
  }

  initializeHttpClient() {
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    this.httpClient = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        baseUrl: baseURL,
      },
    });
  }

  setupRequestInterceptor() {
    this.httpClient.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  async sendRequest(config) {
    try {
      const response = await this.httpClient(config);
      return response.data;
    } catch (error) {
      this.handleRequestError(error);
    }
  }

  async get({ url, params }) {
    return this.sendRequest({ method: "get", url, params });
  }

  async post({ url, data }) {
    return this.sendRequest({ method: "post", url, data });
  }

  async put({ url, data }) {
    return this.sendRequest({ method: "put", url, data });
  }

  async delete({ url }) {
    return this.sendRequest({ method: "delete", url });
  }

  handleRequestError(error) {
    if (error.response) {
      console.error("Response Error:", error.response.data);
      console.error("Status Code:", error.response.status);

      const errorMessage =
        error.response.data.message ||
        "Có lỗi xảy ra trong quá trình xử lý yêu cầu.";
      toast.error(errorMessage);
    } else if (error.request) {
      console.error("Request Error:", error.request);
      toast.error("Không thể kết nối đến máy chủ.");
    } else {
      console.error("Error:", error.message);
      toast.error("Có lỗi xảy ra.");
    }
  }
}

export default new AxiosService();
