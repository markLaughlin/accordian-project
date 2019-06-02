import React from 'react';
import './App.css';
import Accordian from './Accordian.js';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Accordian sections={sections}/>
        </div>
      </header>
    </div>
  );
}

export default App;
