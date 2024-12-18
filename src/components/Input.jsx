import './css/input.css'
const Input = ({ setToDo, toDo, setToDos, toDos }) => {


    //sweet alert 

    const blankSumbit = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            title: "Please enter any task"
        });
    }

    // Add new Task 

    const addTodos = () => {

        if (toDo.trim()) {
            setToDos([...toDos, { id: Date.now(), text: toDo, isComplete: false, edit: false }])
            setToDo('')
        }
        else {
            blankSumbit()
        }

    }


    return (

        <div className="todo-container">

            <div className="todo-header">

                <input type="text" name='task' id="todoInput" placeholder="Enter a new todo" value={toDo} onChange={(e) => setToDo(e.target.value)} />
                <button id="addTodo" onClick={addTodos}>Add</button>

            </div>

        </div>




    )
}

export default Input