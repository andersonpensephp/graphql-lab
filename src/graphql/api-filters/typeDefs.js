import { gql } from "apollo-server";

export const apiFiltersTypeDefs = gql`
  input apiFiltersInput {
    _sort: String
    _order: String
    _start: Int
    _limit: Int
  }
`;
