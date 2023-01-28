# Overview
This is a simple Node.js GraphQL server that utilizes public APIs for fetching data. The server exposes three Query resolvers:

- todos - fetches a list of todos from the jsonplaceholder API
- post - fetches a single post by ID from the jsonplaceholder API
- getWeather - fetches the weather data by zipCode from the OpenWeatherMap API

The resolvers have a defined schema and all user input is properly validated before executing the request. The project also includes unit tests for the resolvers and is written in Typescript.

# Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
- Node.js
- npm (or yarn)
- docker incase of running it with Docker

## Installing
- Clone the repository to your local machine using
```
git clone `https://github.com/AmirHussain-12/chatshop-test-api.git`
```
- Create a .env file from .env.sample and enter the required values.
- Run npm install to install the dependencies.
- Run npm start to start the server.

Alternatively, you can also run the application using Docker by running `docker-compose up --build`. This will start the api services and make it available at the specified port.

## Accessing the Application
You can access the application by visiting
```
http://localhost:<<`Port`>>/graphql
```

# Available Queries

## Todos

Fetches a list of todos.

```
query {
  todos(pageSize: 10, page: 1) {
    id
    title
    completed
  }
}
```

## Post

Fetches a single post by ID.

```
query {
  post(id: 1) {
    id
    title
    body
    userId
  }
}
```

## getWeather

Fetches the weather data by zipCode.

```
query {
  getWeather(zipCode: "94040") {
    temperature
    description
  }
}
```

# Built With

- GraphQL - A query language for your API
- Apollo Server - A flexible, production-ready GraphQL server
- jsonplaceholder - A simple REST API for testing and prototyping
- OpenWeatherMap API - A Weather API for providing weather data
- and Love

# How to run tests
```
npm run test
```
