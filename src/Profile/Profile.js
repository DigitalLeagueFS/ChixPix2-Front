import React from "react";
import Request from "../Requests";
import "./Profile.css";
import {Input} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

let FormPropsTextField = function (props) {
    return(
        <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            value={props}
            variant="outlined"
        />
    )
}

class UserInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            secondName:'',
            thirdName:'',
            date:'',
        }
    }

    componentDidMount() {
        Request.get('/user')
            .then(response=>{
                this.setState({
                    firstName:response.data.firstName,
                    secondName: response.data.secondName,
                    thirdName: response.data.thirdName,
                    date: response.data.date
                });
            })
    }
    render() {
        return(
            <div className={'box'}>
                <div className={'card'}>
                    <div>
                        {FormPropsTextField(this.state.secondName)}
                    </div>
                    <div>
                        <Input disabled disableUnderline={'true'} value = {this.state.firstName}/>
                    </div>
                    <div>
                        <Input disabled disableUnderline={'true'} value = {this.state.thirdName}/>
                    </div>
                    <div>
                        <Input disabled disableUnderline={'true'} value = {this.state.date}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo