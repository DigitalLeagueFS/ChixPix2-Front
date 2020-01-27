import React from 'react'
import './TaskInfo.css'
import ArrowIcon from '@material-ui/icons/ArrowBack';
import Request from "../../Requests";


class TaskInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            description:'',
            executor:'',
            beginning:'',
            deadline:'',
            clientInfo:{
                name:'',
                secondName:'',
                thirdName:''
            }
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.id !== prevProps.id){
            Request.get(`/tasks/${this.props.id}`)
                .then(response=>{
                    console.log(response);
                });
            this.setState({
                id:this.props.id
            })
        }
    }


    render() {
        return(
            <div className={this.props.show ? 'tasks-info-box tasks-info-box-show' : 'tasks-info-box'}>
                <button className={'back-btn'} onClick={() => {this.props.updateShowInfo(!this.props.show)}}>
                    <ArrowIcon/>
                </button>
            </div>
        )
    }
}


export default TaskInfo