export const matchColorPoint = (status: string) => {
  switch (status) {
  case 'Alive':
    return '#55cc44';
  case 'Dead':
    return '#d63d2e';
  case 'unknown':
    return '#9e9e9e';
  default:
    return '#9e9e9e';
  }
};

export const wordsInput = [
  { id: 'keyQuery', key: 'query', placeholder: 'Add key words to find' }
];
export const characterInputs = [
  { id: 'characterName', key: 'name', placeholder: 'Add Character Name' },
  { id: 'characterStatus', key: 'status', placeholder: 'Add Character Status' },
  { id: 'characterSpecies', key: 'species', placeholder: 'Add Character Species' },
  { id: 'characterType', key: 'type', placeholder: 'Add Character Type' },
  { id: 'characterGender', key: 'gender', placeholder: 'Add Character gender' }
];
export const locationInputs = [
  { id: 'locationName', key: 'name', placeholder: 'Add Location Name' },
  { id: 'locationType', key: 'type', placeholder: 'Add Location Type' },
  { id: 'locationDimension', key: 'dimension', placeholder: 'Add Location Dimension' },
];
export const episodesInputs = [
  { id: 'episodesName', key: 'name', placeholder: 'Add Episode Name' },
  { id: 'episodes', key: 'episodes', placeholder: 'Add Episodes' },
];