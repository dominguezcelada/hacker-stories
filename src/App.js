import React from 'react';

import './App.css';

const getTitle = (title) => title;

function App() {
  return (
    <div>
      <h1>
        {getTitle('Amo niño')}
      </h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
