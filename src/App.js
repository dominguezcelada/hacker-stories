import React from 'react';

import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Vue',
    url: 'https://vuejs.org/',
    author: 'Evan You',
    num_comments: 3,
    points: 4,
    objectID: 1,
  },
  {
    title: 'Svelte',
    url: 'https://svelte.dev/',
    author: 'Rich Harris',
    num_comments: 3,
    points: 4,
    objectID: 2,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
];

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      <List/>
    </div>
  );
}

function List() {
  return (<div>
    { list.map(item => <div>{item.title}</div>) }
  </div>
  );
}

export default App;
