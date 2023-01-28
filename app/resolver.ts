import axios from 'axios';

const resolvers = {
  Query: {
    post: async (_: any, { id }: { id: number }) => {
      if (!id) {
        throw new Error("id is required");
      }
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};

export = {
  resolvers,
};
