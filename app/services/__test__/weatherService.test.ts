import { fetchWeather } from '../weatherService';
import apiService from '../apiService';

jest.mock('../apiService', () => {
  return {
    fetchData: jest.fn(() => Promise.resolve({
      status: 200,
      data: {
        main: {
          temp: 20,
        },
        weather: [
          {
            description: 'clear sky',
          },
        ],
      },
    }))
  };
});

describe('fetchWeather', () => {
  it('should fetch weather for given zip code', async () => {
    const weather = await fetchWeather('94040');
    expect(weather).toEqual({
      temperature: 20,
      description: 'clear sky',
    });
  });

  it('should throw an error if there is a problem fetching the weather', async () => {
    jest.resetAllMocks();
    (apiService.fetchData as jest.Mock).mockRejectedValueOnce(new Error('Fetch error'));
    await expect(fetchWeather('94040')).rejects.toThrowError('Error fetching weather with zipCode 94040');
  });
});
