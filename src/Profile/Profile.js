import React from "react";
import Request from "../Requests";
import "./Profile.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: 200,
        },
    },
}));

let FormPropsTextField = function (props) {
    return(
        <TextField
            id="outlined-disabled"
            disabled
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
                        {FormPropsTextField(this.state.firstName)}
                    </div>
                    <div>
                        {FormPropsTextField(this.state.thirdName)}
                    </div>
                    <div>
                        {FormPropsTextField(this.state.date)}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo