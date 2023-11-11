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
import { fetchCharacters, setCharactersToRender } from '../../features/characters';
import { MehOutlined } from '@ant-design/icons';

export const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { page } = useSelector((state: RootState) => state.pagination);
  const { characters, charactersToRender, count, loading, error } = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    if (characters.length > 20) {
      dispatch(setCharactersToRender(page));
    } else {
      dispatch(fetchCharacters(page));
    }
  }, [page, characters]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className="section section--home home">
      <div className="container">
        {characters.length !== 0 && (
          <div className="home__filter">
            <Filter />
          </div>
        )}
        <Row gutter={[35, 30]} className="home__cards">
          {characters.length === 0 ? (
            <p className="home__empty">There are no characters <span><MehOutlined /></span></p>
          ) : (
            charactersToRender.map((character: Character) => (
              <Col md={24} lg={12} key={character.id}>
                <CharacterCard character={character} addtitonalClassName={false}>{}</CharacterCard>
              </Col>
            ))
          )}
        </Row>
        {characters.length !== 0 && (
          <Pagination
            defaultCurrent={page}
            total={count}
            pageSize={20}
            onChange={(newPage) => dispatch(setPage(newPage))}
          />
        )}
      </div>
    </section>
  )
};