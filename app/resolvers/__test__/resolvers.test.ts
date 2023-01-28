import { resolvers } from '../index';
import { fetchSinglePost } from '../../services/postsService';
import { fetchAllTodos } from '../../services/todosService';
import { fetchWeather } from '../../services/weatherService';

jest.mock('../../services/postsService', () => ({
  fetchSinglePost: jest.fn(),
}));

jest.mock('../../services/weatherService', () => ({
  fetchWeather: jest.fn(),
}));

jest.mock('../../services/todosService', () => ({
  fetchAllTodos: jest.fn(),
}));

describe('Resolvers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Query', () => {
    describe('post', () => {
      it('should call fetchSinglePost with the correct id and return the data', async () => {
        const mockData = { id: 1, title: 'Post 1' };
        (fetchSinglePost as jest.Mock).mockResolvedValue(mockData);

        const result = await resolvers.Query.post(null, { id: 1 });

        expect(fetchSinglePost).toHaveBeenCalledWith(1);
        expect(result).toEqual(mockData);
      });
    });

    describe('todos', () => {
      it('should call fetchAllTodos with the correct pageSize and page and return the data', async () => {
        const mockData = [
          { id: 1, title: 'Todo 1' },
          { id: 2, title: 'Todo 2' },
        ];
        (fetchAllTodos as jest.Mock).mockResolvedValue(mockData);

        const result = await resolvers.Query.todos(null, {
          pageSize: 10,
          page: 1,
        });

        expect(fetchAllTodos).toHaveBeenCalledWith(10, 1);
        expect(result).toEqual(mockData);
      });
    });

    describe('getWeather', () => {
      it('should call fetchWeather with the correct zipCode and return the data', async () => {
        const mockData = { temperature: 72, description: 'Sunny' };
        (fetchWeather as jest.Mock).mockResolvedValue(mockData);

        const result = await resolvers.Query.getWeather(null, {
          zipCode: '90210',
        });

        expect(fetchWeather).toHaveBeenCalledWith('90210');
        expect(result).toEqual(mockData);
      });
    });
  });
});
