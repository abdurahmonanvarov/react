import './App.css';
import { useState } from 'react';

function App() {
  const [name, changeName] = useState('Gulzira')
  const [event, setEvents] = useState([
    {title: "Solo va Gulzira", id: 1},
    {title: "Solo va Anora", id: 2},
    {title: "Solo va Mubins", id: 3},
  ])

  const button = () => {
    changeName('Anora')
    
  } 
  return (
    <div className="App">
        <h1>My love : {name}</h1>
        <button onClick={button}>Change name</button>
        {event.map((event) => {
          return (
            <div key={event.id}>
              <h1>{event.title}</h1>
            </div>
          )
        })}
    </div>
  );
}

export default App;
