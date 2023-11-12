import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOptionVisibility, updateOptionsSelected } from '../../features/formFilter';
import { RootState } from '../../app/store';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CaretDownOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import './FilterSelect.scss';

export const FilterSelect = () => {
  const dispatch = useDispatch();
  const { isOptionVisible, currentOptionsSelected } = useSelector((state: RootState) => state.formFilter);

  const handleChangeSelectOption = (event: CheckboxChangeEvent, value: string) => {
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
    <div className="filter__select">
      <div className="filter__select-option filter__select-option--selected" onClick={handleOptionVisibility}>
        <p>Select Item</p>
        <CaretDownOutlined />
      </div>
      <div className={classNames('filter__select-options', { visible: isOptionVisible})}>
        <div className="filter__select-option">
          <Checkbox onChange={(event) => handleChangeSelectOption(event, 'character')}>Character</Checkbox>
        </div>
        <div className="filter__select-option">
          <Checkbox onChange={(event) => handleChangeSelectOption(event, 'location')}>Location</Checkbox>
        </div>
        <div className="filter__select-option">
          <Checkbox onChange={(event) => handleChangeSelectOption(event, 'episode')}>Episodes</Checkbox>
        </div>
      </div>
    </div>
  )
}
