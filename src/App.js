import React from 'react';
import './App.css';
import Middle from './components/middle';
import Left from './components/left';
import Right from './components/right';

function App() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-2">
            <Left />
          </div>
          <div class="col-8">
            <Middle />
          </div>
          <div class="col-2">
            <Right />
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
