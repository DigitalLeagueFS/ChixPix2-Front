import React from 'react';
import MaterialTable from 'material-table';
import './Companies.css'
import Request from "../Requests";
import {connect} from 'react-redux'
import {mapDispatchToProps, mapStateToProps} from "./CompaniesStore";

class Companies extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Name', field: 'name' },
                { title: 'Type', field: 'desc' },
            ],
            data: [],
        };
    }

    componentDidMount() {
        Request.get('/companies')
            .then(response=>{
                this.setState({
                    data:response.data
                })
            })
    }

    rowClick = (event,rowData)=>{
        this.props.clickCompany(rowData);
    };

    render() {
        return (
            <div className='companies-box'>
                 <MaterialTable
                     options={{
                         pageSizeOptions:[5,10]
                     }}
                     title="Companies"
                     columns={this.state.columns}
                     data={this.state.data}
                     style={{
                         width:'70%'
                     }}
                     onRowClick={this.rowClick}
                 />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Companies)