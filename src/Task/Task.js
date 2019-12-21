import React from "react";
import Request from "../Requests";
import "./Task.css";
import LeftMenuElem from "../LeftMenuElem/LeftMenuElem";

class Task extends React.Component{
    render() {
        return(
            <div className='main--box'>
                <div className='left--navbar'>
                    <LeftMenuElem context='My Tasks' link='/tasks/my_tasks'/>
                    <LeftMenuElem context='Archive' link='/tasks/archive'/>
                </div>
            </div>
        )
    }
}

export default Task;