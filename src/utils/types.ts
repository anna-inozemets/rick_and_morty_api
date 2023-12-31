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
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export interface LocationQuery {
  name: string;
  type: string;
  dimension: string;
}

export interface EpisodeQuery {
  name: string;
  episodes: string;
}

export interface WordsQuery {
  query: string;
}

export interface FormState {
  isFormVisible: boolean;
  isOptionVisible: boolean;
  currentOptionsSelected: string[];
  characters: CharacterQuery;
  locations: LocationQuery;
  episodes: EpisodeQuery;
  words: WordsQuery;
  charactersIds: {
    character: number[],
    location: number[],
    episode: number[],
  };
  normalizedCharactersIds: null | number[],
  loading: boolean;
  error: boolean;
}

export interface CharactersState {
  characters: Character[];
  charactersToRender: Character[];
  count: number;
  loading: boolean;
  error: boolean;
  isSpecificCharacter: boolean;
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
}

export interface HistoryState {
  isHistoryVisible: boolean;
  history: {
    keyWords: string,
    characters: string,
    location: string,
    episode: string,
    name: string,
  }[],
}
