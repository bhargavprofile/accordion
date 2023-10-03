import { useState } from 'react';
import Accordion from './Accordion';
import './App.css';
import data from './data'

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="bg">
      <div className='accordion-main-card'>
          <h4>Questions And Answers About Login</h4>
          <div>
              {
                questions.map((q)=> {
                  return <Accordion key={q.id} {...q}/>
                })
              }
          </div>
      </div>
    </div>
  );
}

export default App;
