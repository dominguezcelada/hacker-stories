import React from 'react';

const goatList = [
  {
    name: 'Michael Jordan',
    url: 'https://www.basketball-reference.com/players/j/jordami01.html',
    Position: 'Small Forward',
    College: 'UNC',
    id: 0,
  },
  {
    name: 'Kobe Bryant',
    url: 'https://www.basketball-reference.com/players/b/bryanko01.html',
    Position: 'Small Forward',
    College: 'Lower Merion High School',
    id: 1,
  },
  {
    name: 'Kevin Durant',
    url: 'https://www.basketball-reference.com/players/d/duranke01.html',
    Position: 'Power Forward',
    College: 'Texas',
    id: 2,
  },
  {
    name: 'Lebron James',
    url: 'https://www.basketball-reference.com/players/j/jamesle01.html',
    Position: 'Power Forward',
    College: 'St.Vincent-St. Mary',
    id: 3,
  },
];

function App() {
  return (
    <div>
      <h1>NBA GOAT RACE</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      { goatList.map(player => {
        return <div key={player.id}>
          <span>{player.name}</span>
          <span>{player.Position}</span>
          <span>{player.College}</span>
          <span><a href={player.url}>STATS</a></span>
        </div>
      })}
    </div>
  );
}

export default App;