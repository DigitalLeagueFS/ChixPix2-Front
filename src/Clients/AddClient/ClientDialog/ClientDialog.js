import React from "react";
import Request from "../../../Requests";
import './ClientDialog.css';



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
            company: [],
            nameValid: false,
            surnameValid: false,
            thirdNameValid: false,
            phoneValid: false,
            dateValid: false,
            linkValid: false,
            companyValid: false,
            formValid: false
        };
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value }, () => {this.validateField(name, value)});
    };

    validateField(fieldName, value){
        let nameValid = this.state.nameValid;
        let surnameValid = this.state.surnameValid;
        let thirdNameValid = this.state.thirdNameValid;
        let phoneValid = this.state.phoneValid;
        let dateValid = this.state.dateValid;
        let linkValid = this.state.linkValid;
        let companyValid = this.state.companyValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.match(/^[a-z]$/i) && value.length >= 5;
                break;
            case 'surname':
                surnameValid = value.match(/^[a-z]$/i) && value.length >= 5;
                break;
            case 'thirdName':
                thirdNameValid = value.match(/^[a-z]$/i) && value.length >= 5;
                break;
            case 'phone':
                phoneValid = value.match(/^((\+7|7|8)+([0-9]){10})$/gm);
                break;
            case 'date':
                dateValid = value.match(/^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])\d{4}$/);
                break;
            case 'link':
                linkValid = value.length > 10;
                break;
            case 'company':
                companyValid = value.match(/^[a-z]$/i) && value.length >= 3;
                break;
            default:
                break;
        }
        this.setState({
            nameValid: nameValid,
            surnameValid: surnameValid,
            thirdNameValid: thirdNameValid,
            phoneValid: phoneValid,
            dateValid: dateValid,
            linkValid: linkValid,
            companyValid: companyValid
        },this.validateForm);
    }

    validateForm(){
        this.setState({formValid: this.state.name && this.state.surname
                && this.state.thirdName && this.state.phone && this.state.date && this.state.link && this.state.company});
    }

    sendData = ()=>{
        Request.create('/createclients', this.state)
            .then(response=>{
            })
    };

    componentDidMount() {
        Request.get('/getcompaniesname')
            .then(response=>{
                this.setState({company : response.data});
            })
    };

    mapOption(){
        return this.state.company.map((value) => {this.getOption(value.company_name)})
    };

    getOption(name) {
        return <option value = {`${name}`}>{name}</option>
    };

    render() {
        return(
            <div className='container-dialog'>
                <div className='form-dialog'>
                    <div>
                        <p>
                            <label>
                                Name:
                                <input className='clients-input' type={'text'} name={'name'} placeholder={'Enter Name'}
                                       value={this.state.name} onChange={this.handleChange}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>
                                Surname:
                                <input className='clients-input' type={'text'} name={'surname'} placeholder={'Enter Surname'}
                                       value={this.state.surname} onChange={this.handleChange}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>
                                Third Name:
                                <input className='clients-input' type={'text'} name={'thirdName'} placeholder={'Enter Third Name'}
                                       value={this.state.thirdName} onChange={this.handleChange}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>
                                Company:
                                <select className='clients-input' multiple={true} name={'company'} placeholder={'Enter Name of Company'}
                                       value={this.state.company} onChange={this.handleChange}>
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
                                       value={this.state.phone} onChange={this.handleChange}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>
                                Date:
                                <input className='clients-input' type={'date'} name={'date'} placeholder={'Enter Date'}
                                       value={this.state.date} onChange={this.handleChange}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>
                                Link to Photo:
                                <input className='clients-input' type={'text'} name={'link'} placeholder={'Enter Link'}
                                       value={this.state.link} onChange={this.handleChange}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <button className={'clients-btn'} onClick={this.sendData} disabled={!this.state.formValid}>Create Client</button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


export default ClientDialog