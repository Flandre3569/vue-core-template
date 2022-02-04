import axios from "axios";

let BASE_URL = "/api";
const TIME_OUT = 10000;
// 环境
const REPORTER_HOST = import.meta.env.NODE_ENV;

if (REPORTER_HOST === "development") {
  BASE_URL = "/api";
} else if (REPORTER_HOST === "production") {
  BASE_URL = "/api";
} else {
  BASE_URL = "/api";
}
