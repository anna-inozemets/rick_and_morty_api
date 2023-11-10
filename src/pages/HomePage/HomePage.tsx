import React, { useEffect } from 'react';
import './HomePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../features/pagination';
import { AppDispatch, RootState } from '../../app/store';
import { Pagination, Row, Col } from 'antd';
import { CharacterCard } from '../../components/CharacterCard';
import { Character } from '../../utils/types';
import { Loader } from '../../components/Loader';
import { Error } from '../../components/Error';
import { Filter } from '../../components/Filter';
import { fetchCharacters } from '../../features/characters';

export const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { page } = useSelector((state: RootState) => state.pagination);
  const { characters, count, loading, error } = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, [page]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

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
          total={count}
          pageSize={20}
          onChange={(newPage) => dispatch(setPage(newPage))}
        />
      </div>
    </section>
  )
};