import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [message, setMessage] = useState("");
  
  const handleMessage = (e) => {
    e.preventDefault();
    console.log(todo);
    let item = { message, isComplete : false } ;
    setTodo(prevTodo => [item, ...prevTodo]);
    setMessage("");
  }
  const handleTodo = (e) => {
    setMessage(e.target.value)
  }
  const onComplete = (e, id) => {
    let thisTodo = [...todo];
    thisTodo[id].isComplete = true;
    setTodo(thisTodo);
  }
  const unComplete = (e, id) => {
    let thisTodo = [...todo];
    thisTodo[id].isComplete = false;
    setTodo(thisTodo);
  }
  const destroy = (e, id) => {
    let thisTodo = [...todo];
    thisTodo.splice(id, 1);
    setTodo(thisTodo);

  }
  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid m-5">
        <h1 className="display-5">Todo App!</h1>
        <p>Enter your items to do here</p>
        <p className="lead">
        <form onSubmit={(e) => handleMessage(e)}>
          <input
            type="text"
            value={message} 
            onChange={(e) => handleTodo(e)}
          >
          </input>
        </form>
        </p>
        <p>Total things done: {" "} 
          {
            
          todo.reduce((total, currentValue) => {
            if (currentValue.isComplete) {
              return total + 1
            }
            else {
            return total;
            }
          },0
            )}
               </p>
      </div>
      <div className="m-3 flex-column">
        {/* <form onSubmit={(e) => handleMessage(e)}>
          <input
            type="text"
            value={message} 
            onChange={(e) => handleTodo(e)}
          >
          </input>
        </form> */}
      </div>
      <div className="d-flex flex-row justify-content-center">
        <div className="flex-column">
            {todo.map((item, i) =>  
              <div
                className="text-left"
                key={i}
              >
                <button
                  onClick={(e) => destroy(e, i)}
                  className="ml-4 m-2 btn btn-sm btn-outline-danger">&#x2717;
                </button>
              {
                item.isComplete ?
                  <button
                    onClick={(e) => unComplete(e, i)}
                    className="text-left m-2 btn btn-sm btn-outline-warning">&#x2605;
                  </button>
                  :
                  <button
                    onClick={(e) => onComplete(e, i)}
                    className="text-left m-2 btn btn-sm btn-outline-primary">&#9711;</button>
                }
                {
                  item.isComplete ?
                    <span style={{
                      borderBottom: "1px solid gray",
                      borderRadius: "25px",
                      opacity: ".5"
                    }} className="ml-3 p-2">{item.message}</span>
                    : 
                  <span style={{
                    borderBottom: "1px solid gray",
                    
                    borderRadius: "25px",
                  }} className="ml-3 p-2">{item.message}</span> 

                }
              </div>
            )}
          </div>
        </div>
      </div>
  );
}

export default App;
