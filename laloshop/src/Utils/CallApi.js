import axios from 'axios';

export const getApi = async (pathApi, params = {}) => {
    const response = await axios.get(pathApi, params);
    return response.data;
};
export default getApi;
