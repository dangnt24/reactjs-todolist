import { ChangeEvent, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AddNewTask } from './components/AddNewTask';
import { Todolist } from './components/Todolist';
export type TodoType = {id: string, task: string, isCompleted: false}

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('todoList') ?? '[]');
    if (savedTodoList?.length) {
      return savedTodoList;
    }

    return [];
  });
  const [newTask, setNewTask] = useState<string>('');

  const onNewTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  }

  const addNewTask = () => {
    const newTodoList: TodoType = {
      id: uuidv4(),
      task: newTask,
      isCompleted: false
    }

    setTodoList([newTodoList, ...todoList]);
    setNewTask('');
  }

  const changeStatus = (id: string) => {
    setTodoList((prevState) => {
      return prevState.map((item) => {
        if (item.id == id) {
          return {...item, isCompleted: !item.isCompleted};
        }
        return item;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList))
  }, [todoList]);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>TO DO LIST</h1>
      <AddNewTask newTask={newTask} onNewTaskChange={onNewTaskChange} addNewTask={addNewTask} />
      <Todolist todoList={todoList} changeStatus={changeStatus} />
    </>
  )
}

export default App
