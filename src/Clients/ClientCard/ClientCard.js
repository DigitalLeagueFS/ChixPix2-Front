import React from 'react'
import './ClientCard.css'
import Request from "../../Requests";
import {Dialog} from "@material-ui/core";

class ClientCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open:false
        }
    }

    showClient = () => {
        Request.get(`/getClient/${this.props.id}`)
            .then(response=>{
                console.log(response);
            })
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
                <Dialog open={this.state.open}></Dialog>
            </div>
        )
    }
}

export default ClientCard;