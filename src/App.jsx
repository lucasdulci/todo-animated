import { ToastContainer } from "react-toastify" 
import "react-toastify/dist/ReactToastify.css"
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

function App() {

  return (
    <>
      <div className=' flex items-center justify-center flex-col'>
        <TodoForm/>
        <TodoList/>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
