import { useCallback, useEffect, useState } from 'react';
import Grn from './assets/pexels-green.jpg'
import Rd from './assets/pexels-red.jpg'
import Blu from './assets/pexels-blue.jpg'
import './App.css';
import useWebSocket, { ReadyState } from 'react-use-websocket';

function App() {

  const [texture, setTexture] = useState(false)
  const [socketUrl, setSocketUrl] = useState('https://fabricssoftware.com');
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const handleClickChangeSocketUrl = useCallback(
    () => setSocketUrl('wss://demos.kaazing.com/echo'),
    []
  );

  
  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];
  
  // const sendTexture = ({textName}) => {
  //   sendMessage(textName)
  //   setTexture(true)
  // }

  const handleClickSendMessage = useCallback((textName) => sendMessage(textName), []);

  return (

    <div className="App">
      <button onClick={handleClickSendMessage('pexels-green')} disabled={readyState !== ReadyState.OPEN}>
        <h3>
          Green
        </h3>
      </button>

        <img height={'20%'} width={'45%'} src={Grn} alt='' />
      <br/>   
        <button onClick={handleClickSendMessage('pexels-red')} disabled={readyState !== ReadyState.OPEN}>
          <h3>
          Red
        </h3>
        </button>
        <img height={'20%'} width={'45%'} src={Rd} alt='' />
        <br/>   
        <button onClick={handleClickSendMessage('pexels-blue')} disabled={readyState !== ReadyState.OPEN}>
          <h3>
            Blue
          </h3>
        </button>
        <img height={'20%'} width={'45%'} src={Blu} alt='' />
        <span>The WebSocket is currently {connectionStatus}</span>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      <ul>
        {messageHistory.map((message, idx) => (
          <span key={idx}>{message ? message.data : null}</span>
        ))}
      </ul>
    </div>
  );
}

export default App;
