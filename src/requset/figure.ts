import axios from '@/config/axiosConfig';

export const getFigureList = (params: object): Promise<any> => {
  return axios.get('/getFigureList', { params });
};
