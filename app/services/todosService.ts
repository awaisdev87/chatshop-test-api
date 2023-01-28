import apiService from './apiService';

const todosEndpoint = 'https://jsonplaceholder.typicode.com/todos';

const fetchAllTodos = async (pageSize: number, page: number) => {
  try {
    const response = await apiService.fetchData(
      `${todosEndpoint}/?_limit=${pageSize}&_page=${page}`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      console.log(`Error: ${response.status} - ${response.data}`);
      throw new Error(`Error fetching todos`);
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching todos`);
  }
};

export { fetchAllTodos };
