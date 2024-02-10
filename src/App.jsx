
import './App.css'


function App() {
  
  return (
    <>
   <h1 className='h1'>Todo app</h1>
    <div className="todo-wrapper">
    <form>
    <input type="text" />
   <button>OK</button>
    </form>
    <br />
    <ul>
      <li>
        <input type="text" />
        <span>Kitob oqish</span>
        <span>
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
