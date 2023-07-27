import axios from "axios";

const BASE_URL = "https://64bfcf2b0d8e251fd1117b1f.mockapi.io/jobcard";

export const fetchJobCard = async (callback = () => {}) => {
  try {
    const data = await axios.get(BASE_URL);
    callback(data?.data || []);
  } catch (error) {
    console.log({ error: error?.message });
  }
};

export const submitJobData = async (payload) => {
  try {
    const data = await axios.post(BASE_URL, payload);
    return data;
  } catch (error) {
    console.log({ error: error?.message });
  }
};

export const updateJobCard = async (id, payload) => {
  try {
    const data = await axios.put(`${BASE_URL}/${id}`, payload);
    return data;
  } catch (error) {
    console.log({ error: error?.message });
  }
};

export const deleteJobCard = async (id) => {
  try {
    const data = await axios.delete(`${BASE_URL}/${id}`);
    return data;
  } catch (error) {
    console.log({ error: error?.message });
  }
};
