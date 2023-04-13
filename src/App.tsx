import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const ConnectMetamask = () => {
    console.log(`Button 1 clicked with value: ${input1}`);
  };

  const TransferButton = () => {
    console.log(`Button 2 clicked with value: ${input2}`);
  };
  return (
    <div className="App">
      <button onClick={ConnectMetamask}>Connect MetaMask</button>
      <div>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Enter Value in ETH"
        />
      </div>
      <div>
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Enter Receiver Address"
        />
      </div>{' '}
      <button onClick={TransferButton}>Tranasfer</button>
    </div>
  );
}

export default App;
