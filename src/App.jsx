
import './App.css'

import { useRef,useEffect,useState } from 'react'
function App() {
  const inputRef = useRef('')
  if(inputRef.current.valueOf.trim().lenght < 3){
    alert('3 ta dan kam belgi kiritilmasin')
    inputRef.current.focus()
    return;
  }

  const todo = {
    id: Date.now(),
    name:inputRef.current.value()
  }
  let data = [];
  if(localStorage.getItem('todos')){
    data = JSON.parse(localStorage.getItem('todos'));
  }

  data.push(todo)
  localStorage.setItem('todos',JSON.stringify(data))
  inputRef.current.value ='';


  return (
    <>
   <h1 className='h1'>Todo app</h1>
    <div className="todo-wrapper">
    <form onSubmit={handleSubmit}>
    <input ref={inputRef} type="text" />
   <button>OK</button>
    </form>
    <br />
    <ul>
      <li>
       
       <div>
       <input type="checkbox" />
       <span>Kitob oqish</span>
       
       </div>
        <span className='actions'>
        <span>update</span>
        <span>delete</span>

        </span>
      </li>
    </ul>
    
    </div>
    
   
    </>
  )
}

export default App
