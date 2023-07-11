import { useCallback, useEffect, useState } from 'react';
import Grn from './assets/pexels-green.jpg'
import Rd from './assets/pexels-red.jpg'
import Blu from './assets/pexels-blue.jpg'
import './App.css';
import io from "socket.io-client";

function App() {

  const [texture, setTexture] = useState(false)
  const [message, setMessage] = useState("");
  
  const [messageReceived, setMessageReceived] = useState("");

  const socket = io.connect("https://fabricssoftware.com");

  const sendMessage = (evtName) => {
    socket.emit(evtName, { evtName });
  };

  useEffect(() => {
    socket.on("pexels-blue", (data) => {
      setMessageReceived(data);
    });
  }, [socket]);

  


  return (

    <div className="App">
      <button onClick={sendMessage('pexels-green')} >
        <h3>
          Green
        </h3>
      </button>

        <img height={'20%'} width={'45%'} src={Grn} alt='' />
      <br/>   
        <button onClick={sendMessage('pexels-red')} >
          <h3>
          Red
        </h3>
        </button>
        <img height={'20%'} width={'45%'} src={Rd} alt='' />
        <br/>   
        <button onClick={sendMessage('pexels-blue')} >
          <h3>
            Blue
          </h3>
        </button>
        <img height={'20%'} width={'45%'} src={Blu} alt='' />
      <h1> Message:</h1>
      {messageReceived}
      <ul>

      </ul>
    </div>
  );
}

export default App;
