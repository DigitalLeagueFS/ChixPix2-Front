import React from "react";
import './CompaniesInfo.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {connect} from "react-redux";
import {mapStateToProps} from "./indexCompaniesInfo";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class CompaniesInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name : this.props.companyClick.company_name,
            desc : this.props.companyClick.desc,
            link : this.props.companyClick.link,
            image : this.props.companyClick.img,
            text : this.props.companyClick.text
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props)
            this.setState({name : this.props.companyClick.company_name,
                desc : this.props.companyClick.desc,
                link : this.props.companyClick.link,
                image : this.props.companyClick.img,
                text : this.props.companyClick.text})
    }


    render() {
        return(
            <div className={this.props.show ? 'companies-info-box companies-info-box-show' : "companies-info-box"}>
                <div>
                    <button className={'back-btn'} onClick={() => {this.props.updateShowInfo(!this.props.show)}}>
                        <ArrowBackIcon/>
                    </button>
                </div>
                <div className='box-companies-info'>
                    <div className='box-companies-info-image'>
                        <img src={this.state.image} alt={'Company image'}/>
                    </div>
                    <div>
                        <a className='box-companies-info-link' href={this.state.link}>{this.state.name}</a>
                    </div>
                    <div className='box-companies-info-desc'>
                        <ExpansionPanel style={{width:'70%',margin: '0 auto'}}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Description</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    {this.state.text}
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(CompaniesInfo);