import React from "react";
import Request from "../../../Requests";
import './ClientDialog.css';
import {connect} from 'react-redux'
import {mapDispatchToProps, mapStateToProps} from "./indexClientDialog";

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
};


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
            errors: {
                name: '',
                surname: '',
                thirdName: '',
                phone: '',
                link: '',
            }
        };
    }

    handleChange = name => event => {
        event.preventDefault();
        const{name1,value} = event.target;
        let errors = this.state.errors;
        let checkPhone = /^((\+7|7|8)+([0-9]){10})$/gm;
        switch (name1) {
            case 'name':
                errors.name = value.length < 5 ? 'Full Name must be 5 characters long!' : '';
                break;
            case 'surname':
                errors.surname = value.length < 5 ? 'Full Surname must be 5 characters long!' : '';
                break;
            case 'thirdName':
                errors.thirdName = value.length < 5 ? 'Full Third Name must be 5 characters long!' : '';
                break;
            case 'phone':
                errors.phone = !checkPhone.test(value) ? 'Enter correct phone number!' : '';
                break;
            case 'link':
                errors.link = value.length < 10 ? 'Link must be 10 characters long!' : '';
                break;
            default:
                break;
        }
        this.setState({ errors,...this.state.value, [name]: event.target.value });
    };

    sendData = (event)=>{
        event.preventDefault();
        if(validateForm(this.state.errors)) {
            console.info('Valid Form')
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
        }else{
            console.error('Invalid Form')
        }
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
        const {errors} = this.state;
        return(
            <div className='container-dialog'>
                <form className='form-dialog' onSubmit={this.sendData}>
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
                            <button className={'clients-btn'}>
                                Create client
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientDialog)