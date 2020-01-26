import React from "react";
import './Tasks.css'
import {Warning} from "@material-ui/icons";


class TasksHeader extends React.Component{
    render() {
        return(
            <div className='tasks-header'>
                <h3>Name</h3>
                <h3>Executor</h3>
                <h3>Result</h3>
                <div className='tasks-header--deadline'>
                    <h3>Deadline</h3>
                    <Warning style={{color:'red',marginLeft:'5px'}}/>
                </div>
            </div>
        )
    }
}

export default TasksHeader;