import request from "@/utils/request";
export function getBuilding(payload) {
  return request({
    url: "Building/ShowFloorByCode?code=" + payload,
    method: "get",
    params: payload,
  });
}
