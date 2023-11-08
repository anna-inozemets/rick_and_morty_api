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
        gender
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
