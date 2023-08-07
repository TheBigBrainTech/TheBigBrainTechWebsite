import React from 'react';
import { HashRouter } from 'react-router-dom';
import Root from './routes';

const App = () => {
  return (
    <HashRouter>
      <Root />
    </HashRouter>
  );
};

export default App;
