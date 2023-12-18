import React, { useState } from 'react';

import './App.css'; // Importe o arquivo de estilo
import Home from './home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <section className='body'>
      <div className='central'>
        <Home /> 
      </div>
    </section>
     
     
    </>
  );
}

export default App;
