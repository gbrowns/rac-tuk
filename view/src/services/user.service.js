import { ENDPOINTS, getFullApiUrl } from 'utils/apiEndpoints';
import { post } from 'utils/api';

const loginUser = async data => {
  const res = await post(getFullApiUrl(ENDPOINTS.LOGIN), data);
  return res;
};
