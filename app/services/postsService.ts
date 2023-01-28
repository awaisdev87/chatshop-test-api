import apiService from './apiService';

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

const fetchSinglePost = async (id: number) => {
  try {
    const response = await apiService.fetchData(`${postsEndpoint}/${id}`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.log(`Error: ${response.status} - ${response.data}`);
      throw new Error(`Error fetching post with id ${id}`);
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching post with id ${id}`);
  }
};

export { fetchSinglePost };
