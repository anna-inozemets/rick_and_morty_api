import React from 'react';
import { NavLink } from 'react-router-dom'
import './CharacterCard.scss';
import { Character } from '../../utils/types';
import { matchColorPoint } from '../../utils/helpers';

type Props = {
  character: Character,
}

export const CharacterCard: React.FC<Props> = ({ character }) => {
  const { id, name, gender, image, location, status, episode } = character;

  const neededColor = matchColorPoint(status);

  return (
    <article className="character-card">
      <div className="character-card__photo">
        <img src={image} alt={name} />
      </div>
      <div className="character-card__text">
        <NavLink to={`/character/${id}`} className='character-card__link'>{name}</NavLink>
        <div className="character-card__status">
          <div className="character-card__point" style={{ backgroundColor: neededColor }}></div>
          <p>{status} - {gender}</p>
        </div>
        <p className="character-card__subtitle">Last known location:</p>
        <p>{location.name}</p>
        <p className="character-card__subtitle">First seen in:</p>
        <p>{episode[0].name}</p>
      </div>
    </article>
  );
}
