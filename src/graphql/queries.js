import { GraphQLClient } from "graphql-request";
import gql from "graphql-tag";

export const client = new GraphQLClient("https://api.spacex.land/graphql/");

export const QUERY_LIST_OF_SHIPS = gql`
  {
    ships {
      name
      id
      home_port
      image
    }
  }
`;

export const QUERY_SHIP_DETAIL = gql`
  query Ship($id: ID!) {
    ship(id: $id) {
      name
      active
      image
      type
      attempted_landings
      successful_landings
      year_built
      model
    }
  }
`;
