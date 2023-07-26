import axios from "axios";

const BASE_URL = "https://64bfcf2b0d8e251fd1117b1f.mockapi.io/jobcard";

export const fetchJobCard = async (callback = () => {}) => {
  const data = await axios.get(BASE_URL);
  callback(data?.data || []);
};

export const submitJobData = async (payload) => {
  const data = await axios.post(BASE_URL, payload);
  return data;
};
