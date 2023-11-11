import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setOptionVisibility,
  updateOptionsSelected,
  updateCharacters,
  updateLocations,
  updateEpisodes,
  updateWords,
  fetchCharactersIds,
  setNormalizedCharactersIds
} from '../../features/formFilter';
import { fetchCharacersById } from '../../features/characters';
import { RootState, AppDispatch } from '../../app/store';
import classNames from 'classnames';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CaretDownOutlined, LoadingOutlined } from '@ant-design/icons';
import { FilterInputs } from '../FilterInputs';
import { wordsInput, characterInputs, locationInputs, episodesInputs, areValuesEmpty } from '../../utils/helpers';
import './FilterForm.scss';
import { Error } from '../Error';
import { updateHistory } from '../../features/history';

export const FilterForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const {
    isOptionVisible,
    currentOptionsSelected,
    characters,
    locations,
    episodes,
    words,
    charactersIds,
    loading,
    error,
    normalizedCharactersIds
  } = useSelector((state: RootState) => state.formFilter);
  const { query } = words
  const {
    name: characterName,
    status: characterStatus,
    species: characterSpecies,
    type: characterType,
    gender: characterGender,
  } = characters;
  const {
    name: locationName,
    type: locationType,
    dimension: locationDimension,
  } = locations;
  const {
    name: episodeName,
    episodes: episodeEpisode,
  } = episodes;

  let normalizedCharacterName = characterName;
  let normalizedLocationName = locationName;
  let normalizedEpisodeName = episodeName;

  const handleChageSelectOption = (event: CheckboxChangeEvent, value: string) => {
    if (event.target.checked) {
      dispatch(updateOptionsSelected([...currentOptionsSelected, value]));
    } else {
      dispatch(updateOptionsSelected(currentOptionsSelected.filter(item => item !== value)));
    }
  };

  const handleOptionVisibility = () => {
    dispatch(setOptionVisibility(!isOptionVisible));
  };

  const shouldDisableButton = () => {
    const isButtonShouldBeDisabledBecauseOfCharacters = currentOptionsSelected.includes('character')
      && areValuesEmpty(characterName, characterStatus, characterSpecies, characterType, characterGender);
  
    const isButtonShouldBeDisabledBecauseOfLocation = currentOptionsSelected.includes('location')
      && areValuesEmpty(locationName, locationType, locationDimension);
  
    const isButtonShouldBeDisabledBecauseOfEpisode = currentOptionsSelected.includes('episodes')
      && areValuesEmpty(episodeName, episodeEpisode);
  
    return (
      (query.length === 0 && currentOptionsSelected.length === 0) ||
      isButtonShouldBeDisabledBecauseOfCharacters ||
      isButtonShouldBeDisabledBecauseOfLocation ||
      isButtonShouldBeDisabledBecauseOfEpisode
    );
  };

  useEffect(() => {
    setIsButtonDisabled(shouldDisableButton());
  }, [
    query,
    currentOptionsSelected,
    characterName,
    characterStatus,
    characterSpecies,
    characterType,
    characterGender,
    locationName,
    locationType,
    locationDimension,
    episodeName,
    episodeEpisode
  ]);

  useEffect(() => {
    const combinedCharacterIds = [];
  
    if (currentOptionsSelected.includes('character')) {
      combinedCharacterIds.push(...charactersIds.character);
    }
  
    if (currentOptionsSelected.includes('location')) {
      combinedCharacterIds.push(...charactersIds.location);
    }
  
    if (currentOptionsSelected.includes('episode')) {
      combinedCharacterIds.push(...charactersIds.episode);
    }
  
    if (currentOptionsSelected.length === 0) {
      combinedCharacterIds.push(...charactersIds.character, ...charactersIds.location, ...charactersIds.episode);
    }
  
    if (combinedCharacterIds.length > 0) {
      dispatch(setNormalizedCharactersIds(combinedCharacterIds));
      dispatch(fetchCharacersById(combinedCharacterIds));
    }
  }, [currentOptionsSelected, charactersIds]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (currentOptionsSelected.length === 0) {
      normalizedCharacterName = query;
      normalizedLocationName = query;
      normalizedEpisodeName = query;
    }

    dispatch(fetchCharactersIds({
      characterName: normalizedCharacterName,
      characterStatus,
      characterSpecies,
      characterType,
      characterGender,
      locationName: normalizedLocationName,
      locationType,
      locationDimension,
      episodeName: normalizedEpisodeName,
      episodeEpisode
    }));

    dispatch(updateHistory({
      keyWords: query,
      characters: [characterName, characterStatus, characterSpecies, characterType, characterGender]
        .filter((value: string) => value.length !== 0)
        .join(', '),
      location: [locationName, locationType, locationDimension]
        .filter((value: string) => value.length !== 0)
        .join(', '),
      episode: [episodeName, episodeEpisode]
        .filter((value: string) => value.length !== 0)
        .join(', '),
      name: '',
    }));
  };

  if (error) {
    return <Error />
  }

  return (
    <form action="" className="filter__form">
      <div className="filter__background"></div>
      <div className="filter__select">
        <div className="filter__select-option filter__select-option--selected" onClick={handleOptionVisibility}>
          <p>Select Item</p>
          <CaretDownOutlined />
        </div>
        <div className={classNames('filter__select-options', { visible: isOptionVisible})}>
          <div className="filter__select-option">
            <Checkbox onChange={(event) => handleChageSelectOption(event, 'character')}>Character</Checkbox>
          </div>
          <div className="filter__select-option">
            <Checkbox onChange={(event) => handleChageSelectOption(event, 'location')}>Location</Checkbox>
          </div>
          <div className="filter__select-option">
            <Checkbox onChange={(event) => handleChageSelectOption(event, 'episode')}>Episodes</Checkbox>
          </div>
        </div>
      </div>
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
      <button
        className={classNames('filter__button', { disabled: isButtonDisabled})}
        onClick={(event) => handleClick(event)}
        disabled={isButtonDisabled}
      >
        {loading ? (<LoadingOutlined />) : ('find')}
      </button>
    </form>
  )
};