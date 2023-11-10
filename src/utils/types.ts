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
  charactersIds: number[];
}

export interface CharacterState {
  characters: Character[];
  count: number;
  loading: boolean;
  error: boolean;
}

export interface FilterVariables {
  characterName: string;
  characterStatus: string;
  characterSpecies: string;
  characterType: string;
  characterGender: string;
  locationName: string;
  locationType: string;
  locationDimension: string;
  episodeName: string;
  episodeEpisode: string;
};
