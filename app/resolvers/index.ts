import { fetchSinglePost } from '../services/postsService';
import { fetchAllTodos } from '../services/todosService';
import { fetchWeather } from '../services/weatherService';

import { postRequestIDSchema } from '../validationSchemas/postsSchema';
import { weatherRequestZipCodeSchema } from '../validationSchemas/weatherSchema';

const resolvers = {
  Query: {
    post: async (_: any, { id }: { id: number }) => {
      try {
        await postRequestIDSchema.validate(id);

        const data = await fetchSinglePost(id);
        return data;
      } catch (err: any) {
        throw new Error(err.message);
      }
    },
    todos: async (_: any, { pageSize = 10, page = 1 }) => {
      const data = await fetchAllTodos(pageSize, page);
      return data;
    },
    getWeather: async (_: any, { zipCode }: { zipCode: string }) => {
      try {
        await weatherRequestZipCodeSchema.validate(zipCode);

        const data = await fetchWeather(zipCode);
        return data;
      } catch (err: any) {
        throw new Error(err.message);
      }
    },
  },
};

export { resolvers };
