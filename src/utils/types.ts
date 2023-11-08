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
