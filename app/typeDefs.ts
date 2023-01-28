import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    post(id: Int!): Post
    todos(pageSize: Int = 10, page: Int = 1): [Todo]
    getWeather(zipCode: String!): Weather
  }

  type Post {
    id: Int
    title: String
    body: String
  }

  type Todo {
    id: ID
    title: String
    completed: Boolean
  }

  type Weather {
    temperature: Float
    description: String
  }
`;

export { typeDefs };
