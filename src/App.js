import Grn from './assets/annie-green.jpg'
import Rd from './assets/annie-red.jpg'
import Blu from './assets/pexels-blue.jpg'
import './App.css';
import { useState } from 'react';

function App() {

  const [texture, setTexture] = useState('')

  return (

    <div className="App">
      <button onClick={() => setTexture('annie-green')}>
        <h3>
          Green
        </h3>
      </button>

        <img height={'20%'} width={'45%'} src={Grn} alt='' />
      <br/>   
        <button onClick={() => setTexture('annie-red')}>
          <h3>
          Red
        </h3>
        </button>
        <img height={'20%'} width={'45%'} src={Rd} alt='' />
        <br/>   
        <button onClick={() => setTexture('annie-blue')}>
          <h3>
            Blue
          </h3>
        </button>
        <img height={'20%'} width={'45%'} src={Blu} alt='' />

    </div>
  );
}

export default App;
