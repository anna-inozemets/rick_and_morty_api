import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import './CharacterCard.scss';
import { Character } from '../../utils/types';
import { matchColorPoint } from '../../utils/helpers';

type Props = {
  character: Character,
  children: React.ReactNode,
  addtitonalClassName: boolean,
}

export const CharacterCard: React.FC<Props> = ({ character, children, addtitonalClassName }) => {
  const { id, name, species, image, location, status, episode } = character;

  const neededColor = matchColorPoint(status);

  return (
    <article className={classnames('character-card', { 'character-card--big': addtitonalClassName })}>
      <div className="character-card__photo">
        <img src={image} alt={name} />
      </div>
      <div className="character-card__text">
        <NavLink to={`/character/${id}`} className='character-card__link'>{name}</NavLink>
        <div className="character-card__status">
          <div className="character-card__point" style={{ backgroundColor: neededColor }}></div>
          <p>{status} - {species}</p>
        </div>
        <p className="character-card__subtitle">Last known location:</p>
        <p>{location.name}</p>
        <p className="character-card__subtitle">First seen in:</p>
        <p>{episode[0].name}</p>
        {children}
      </div>
    </article>
  );
}
