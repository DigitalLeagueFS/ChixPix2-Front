import React from 'react'
import './ClientCard.css'
import Request from "../../Requests";
import {Dialog} from "@material-ui/core";
import InfoCard from "./ClientDataDialog/ClientDataDialog";

class ClientCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open:false,
            name: '',
            surname: '',
            thirdName: '',
            phone: '',
            date: '',
            link: '',
            company_name: ''
        }
    }

    showClient = () => {
        Request.get(`/getClient/${this.props.id}`)
            .then(response=>{
                this.setState({...response.data,open : true});
            })
    };

    handleClose = () =>{
        this.setState({open : false});
    };

    render() {
        return(
            <div>
                <div className='clientCard' key={this.props.firstName} onClick={this.showClient}>
                    <img src={this.props.link}
                         className='clientCard-img' alt={this.props.firstName}/>
                    <div>
                        <h2>{this.props.firstName}</h2>
                        <h2>{this.props.secondName}</h2>
                        <h3>{this.props.company}</h3>
                    </div>
                </div>
                <Dialog open={this.state.open} onClose={this.handleClose}><InfoCard {...this.state}/></Dialog>
            </div>

        )
    }
}

export default ClientCard;