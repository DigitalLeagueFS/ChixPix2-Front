import React from 'react'
import './TaskInfo.css'
import ArrowIcon from '@material-ui/icons/ArrowBack';
import Request from "../../Requests";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {mapStateToProps,mapDispatchToProps} from "./indexTasksInfo";
import {connect} from 'react-redux'

class TaskInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            description:'',
            executor:{
                name:'',
                secondName:'',
                thirdName:''
            },
            beginning:'',
            deadline:'',
            clientInfo:{
                name:'',
                secondName:'',
                thirdName:''
            },
            status:'',
            disabledTask:false,
            disabled:false
        };
    }

    clearState() {
        this.setState({
            id:'',
            name:'',
            description:'',
            executor:{
                name:'',
                secondName:'',
                thirdName:''
            },
            beginning:'',
            deadline:'',
            clientInfo:{
                name:'',
                secondName:'',
                thirdName:''
            },
            status:'',
            disabled:false
        })
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps){
            if(this.props.show){
                Request.get(`/tasks/${this.props.id}`)
                    .then(response=>{
                        if(response){
                            this.setState({
                                id:this.props.id,
                                name:response.data.name,
                                description:response.data.description,
                                beginning:response.data.beginning,
                                deadline:response.data.deadline,
                                status:response.data.result_description,
                                executor:{
                                    name:response.data.user_firstname,
                                    surname:response.data.user_secondname,
                                    thirdName:response.data.user_thirdname
                                },
                                clientInfo:{
                                    name:response.data.client_name,
                                    surname:response.data.client_surname,
                                    thirdName:response.data.client_thirdname
                                },
                                disabled:!!response.data.user_firstname,
                                disabledTask:!!response.data.user_firstname
                            })
                        }
                    });
            }
        }
    }

    contentInfo = (text,someProps)=>{
      switch (text) {
          case 'exe':
              return (
                  <div className='tasks-content-elem' style={{marginTop:'50px'}}>
                      <p>Executor: {this.state.executor.surname} {this.state.executor.name} {this.state.executor.thirdName}</p>
                  </div>
              );
          case 'client':
              return (
                  <div className='tasks-content-elem'>
                      <p>Client: {this.state.clientInfo.surname} {this.state.clientInfo.name} {this.state.clientInfo.thirdName}</p>
                  </div>
              );
          default:
              return(
                  <div className='tasks-content-elem'>
                      <p style={{color:someProps}}>{text.charAt(0).toUpperCase() + text.slice(1)}: {this.state[text]}</p>
                  </div>
              )
      }
    };

    deleteTask = ()=>{
      Request.delete(`/tasks/${this.state.id}`)
          .then(()=>{
              this.props.removeTask(this.state.id);
              this.props.showSnack();
              this.setState({
                  disabled:true
              })
          })
    };

    takeTask = ()=>{
        Request.update(`/tasks/${this.state.id}`)
            .then(response=>{
                this.props.showSnack();
                this.props.takeTask({name:response.data.name.user_firstname,id:this.state.id});
                this.setState({
                    disabledTask:true
                })
            })
    };

    render() {
        return(
            <div className={this.props.show ? 'tasks-info-box tasks-info-box-show' : 'tasks-info-box'}>
                    <div>
                        <button className='companies-info-box-btn'
                                style={this.state.disabledTask || this.state.executor.name ? {backgroundColor:'grey'}:{}}
                                onClick={this.deleteTask}
                                disabled={this.state.disabled}>
                            <DeleteForeverIcon/>
                        </button>
                    </div>
                    <div className='tasks-info-box-content'>
                        <h1 style={{letterSpacing: '3px',textTransform:'uppercase'}}>{this.state.name}</h1>
                        {this.contentInfo('exe')}
                        {this.contentInfo('client')}
                        {this.contentInfo('beginning')}
                        {this.contentInfo('deadline')}
                        {this.contentInfo('status','orange')}
                        <div className='box-companies-info-desc' style={{width:'70%'}}>
                            <ExpansionPanel style={{minWidth:'70%',margin: '0 auto'}}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Description</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography style={{overflow:'scroll',maxHeight:'300px'}}>
                                        {this.state.description}
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                        <button className='client-btn'
                                style={Object.assign({},
                                    {marginTop:'10%'},this.state.disabledTask || this.state.executor.name ? {backgroundColor:'grey'}:{}
                                )}
                                onClick={this.takeTask}
                                disabled={this.state.disabledTask}>
                            Take task
                        </button>
                    </div>
                    <button className={'back-btn'} onClick={() => {this.props.updateShowInfo(!this.props.show);this.clearState()}}>
                        <ArrowIcon/>
                    </button>
                </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TaskInfo)