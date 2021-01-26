import axios from "axios";
// import {
//   Toast
// } from 'mint-ui'

// create an axios instance
const service = axios.create({
  // baseURL: "/api", // url = base url + request url
  baseURL: "http://localhost:3000/", // url = base url + request url
  timeout: 20000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response;

    // // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //     // if (res.code == 50000) {
    //     //   return res
    //     // }
    //     // Toast({
    //     //   message: res.msg || '出错了',
    //     //   position: 'bottom',
    //     //   duration: 2000
    //     // });

    //     // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //     return;
    //     // return Promise.reject(new Error(res.msg || 'Error'))
    // } else {
    return res;
    // }
  },
  (error) => {
    console.log("err" + error); // for debug
    // Toast({
    //   message: error.msg,
    //   iconClass: 'icon icon-error',
    //   duration: 2 * 1000
    // })
    return Promise.reject(error);
  }
);

export default service;
