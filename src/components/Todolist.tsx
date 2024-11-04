import { Todo } from './Todo'
import { TodoType } from '../App'

export const Todolist = ({todoList, changeStatus} : {todoList: TodoType[], changeStatus: (id: string) => void}) => {
    return (
        <div>
            {todoList.map((item) => <Todo key={item.id} id={item.id} task={item.task} isCompleted={item.isCompleted} changeStatus={changeStatus} />)}
        </div>
    )
}
