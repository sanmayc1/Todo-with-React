import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input.jsx';
import TodoList from './components/TodoList.jsx';
import Header from './components/Header.jsx';

function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const storeData =  JSON.parse(localStorage.getItem("todos"));

  useEffect(()=>{
        setToDos(storeData ?? [])
  },[])

  useEffect(()=>{
    
     localStorage.setItem("todos",JSON.stringify(toDos));

  },[toDos]);

  return (
    <>
      <Header/>
      <Input setToDo={setToDo} toDo={toDo} setToDos={setToDos} toDos={toDos} />
      <TodoList toDos={toDos} setToDos={setToDos} />
    </>
  )
}

export default App
