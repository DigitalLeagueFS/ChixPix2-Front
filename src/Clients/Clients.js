import React from 'react'
import './Clients.css'
import ClientCard from "./ClientCard/ClientCard";
import Request from "../Requests";
import AddClientIcon from "./AddClient/AddClientIcon";
import {connect} from 'react-redux'
import {mapDispatchToProps, mapStateToProps} from "./indexClients";

class Clients extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }
    componentDidMount() {
        Request.get('/clients')
            .then(response=>{
                this.setState({
                    data:response.data
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.needUpdate){
            this.props.updateDataCl();
            Request.get('/clients')
                .then(response=>{
                    this.setState({
                        data:response.data
                    })
                })
        }
    }

    showClients(){
        return this.state.data.map(elem=>{
            return <ClientCard firstName = {elem.name}
                               secondName = {elem.surname}
                               company = {elem.company_name}
                               imgLink = {elem.link}
                               id = {elem.id}
                               key = {elem.id}
            />
        })
    }

    render(){
        return(
            <div>
                <div className='clients-box'>
                   <div className='clientCard-box'>
                      {this.showClients()}
                   </div>
                </div>
                <AddClientIcon/>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Clients);