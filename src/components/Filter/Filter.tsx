import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../../features/formFilter';
import { FilterForm } from '../FilterForm';

import './Filter.scss';
import classNames from 'classnames';

export const Filter = () => {
  const dispatch = useDispatch();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClick = () => {
    dispatch(resetFilters());
    setIsFormVisible(prevVal => !prevVal);
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
