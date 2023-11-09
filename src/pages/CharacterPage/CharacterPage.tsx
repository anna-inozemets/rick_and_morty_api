import React from 'react';
import { useParams } from 'react-router-dom';
import './CharacterPage.scss';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../../utils/queries';
import { Loader } from '../../components/Loader';
import { CharacterCard } from '../../components/CharacterCard';
import { Error } from '../../components/Error';

export const CharacterPage = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_CHARACTER, { variables: { id } });

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Error />
  }

  const character = data.character;
  const { name, gender, origin, episode } = character;

  return (
    <section className="section section--character character">
      <div className="container">
        <CharacterCard character={character} addtitonalClassName={true}>
          <p className="character-card__subtitle">Gender</p>
          <p>{gender}</p>
          <p className="character-card__subtitle">Other information</p>
          <p>
            {
              `${name}'s origin is ${origin.name}. It is featured in many episodes, such as
              ${episode.slice(0, 11).map((episodeItem: {name: string }) => episodeItem.name).join(', ')}.`
            }
          </p>
        </CharacterCard>
      </div>
    </section>
  )
}