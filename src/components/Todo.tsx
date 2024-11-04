import { Button } from "@mui/material"
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export const Todo = ({id, task, isCompleted, changeStatus} : {id:string, task : string, isCompleted: boolean, changeStatus: (id: string)=> void}) => {
  return (
    <div><Button className={isCompleted ? "task completed" : "task"} startIcon={isCompleted ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />} size="large" fullWidth={true} style={{ justifyContent: 'start' }} onClick={() => changeStatus(id)}>{task}</Button></div>
  )
}
