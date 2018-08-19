import ApolloClient from "apollo-boost";

const HOST = process.env.REACT_APP_BACKEND_HOST;

const client = new ApolloClient({
  uri: `http://${HOST}:4000/`
});

export default client;
