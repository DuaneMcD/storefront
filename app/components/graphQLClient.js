import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL;

const graphQLClient = new GraphQLClient(endpoint);
graphQLClient.setHeader('Content-Type', 'application/json');

export default graphQLClient;
