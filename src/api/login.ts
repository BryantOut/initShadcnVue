import { request } from "@/utils/request";

// 检测是否登录接口
export function isLogin() {
  return request.get<any>({
    url: "/Login/IsLogin",
  });
}

// 管理后台登录接口
export function logOn(data) {
  return request.post<any>({
    url: "/Login/LogOn",
    data,
  });
}

// 生成图片验证码接口
export function getVidateCode() {
  return request.get<any>({
    url: "/Login/GetVidateCode",
  });
}

// 修改密码接口
export function editMyPassword(data) {
  return request.post<any>({
    url: "/Admin/EditMyPassword",
    data,
  });
}

// 验证图片验证码接口
export function validtionImageCode() {
  return request.get<any>({
    url: "/Login/ValidtionImageCode",
  });
}
