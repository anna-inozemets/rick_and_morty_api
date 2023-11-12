import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../../utils/queries';
import { useDispatch } from 'react-redux';
import { updateHistory } from '../../features/history';
import { setIsSpecificCharacter } from '../../features/characters';
import { Loader } from '../../components/Loader';
import { CharacterCard } from '../../components/CharacterCard';
import { Error } from '../../components/Error';
import './CharacterPage.scss';

export const CharacterPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(setIsSpecificCharacter(true));
  }, [])

  const { loading, error, data } = useQuery(GET_CHARACTER, { variables: { id } });

  useEffect(() => {
    if (!loading && !error && data) {
      const character = data.character;
      const { name } = character;

      if (name) {
        dispatch(updateHistory({
          keyWords: '',
          characters: '',
          location: '',
          episode: '',
          name,
        }));
      }
    }
  }, [loading, error, data, dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
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
            {`${name}'s origin is ${origin.name}. It is featured in many episodes, such as
              ${episode.slice(0, 11).map((episodeItem: any) => episodeItem.name).join(', ')}.`}
          </p>
        </CharacterCard>
      </div>
    </section>
  );
}
