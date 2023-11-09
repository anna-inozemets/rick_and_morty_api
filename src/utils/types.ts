export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
  location: {
    name: string;
  };
  episode: {
    name: string;
  }[];
}

export interface CharacterQuery {
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
}

export interface LocationQuery {
  name: string,
  type: string,
  dimension: string,
}

export interface EpisodeQuery {
  name: string,
  episodes: string,
}

export interface WordsQuery {
  query: string,
}

export interface FormState {
  isOptionVisible: boolean;
  currentOptionsSelected: string[];
  characters: CharacterQuery;
  locations: LocationQuery;
  episodes: EpisodeQuery;
  words: WordsQuery;
}
