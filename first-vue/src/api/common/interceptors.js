const setInterceptors = (axiosService) => {
  axiosService.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosService.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axiosService;
};

export {
  setInterceptors
};