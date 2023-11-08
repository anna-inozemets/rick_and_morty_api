import gql from 'graphql-tag';

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters(page: 1) {
      info {
        count
      }
      results {
        id
        name
        status
        species
        image
        location {
          name
        }
        episode {
          name
        }
      }
    }
  }
`;
