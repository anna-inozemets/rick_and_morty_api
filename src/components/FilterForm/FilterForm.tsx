import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setOptionVisibility,
  updateOptionsSelected,
  updateCharacters,
  updateLocations,
  updateEpisodes,
  updateWords,
} from '../../features/formFilter';
import { RootState } from '../../app/store';
import classNames from 'classnames';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CaretDownOutlined } from '@ant-design/icons';
import { FilterInputs } from '../FilterInputs';
import { wordsInput, characterInputs, locationInputs, episodesInputs } from '../../utils/helpers';
import './FilterForm.scss';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const {
    isOptionVisible,
    currentOptionsSelected,
    characters,
    locations,
    episodes,
    words,
  } = useSelector((state: RootState) => state.formFilter);

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
            <Checkbox onChange={(event) => handleChageSelectOption(event, 'episodes')}>Episodes</Checkbox>
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
        {currentOptionsSelected.includes('episodes') && (
          <FilterInputs inputs={episodesInputs} updateValues={updateEpisodes} values={episodes} />
        )}
      </div>
      <button className="filter__button">
        find
      </button>
    </form>
  )
};