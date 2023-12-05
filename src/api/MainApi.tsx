import axios from "axios";

const BASEURL = "/";

const createGetRequest = async (endpoint: string, params?: any) => {
  const response = await axios.get(`${BASEURL}${endpoint}`, {
    params: { ...params },
  });
  return response.data.data;
};

const createPostRequest = async (endpoint: string, body: any, params?: any) => {
  const response = await axios.post(`${BASEURL}${endpoint}`, body, {
    params: { ...params },
  });
  return response.data.data;
};
