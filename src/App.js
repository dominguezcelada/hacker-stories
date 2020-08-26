import React from 'react';

import './App.css';

const messages = [
  'amo',
  'niño',
  '!!!'
]

function App() {
  return (
    <div>
      <h1>
        {messages.join(' ')}
      </h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
