import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RootNavigation } from './navigation/Root';

function App() {
  return (
    <BrowserRouter>
      <RootNavigation />
    </BrowserRouter>
  );
}

export default App;
