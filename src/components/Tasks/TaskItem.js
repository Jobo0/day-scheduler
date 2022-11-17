import React from "react";

function TaskItem (props) { 
    return <div>
        <span>
            {props.name}
        </span>
        <span>
            {props.description}
        </span>
        <span>
            {props.time}
        </span>
    </div>
}

export default TaskItem;