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

  export const searchDoctors = async (searchQuery) => {
    try {
      const response = await axios.get(baseUrl+`doctor/SearchDoctor?query=${searchQuery}`, {
        headers: {
          "Content-type": "application/json",
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error searching doctors:", error);
      throw error; // Optionally rethrow the error to handle it elsewhere
    }
  };

  export const getDoctors = async () => {
    try {
      const response = await axios.get(baseUrl+`doctor/GetDoctors`, {
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

  export const getDepartments = async () => {
    try {
      const response = await axios.get(baseUrl+`department/GetDepartments`, {
        headers: {
          "Content-type": "application/json",
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error searching departments:", error);
      throw error; // Optionally rethrow the error to handle it elsewhere
    }
  };