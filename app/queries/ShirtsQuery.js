import { gql } from 'graphql-request';

export const ShirtsQuery = gql`
  {
    shirts {
      name
      product_image {
        id
      }
    }
  }
`;
