import './css/todolist.css'
import { useState } from 'react'

const TodoList = ({ toDos, setToDos }) => {

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('')

    // Task Marked as Completed
    const taskDone = (id) => setToDos(toDos.map((todo) => todo.id === id ? {...todo, isComplete : true} : todo ))

    //Delete todos
    const deleteTask = (id) => setToDos(toDos.filter((todo) => todo.id !== id));

    //Edit todos
    const editTodo = (id, text) => {
        setEditId(id)
        setEditText(text)
    }

    //Saving edit
    const saveEdit = (id) => {
        if(editText.trim()) setToDos(toDos.map((todo) => todo.id === id ? { ...todo, text: editText } : todo));
        setEditText('')
        setEditId(null)
    }

    return (


        <ul className="todo-lists">

            <div className='taskHead'><h2 className='listhead'>Tasks</h2></div>

            {toDos.length > 0 ? (toDos.map((todo) => {

                return (

                    <li className={
                        todo.isComplete ?
                        'complete-Task'
                        : 'todo-item'
                    }
                    key={todo.id}
                    >
                        {

                        todo.id === editId 
                        ? (<><input type="text" name='task' className='edit-Input' value={editText} onChange={(e) => setEditText(e.target.value)} /> <span> <i className="bi bi-save save" onClick={() => saveEdit(todo.id)}></i> <i className="bi bi-trash delete" onClick={() => deleteTask(todo.id)} ></i> </span>  </>) 

                        : todo.isComplete 
                        ? (<> <s>{todo.text}</s> <i className="bi bi-trash delete" onClick={() => deleteTask(todo.id)} ></i></>  ) 
                        : (<> <span onClick={() => editTodo(todo.id, todo.text)}>{todo.text}</span> <span> <i className="bi bi-check-circle complete" onClick={() => taskDone(todo.id)}></i> <i className="bi bi-trash delete" onClick={() => deleteTask(todo.id)} ></i> </span> </>)

                        }
                        

                    </li>
                )

            })
            ) : (<p>No Task</p>)

            }

        </ul>
    )



}

export default TodoList