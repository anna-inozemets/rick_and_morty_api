import gql from 'graphql-tag';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count,
        pages,
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

export const GET_FILTRED_CHARACTERS_ID = gql`
  query GetFiltredCharactersId(
    $characterName: String,
    $characterStatus: String,
    $characterSpecies: String,
    $characterType: String,
    $characterGender: String,
    $locationName: String,
    $locationType: String,
    $locationDimension: String,
    $episodeName: String,
    $episodeEpisode: String
  )
  {
    characters(
      filter: {
        name: $characterName,
        status: $characterStatus,
        species: $characterSpecies,
        type: $characterType,
        gender: $characterGender,
      }
    ) {
        results {
          id
        }
    }
    locations(
      filter: { 
        name: $locationName,
        type: $locationType,
        dimension: $locationDimension 
      }
    ) {
      results {
        residents { id }
      }
    }
    episodes(
      filter: {
        name: $episodeName,
        episode: $episodeEpisode,
      }
    ) {
      results {
        characters { id }
      }
    }
  }
`;

export const GET_FILTERED_CHARACTERS = gql`
  query GetFiltredCharacters($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      status
      species
      image
      location { name }
      episode { name }
    }
  }
`;
