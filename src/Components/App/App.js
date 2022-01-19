import { useState, useEffect } from 'react';
import DoItem from '../DoItem/DoItem';
import DoneItem from '../DoneItem/DoneItem';
import { generateId } from '../../Utilities/Utilities';
import './App.css';

function App() {

  const [doItems, setDoItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);

  const addTask = () => {
      const newId = generateId();

      setDoItems(prevDoItems => [
          ...prevDoItems,
          {
              id: newId,
              text: ''
          }
      ]);
  };

  const deleteTask = idToDelete => {
    setDoItems(prevDoItems => prevDoItems.filter(prevDoItem => prevDoItem.id !== idToDelete));
    setDoneItems(prevDoneItems => prevDoneItems.filter(prevDoneItem => prevDoneItem.id !== idToDelete));
  };

  const completeTask = idToComplete => {
    const completedItem = doItems.find(doItem => doItem.id === idToComplete);
    
    if (completedItem.text) {
      setDoItems(prevDoItems => prevDoItems.filter(prevDoItem => prevDoItem.id !== idToComplete));
      setDoneItems(prevDoneItems => [...prevDoneItems, completedItem]);
    }
    
  };

  const updateText = (text, id) => {
    const updatedDoItems = doItems;

    for(let doItem of updatedDoItems) {
      if (doItem.id === id) doItem.text = text;
    }

    setDoItems(updatedDoItems);
  };

  useEffect(() => addTask(), []);

  return (
    <div className="App">
      <h1>To Do List</h1>
      
      <div className="content">

        <div className="items" id="do-items">
            <div className='header'>
                <h2>To Do</h2>
                <button onClick={() => addTask()}>+</button>
            </div>

            <ul>
                {doItems.map(doItem => (
                    <DoItem key={doItem.id}
                        id={doItem.id} 
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                        updateText={updateText}/>
                ))}
            </ul>
        </div>

        <div className="items" id="done-items">
            <div className='header'>
                <h2>Done</h2>
            </div>

            <ul>
              {doneItems.map(doneItem => (
                    <DoneItem key={doneItem.id}
                        id={doneItem.id}
                        text={doneItem.text} 
                        deleteTask={deleteTask}/>
              ))}
            </ul>
        </div>

      
      </div>

    </div>
  );
}

export default App;
