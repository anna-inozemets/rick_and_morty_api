import React from 'react';
import { useDispatch } from 'react-redux';
import { CharacterQuery, LocationQuery, EpisodeQuery, WordsQuery } from '../../utils/types';
import './FilterInputs.scss';

type Props = {
  inputs: { id: string, key: string, placeholder: string }[];
  updateValues: any,
  values: CharacterQuery | LocationQuery | EpisodeQuery | WordsQuery,
}

export const FilterInputs: React.FC<Props> = ({ inputs, updateValues, values }) => {
  const dispatch = useDispatch();

  const handleInputValuesChanges = (
    key: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(updateValues({ ...values, [key]: event.target.value }));
  };

  return (
    <div className="filter__inputs">
      {inputs.map((input) => (
        <input
          key={input.id}
          className="filter__input"
          type="text"
          placeholder={input.placeholder}
          onChange={(event) => handleInputValuesChanges(input.key, event )}
        />
      ))}
    </div>
  )
}
