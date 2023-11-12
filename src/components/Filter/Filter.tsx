import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilters, setIsFormVisible } from '../../features/formFilter';
import { FilterForm } from '../FilterForm';
import { AppDispatch, RootState } from '../../app/store';

import './Filter.scss';
import classNames from 'classnames';
import { fetchCharacters } from '../../features/characters';
import { setPage } from '../../features/pagination';

export const Filter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    isFormVisible, currentOptionsSelected, words } = useSelector((state: RootState) => state.formFilter);

  const handleClick = () => {
    dispatch(setIsFormVisible(!isFormVisible))

    if (currentOptionsSelected.length > 0 || words.query) {
      dispatch(setIsFormVisible(false))
      dispatch(resetFilters());
      dispatch(fetchCharacters(1));
      dispatch(setPage(1));
    }
  }

  return (
    <div className={classNames('filter', { 'filter--with-form': isFormVisible})}>
      <button type="button" className="filter__button" onClick={handleClick}>
        {(currentOptionsSelected.length > 0 || words.query) ? ('Remove Filter') : ('Filter')}
      </button>
      {isFormVisible && (<FilterForm />)}
    </div>
  )
}
