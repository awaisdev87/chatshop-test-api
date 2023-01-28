import { fetchSinglePost } from '../postsService';

import apiService from '../apiService';
jest.mock('../apiService', () => {
  return {
    fetchData: jest.fn(() => Promise.resolve({
      status: 200,
      data: {
        id: 1,
        title: 'Test post',
        body: 'This is a test post',
      },
    }))
  };
});

describe('fetchSinglePost', () => {
  it('should fetch a single post by id', async () => {
    const post = await fetchSinglePost(1);
    expect(post).toEqual({
      id: 1,
      title: 'Test post',
      body: 'This is a test post',
    });
  });

  it('should throw an error if the post is not found', async () => {
    jest.clearAllMocks();
    (apiService.fetchData as jest.Mock).mockResolvedValueOnce({
      status: 404,
      data: 'Post not found',
    });
    await expect(fetchSinglePost(1)).rejects.toThrowError('Error fetching post with id 1');
  });

  it('should throw an error if there is a problem fetching the post', async () => {
    jest.clearAllMocks();
    (apiService.fetchData as jest.Mock).mockRejectedValueOnce(new Error('Fetch error'));
    await expect(fetchSinglePost(1)).rejects.toThrowError('Error fetching post with id 1');
  });
});
