import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../../features/formFilter';
import { FilterForm } from '../FilterForm';
import { AppDispatch } from '../../app/store';

import './Filter.scss';
import classNames from 'classnames';
import { fetchCharacters } from '../../features/characters';

export const Filter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClick = () => {
    setIsFormVisible(prevVal => !prevVal);

    dispatch(resetFilters());
    // dispatch(fetchCharacters(1));
  }

  return (
    <div className={classNames('filter', { 'filter--with-form': isFormVisible})}>
      <button type="button" className="filter__button" onClick={handleClick}>
        {isFormVisible ? ('Remove Filter') : ('Filter')}
      </button>
      {isFormVisible && (<FilterForm />)}

    </div>
  )
}
