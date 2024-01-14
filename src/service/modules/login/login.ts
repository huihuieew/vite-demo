import http from "@/service/http";
import * as T from "./types";

const loginApi: T.ILoginApi = {
  login(params: T.ILoginParams) {
    return http.post("/login", params);
  },
};
export default loginApi;
