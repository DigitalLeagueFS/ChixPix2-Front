import React from "react";
import Request from "../../../Requests";
import './ClientDialog.css';
import {connect} from 'react-redux'
import {mapDispatchToProps, mapStateToProps} from "./indexClientDialog";


class ClientDialog extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name: '',
            surname: '',
            thirdName: '',
            phone: '',
            date: '',
            link: '',
            clickedCompany:'',
            company: [],
            formValid: false,
        };
    }

    handleChange = name => event => {
        this.setState({ ...this.state.value, [name]: event.target.value });
    };

    checkInputs(){
        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let thirdName = document.getElementById('thirdName').value;
        let phone = document.getElementById('phone').value;
        let link = document.getElementById('link').value;
        let checkName = /^[a-z]$/i;
        let checkPhone = /^((\+7|7|8)+([0-9]){10})$/gm;
        if(name.length < 5 || !checkName.test(name))
        {
            return false;
        }
        if(surname.length < 5 || !checkName.test(surname))
        {
            return false;
        }
        if(thirdName.length < 5 || !checkName.test(thirdName))
        {
            return false;
        }
        if(link.length < 5)
        {
            return false;
        }
        if(!checkPhone.test(phone))
        {
            return false;
        }

        return true;
    }


    sendData = ()=>{
        let body = {
            name: this.state.name,
            surname: this.state.surname,
            thirdName: this.state.thirdName,
            phone: this.state.phone,
            date: this.state.date,
            link: this.state.link,
            clickedCompany: this.state.clickedCompany
        };
        Request.create('/createclients', body)
            .then(response=>{
                if(response.status === 200){
                    this.props.showSnack();
                    this.props.updateData();
                }
            })
    };

    componentDidMount() {
        Request.get('/getcompaniesname')
            .then(response=>{
                this.setState({company : response.data});
            })
    };

    getOption(name) {
        return <option value = {name} key={name}>{name}</option>
    };

    mapOption(){
        return this.state.company.map(value => {
            return this.getOption(value.company_name)
        })
    };

    render() {
        return(
            <div className='container-dialog'>
                <div className='form-dialog' onSubmit={this.checkInputs}>
                    <div>
                        <p>
                            <label>
                                Name:
                                <input className='clients-input' type={'text'} name={'name'} placeholder={'Enter Name'}
                                       value={this.state.name} onChange={this.handleChange('name')}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>
                                Surname:
                                <input className='clients-input' type={'text'} name={'surname'} placeholder={'Enter Surname'}
                                       value={this.state.surname} onChange={this.handleChange('surname')}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>
                                Third Name:
                                <input className='clients-input' type={'text'} name={'thirdName'} placeholder={'Enter Third Name'}
                                       value={this.state.thirdName} onChange={this.handleChange('thirdName')}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>
                                Company:
                                <select className='clients-input' name={'company'} placeholder={'Enter Name of Company'}
                                        required defaultValue={this.state.clickedCompany} onChange={this.handleChange('clickedCompany')}>
                                    {this.mapOption()}
                                </select>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>
                                Phone:
                                <input className='clients-input' type={'phone'} name={'phone'} placeholder={'Enter Phone'}
                                       value={this.state.phone} onChange={this.handleChange('phone')}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>
                                Date:
                                <input className='clients-input' type={'date'} name={'date'} placeholder={'Enter Date'}
                                       value={this.state.date} onChange={this.handleChange('date')}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>
                                Link to Photo:
                                <input className='clients-input' type={'text'} name={'link'} placeholder={'Enter Link'}
                                       value={this.state.link} onChange={this.handleChange('link')}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <button className={'clients-btn'} onClick={this.sendData}
                                    disabled={!this.state.formValid || this.state.ok}>
                                Create client
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientDialog)