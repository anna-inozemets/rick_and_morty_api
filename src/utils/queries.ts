import gql from 'graphql-tag';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count,
        pages,
        next,
        prev
      }
      results {
        id
        name
        status
        species
        image
        location { name }
        episode { name }
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name,
      status,
      gender,
      species,
      image,
      origin { name },
      location { name },
      episode { name }
    }
  }
`;
