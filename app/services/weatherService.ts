import apiService from './apiService';

const postsEndpoint = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.WEATHER_API_KEY;

const fetchWeather = async (zipCode: string) => {
  try {
    const response = await apiService.fetchData(
      `${postsEndpoint}?zip=${zipCode},us&appid=${API_KEY}`
    );

    if (response.status === 200) {
      return {
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
      };
    } else {
      console.log(`Error: ${response.status} - ${response.data}`);
      throw new Error(`Error fetching weather with zipCode ${zipCode}`);
    }
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching weather with zipCode ${zipCode}`);
  }
};

export { fetchWeather };
