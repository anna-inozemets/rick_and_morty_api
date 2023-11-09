import React from 'react';
import './HomePage.scss';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../features/pagination';
import { RootState } from '../../app/store';
import { GET_CHARACTERS } from '../../utils/queries';
import { Pagination, Row, Col } from 'antd';
import { CharacterCard } from '../../components/CharacterCard';
import { Character } from '../../utils/types';
import { Loader } from '../../components/Loader';
import { Error } from '../../components/Error';
import { Filter } from '../../components/Filter';

export const HomePage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.pagination.page);

  const { loading, error, data } = useQuery(GET_CHARACTERS, { variables: { page } });

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Error />
  }

  const info = data.characters.info;
  const characters = data.characters.results;
  const pagesCount = Math.ceil(info.count / 20);

  return (
    <section className="section section--home home">
      <div className="container">
        <div className="home__filter">
          <Filter />
        </div>
        <Row gutter={[35, 30]} className="home__cards">
          {characters.map((character: Character) => (
            <Col xs={24} sm={12} key={character.id}>
              <CharacterCard character={character} addtitonalClassName={false}>{}</CharacterCard>
            </Col>
          ))}
        </Row>

        <Pagination
          defaultCurrent={page}
          total={info.count}
          pageSize={20}
          onChange={(newPage) => dispatch(setPage(newPage))}
        />
      </div>
    </section>
  )
};