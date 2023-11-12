import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCharactersIds,
  setNormalizedCharactersIds,
  setIsFormVisible
} from '../../features/formFilter';
import { fetchCharacersById, setCount } from '../../features/characters';
import { RootState, AppDispatch } from '../../app/store';
import classNames from 'classnames';
import { LoadingOutlined } from '@ant-design/icons';
import { areValuesEmpty } from '../../utils/helpers';
import './FilterForm.scss';
import { Error } from '../Error';
import { updateHistory } from '../../features/history';

import { FilterSelect } from '../FilterSelect';
import { FilterInputsGroup } from '../FilterInputsGroup';

import { Formik, Form } from 'formik';

export const FilterForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const {
    currentOptionsSelected,
    characters,
    locations,
    episodes,
    words,
    charactersIds,
    loading,
    error
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

  const handleClick = () => {
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
      const normalizedCominedCaractersIds = combinedCharacterIds
        .filter((id: number, index: number, arr: number[]) => {
          const firstIndex = arr.indexOf(id);

          return firstIndex === index;
        });
  
      dispatch(setNormalizedCharactersIds(normalizedCominedCaractersIds));
      dispatch(fetchCharacersById(normalizedCominedCaractersIds));
      dispatch(setIsFormVisible(false))
    }

    if (combinedCharacterIds.length === 0 && !isButtonDisabled) {
      dispatch(setIsFormVisible(false))
      dispatch(setNormalizedCharactersIds(null));
      dispatch(setCount(0))
    }
  }, [charactersIds])

  if (error) {
    return <Error />
  }

  return (
    <Formik
      initialValues={{
        query: query,
        characterName: characterName,
        characterStatus: characterStatus,
        characterSpecies: characterSpecies,
        characterType: characterStatus,
        characterGender: characterGender,
        locationName: locationName,
        locationType: locationType,
        locationDimension: locationDimension,
        episodeName: episodeName,
        episodeEpisode: episodeEpisode,
      }}
      onSubmit={handleClick}
    >
      {() => (
        <Form className="filter__form">
          <div className="filter__background"></div>
          <FilterSelect />
          <FilterInputsGroup />
          <button
            className={classNames('filter__button', { disabled: isButtonDisabled})}
            disabled={isButtonDisabled}
            type="submit"
          >
            {loading ? (<LoadingOutlined />) : ('find')}
          </button>
        </Form>
      )}
    </Formik>
  )
};
