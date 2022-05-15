import axiosService from '@/api/index';

const getList = () => {
  return axiosService.get('list');
};

export {
  getList
};