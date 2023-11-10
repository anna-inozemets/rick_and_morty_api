import { client } from './apollo';
import { FilterVariables } from './types';
import { GET_CHARACTERS, GET_FILTRED_CHARACTERS_ID, GET_FILTERED_CHARACTERS  } from './queries';

export const fetchCharacers = async (page: number) => {
  try {
    const result = await client.query({
      query: GET_CHARACTERS,
      variables: { page },
    });

    return result.data.characters;
  } catch (error) {
    return;
  }
};

export const fetchCharacersIds = async (variables: FilterVariables) => {
  try {
    const result = await client.query({
      query: GET_FILTRED_CHARACTERS_ID,
      variables,
    });

    const characterIds = result.data?.characters?.results
      .map((character: any) => character.id)
      .filter((item:number | undefined) => {
        if (item) {
          return item
        }

        return;
      })
    const locationIds = result.data?.locations?.results
      .map((location: any) => location.residents.id)
      .filter((item:number | undefined) => {
        if (item) {
          return item
        }

        return;
      })
    const episodeIds = result.data?.episodes?.results
      .map((episode: any) => episode.characters.id)
      .filter((item:number | undefined) => {
        if (item) {
          return item
        }

        return;
      })

    const allIds = [ ...characterIds, ...locationIds, ...episodeIds ];

    return allIds;
  } catch (error) {
    console.error(error)
  }
};

export const fetchCharacersById = async (ids: number[]) => {
  try {
    const result = await client.query({
      query: GET_FILTERED_CHARACTERS,
      variables: { ids },
    });

    return result.data.charactersByIds;
  } catch (error) {
    console.error(error);
  }
}
