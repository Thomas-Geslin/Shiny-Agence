import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from './utils/style/GlobalStyle';

import Header from './components/Header';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Result from './pages/Result';
import Freelances from './pages/Freelances';
import Freelance from './pages/Freelance';
import Error from './pages/Error';
import Footer from './components/Footer';

import './sass/css/style.css';

import { ThemeProvider, SurveyProvider } from './utils/context/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
    <SurveyProvider>
      <GlobalStyle />

        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/survey/:questionNumber' element={<Survey />}></Route>
          <Route path='/freelances' element={<Freelances />}></Route>
          <Route path='/result' element={<Result />}></Route>
          <Route path='/freelances/:freelanceId' element={<Freelance />}></Route>

          <Route path='*' element={<Error />}></Route>
        </Routes>
      
        <Footer />
        
    </SurveyProvider>
    </ThemeProvider>
  </BrowserRouter>
);