import React from 'react';
import { FilterInputs } from '../FilterInputs';
import { wordsInput, characterInputs, locationInputs, episodesInputs } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import {
  updateCharacters,
  updateLocations,
  updateEpisodes,
  updateWords,
} from '../../features/formFilter';

export const FilterInputsGroup = () => {
  const {
    currentOptionsSelected,
    characters,
    locations,
    episodes,
    words,
  } = useSelector((state: RootState) => state.formFilter);

  return (
    <div className="filter__inputs-wrapper">
      {currentOptionsSelected.length === 0 && (
        <FilterInputs inputs={wordsInput} updateValues={updateWords} values={words} />
      )}
      {currentOptionsSelected.includes('character') && (
        <FilterInputs inputs={characterInputs} updateValues={updateCharacters} values={characters} />
      )}
      {currentOptionsSelected.includes('location') && (
        <FilterInputs inputs={locationInputs} updateValues={updateLocations} values={locations} />
      )}
      {currentOptionsSelected.includes('episode') && (
        <FilterInputs inputs={episodesInputs} updateValues={updateEpisodes} values={episodes} />
      )}
    </div>
  )
}