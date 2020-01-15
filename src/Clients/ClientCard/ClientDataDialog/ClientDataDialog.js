import React from "react";
import './ClientDataDialog.css'
import TextField from "@material-ui/core/TextField";
import Request from "../../../Requests";
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';

class InfoCard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name: this.props.name,
            surname: this.props.surname,
            thirdName: this.props.thirdName,
            phone: this.props.phone,
            date: this.props.date,
            link: this.props.link,
            company: this.props.company_name,
            id: this.props.id,
            open: false
        };
    }
    deleteClient = () => {
      Request.delete(`/deleteclient/${this.props.id}`)
    };

    handleChange = name => event => {
        this.setState({...this.state.value, [name]: event.target.value });
    };

    changeButtonOpen = ()=>{
        this.setState(prevstate => ({open : !prevstate.open}));
        let body = {
            name: this.state.name,
            surname: this.state.surname,
            thirdName: this.state.thirdName,
            phone: this.state.phone
        };
        if(this.state.open)
            Request.update(`/changeinfo/${this.props.id}`,body);
    };

    clientDialogTextField = (name,label_form,name2) => {
        return(
            <TextField
                onChange={this.handleChange(name2)}
                disabled={!this.state.open}
                label={label_form}
                value={name}
                style={
                    {
                        marginTop: 10,
                    }
                }
                variant="outlined"
            />
        )
    };

    render()
        {
            return (
                <div className='client-info-dialog'>
                    <div className='client-form-dialog'>
                        <div>
                            <img src={this.state.link} className='client-img-dialog' alt={this.state.name}/>
                        </div>
                        <div>
                            {this.clientDialogTextField(this.state.name,'Name','name')}
                        </div>
                        <div>
                            {this.clientDialogTextField(this.state.surname,'Surname','surname')}
                        </div>
                        <div>
                            {this.clientDialogTextField(this.state.thirdName,'Third name','thirdName')}
                        </div>
                        <div>
                            {this.clientDialogTextField(this.state.phone,'Phone','phone')}
                        </div>
                        <div>
                            {this.clientDialogTextField(this.state.company,'Company')}
                        </div>
                        <button className='client-btn' onClick={this.changeButtonOpen}>
                            {this.state.open ? <p>Apply Changes</p> : <p>Change Info</p>}
                            {this.state.open ? <LockIcon/> : <LockOpenIcon/>}
                        </button>
                        <button className='client-btn' onClick={this.deleteClient}>
                            Delete Client
                        </button>
                    </div>
                </div>)
        }
}

export default InfoCard;