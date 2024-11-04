import { Button, TextField } from "@mui/material"
import { ChangeEvent } from "react"

type Props = {
    newTask: string,
    onNewTaskChange: (e: ChangeEvent<HTMLInputElement>) => void,
    addNewTask: () => void
}

export const AddNewTask = ({
    newTask,
    onNewTaskChange,
    addNewTask
}: Props) => {
    return (
        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
            <TextField size='small' value={newTask} onChange={onNewTaskChange} />
            <Button variant='contained' style={{ marginLeft: '12px' }} onClick={addNewTask}>Add</Button>
        </div>
    )
}
