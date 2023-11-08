import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CharacterPage } from './pages/CharacterPage';
import { PageNotFound } from './pages/PageNotFound';


function App() {
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
      </main>
      <Footer />
    </>
  );
}

export default App;
