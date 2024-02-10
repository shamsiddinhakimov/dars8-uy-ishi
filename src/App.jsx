
import './App.css'

import { useRef,useEffect,useState } from 'react'


function App() {
  let inputRef = useRef('');
  const [dataLocal,setDataLocal] = useState([]);
  useEffect(()=>{
    let data = [];
    if(localStorage.getItem('todos')){
      data = JSON.parse(localStorage.getItem('todos'))
    }

    setDataLocal(data);
  },[]);

  if(inputRef.current.value.trim().length < 3){
    alert('3 ta dan kam belgi kiritilmasin');
    inputRef.current.focus();
    return;
  };

  const todo = {
    id: Date.now(),
    name:inputRef.current.value()
  }
  dataLocal.push(todo)
  setDataLocal(dataLocal)

  data.push(todo)
  localStorage.setItem('todos',JSON.stringify(dataLocal))
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
      {dataLocal.map((todo,index)=>{
        return(
          <li key={index}>
       
          <div>
          <input type="checkbox" />
          <span>{todo.name}</span>
          
          </div>
           <span className='actions'>
           <span>update</span>
           <span>delete</span>
   
           </span>
         </li>
        )
      })}
    </ul>
    
    </div>
    
   
    </>
  )
}

export default App
