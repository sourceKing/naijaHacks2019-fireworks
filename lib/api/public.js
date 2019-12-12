import sendRequest from './sendRequest';

const BASE_PATH = '/api/v1/public';

export const getCourses = () => {
  const res = sendRequest(`${BASE_PATH}/courses`, {
    method: 'GET'
  });
  
  return res;
}