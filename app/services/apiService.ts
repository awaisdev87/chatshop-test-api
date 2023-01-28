import axios from 'axios';

interface APIResponse {
  data: any;
  status: number;
}

class APIService {
  async fetchData(endpoint: string): Promise<APIResponse> {
    try {
      const response = await axios.get(endpoint);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error: any) {
      if (error.response) {
        return {
          data: error.response.data,
          status: error.response.status,
        };
      } else if (error.request) {
        throw new Error(`Error: No response received. ${error.message}`);
      } else {
        throw new Error(`Error: ${error.message}`);
      }
    }
  }
}

export default new APIService();
