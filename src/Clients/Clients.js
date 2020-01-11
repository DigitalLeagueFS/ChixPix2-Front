import React from 'react'
import './Clients.css'
import ClientCard from "./ClientCard/ClientCard";
import Request from "../Requests";
import AddClientIcon from "./AddClient/AddClientIcon";

class Clients extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount() {
        Request.get('/clients')
            .then(response=>{
                this.setState({
                    data:response.data
                })
            })
    }

    showClients(){
        return this.state.data.map((elem,num)=>{
            return <ClientCard firstName = {elem.name}
                               secondName = {elem.surname}
                               company = {elem.company_name}
                               link = {elem.link}
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

export default Clients;