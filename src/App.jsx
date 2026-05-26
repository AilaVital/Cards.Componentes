import React from 'react';
import './App.css';
import Jogador1 from './Jogador1';
import Jogador2 from './Jogador2';

function App() {
  return (
    <div className="time-container">
      {/* Chamando os componentes manualmente */}
      <Jogador1 />
      <Jogador2 />
      
  
    </div>
  );
}

export default App;