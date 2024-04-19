import axios from 'axios';
import { backendUrl } from '../Utility/StaticDetail';
const baseUrl = backendUrl;

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

  export const getMedicalRecords = async () => {
    try {
      const response = await axios.get(baseUrl+`medicalRecords/GetRecords`, {
        headers: {
          "Content-type": "application/json",
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error searching medical records:", error);
      throw error; // Optionally rethrow the error to handle it elsewhere
    }
  };
  export const getMedicalRecordsByUserId = async (id) => {
    try {
      const response = await axios.get(baseUrl+`MedicalRecords/GetRecordByUserId/${id}`, {
        headers: {
          "Content-type": "application/json",
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error searching medical records:", error);
      throw error; // Optionally rethrow the error to handle it elsewhere
    }
  };
  export const downloadMedicalRecord= async (id) => {
    try {
      const response = await axios.get(baseUrl+`MedicalRecords/Download/${id}`, {
          responseType: 'arraybuffer',
      });
      return response.data;
    } catch (error) {
      console.error("Error searching medical records:", error);
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

  export const gettimeslots = async (date) => {
    try {
      const response = await axios.get(baseUrl+`appointment/time-slots?selectedDate=${date}`, {
        headers: {
          "Content-type": "application/json",
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error retrieving timeslots:", error);
      throw error; // Optionally rethrow the error to handle it elsewhere
    }
  };
    export const getDoctorById = async (id) => {
      try {
        const response = await axios.get(baseUrl+`doctor/GetById/${id}`, {
          headers: {
            "Content-type": "application/json",
          }
        });
        return response.data;
      } catch (error) {
        console.error("Error retrieving doctors:", error);
        throw error; // Optionally rethrow the error to handle it elsewhere
      }
  };
