export interface Character {
  id: string;
  name: string;
  status: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
  episode: {
    name: string;
  }[];
}
