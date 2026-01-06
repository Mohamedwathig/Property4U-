import axios from "axios";

export const fetchApi = async (propertyId) => {
  try {
    const response = await axios.get(
      `https://realty-in-us.p.rapidapi.com/properties/v3/get-photos`,
      {
        params: {
          property_id: propertyId
        },
        headers: {
          "x-rapidapi-key": "55c800b8ffmshfd874059a5fd2d9p1a73cajsnae10d969543a",
          "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
        },
      }
    );

    return response.data?.data || null;
  } catch (error) {
    console.error(
      "API fetch error:",
      error.response?.status,
      error.message
    );
    throw error;
  }
};