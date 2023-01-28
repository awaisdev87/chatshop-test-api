import { fetchAllTodos } from '../todosService';
import apiService from '../apiService';

describe('fetchAllTodos', () => {
  it('should return an array of todos', async () => {
    apiService.fetchData = jest.fn().mockResolvedValue({
      status: 200,
      data: [{ id: 1, title: 'Todo 1' }, { id: 2, title: 'Todo 2' }]
    });

    const todos = await fetchAllTodos(10, 1);

    expect(todos).toEqual([{ id: 1, title: 'Todo 1' }, { id: 2, title: 'Todo 2' }]);
  });

  it('should throw an error if the response status is not 200', async () => {
    apiService.fetchData = jest.fn().mockResolvedValue({
      status: 400,
      data: 'Bad Request'
    });

    try {
      await fetchAllTodos(10, 1);
    } catch (error: any) {
      expect(error.message).toBe('Error fetching todos');
    }
  });
});
