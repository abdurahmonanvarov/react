import './App.css';
import { Children, useState } from 'react';
import Title from './component/title';
import Modal from './component/Modal';
import Eavent from './component/Eavent';
import Regst from './component/Regst';

function App() {
  const [name, changeName] = useState('Otabek')
  const [show, showContent] = useState(true)
  const [showModal, setShowModalClose] = useState(false)
  const [event, setEvents] = useState([
    { title: "Solo va solo4", id: 1 },
    { title: "Solo va soplo3", id: 2 },
    { title: "Solo va solo2", id: 3 },
  ])

  const button = () => {
    changeName('Abdurahmon')

  }
  const closeModal = () =>{
    setShowModalClose(false)
  }

  const deletButton = (id) => {
    setEvents((hodsa) => {
      {
        return hodsa.filter((event) => {
          return event.id !== id
        })
      }
    })
  }
  return (
    <div className="App">
      <Title title="solo offical mana sanga olam olam gul" subtitle="React amalyot" />
      <h1>My Name : {name}</h1>
      {name && <button onClick={button}>Change name</button>}
      {!name && <button onClick={() => {name("Otabek")}}></button>}
      <br />
      <br />
      <br />
      {show && <button onClick={() => showContent(false)}>HIdden content</button>}
      {!show && <button onClick={() => showContent(true)}>Show content</button>}
      {show && <Eavent event={event} deletButton={deletButton}/>}
        { showModal &&
          <Modal closeModal={closeModal}>
          <Regst/>
        </Modal>
        }
       {!showModal && <button onClick={() => setShowModalClose(true)}>New event</button> }
    </div>
  );
}

export default App;
