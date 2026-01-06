import axios from "axios";
import { data } from "react-router-dom";

export const fetchApi = async (url, body = {}) => {
  try {
    const response = await axios.post(
      `https://realty-in-us.p.rapidapi.com${url}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-key": "55c800b8ffmshfd874059a5fd2d9p1a73cajsnae10d969543a",
          "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
        },
      }
    );

    return response.data?.data?.home_search?.results || [];

  } catch (error) {
    console.error("API fetch error:", error.response?.status, error.message);
    return [];
  }
};

