import axiosService from '@/api/index';

const postUser = () => {
  return axiosService.post('login');
}

export {
  postUser
};