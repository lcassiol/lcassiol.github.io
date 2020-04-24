import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from 'react-router-dom';
import history from './services/history';

import GlobalStyle from './styles/global';
import Routes from './routes/';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
