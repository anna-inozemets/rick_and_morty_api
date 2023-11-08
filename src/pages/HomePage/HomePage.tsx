import React from 'react';
import './HomePage.scss';
import { useQuery } from '@apollo/client';
import { client } from '../../utils/apollo';
import { GET_CHARACTERS } from '../../utils/queries';
import { Pagination, Row, Col } from 'antd';
import { CharacterCard } from '../../components/CharacterCard';
import { Character } from '../../utils/types';

export const HomePage = () => {

  const { loading, error, data } = useQuery(GET_CHARACTERS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const characters = data.characters.results;

  console.log(characters);

  return (
    <section className="section section--home home">
      <div className="container">
        <div className="home__filter">

        </div>
        <Row gutter={[35, 30]} className="home__cards">
          {characters.map((character: Character) => (
            <Col xs={24} sm={12} key={character.id}>
              <CharacterCard character={character}/>
            </Col>
          ))}
        </Row>

        <Pagination defaultCurrent={1} total={50} />
      </div>
    </section>
  )
};