import React from 'react';
import MaterialTable from 'material-table';
import './Companies.css'
import Request from "../Requests";
import {connect} from 'react-redux'
import {mapDispatchToProps, mapStateToProps} from "./CompaniesStore";
import CompaniesInfo from "./CompaniesInfo/CompaniesInfo";

class Companies extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Name', field: 'company_name' },
                { title: 'Type', field: 'desc' },
            ],
            data: [],
            showInfo: false
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
        this.setState({showInfo : true});
    };

    updateShowInfo = (value) => {
        this.setState({showInfo: value})
    };

    render() {
        return (
            <div>
                <CompaniesInfo show = {this.state.showInfo} updateShowInfo={this.updateShowInfo} />
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
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Companies)