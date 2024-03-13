import axios from 'axios';

const baseUrl = "https://localhost:7182/api/";

export const searchMedicines = async (searchQuery) => {
    try {
      const response = await axios.get(baseUrl+`medicines/SearchMedicine?query=${searchQuery}`, {
        headers: {
          "Content-type": "application/json",
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error searching medicines:", error);
      throw error; // Optionally rethrow the error to handle it elsewhere
    }
  };