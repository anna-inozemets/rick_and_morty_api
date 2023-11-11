import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CharacterPage } from './pages/CharacterPage';
import { PageNotFound } from './pages/PageNotFound';
import { FabButton } from './components/FabButton';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { History } from './components/History';

export const App = () => {
  const { isHistoryVisible } = useSelector((state: RootState) => state.history);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/character">
            <Route index element={<CharacterPage />} />
            <Route path=":id" element={<CharacterPage />} />
          </Route>
        </Routes>
        <FabButton />
        {isHistoryVisible && (<History />)}
      </main>
      <Footer />
    </>
  );
}
