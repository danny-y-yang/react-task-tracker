import React, {PureComponent} from 'react';
import Button from "./Button";
import Task from "./Task"

const Tasks = (props) => {
    return (
        <div>
            {props.tasks.map((task) => (<Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle} onAdd={props.onAdd}/>))}
        </div>
    )
}

Tasks.propTypes = {};

export default Tasks;