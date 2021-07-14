import request from "../utils/request";
export default function(url, data = {}, method = "POST") {
  return request({
    url,
    data,
    method,
  });
}
