import React from "react";
import "./Tasks.css";
import TaskElem from "./TaskElem/TaskElem";
import TasksHeader from "./TasksHeader";
import Request from "../Requests";


class Tasks extends React.Component{
    componentDidMount() {
        Request.get('/tasks')
            .then(response=>{
                console.log(response)
            })
    }

    render() {
        return(
            <div className='tasks-box'>
                <TasksHeader/>
                <TaskElem/>
                <TaskElem/>
                <TaskElem/>
                <TaskElem/>
                <TaskElem/>
            </div>
        )
    }
}

export default Tasks;