import React from "react";
import Request from "../../../Requests";
import './ClientDialog.css';
import {connect} from 'react-redux'
import {mapDispatchToProps, mapStateToProps} from "./indexClientDialog";
import Chip from "@material-ui/core/Chip";



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
                validName: 'Name must be 4 characters long!',
                validSurname: 'Surname  must be 5 characters long!',
                validThirdName: 'Third name must be 8 characters long!',
                validPhone: 'Phone must be 8 characters long!',
                validLink: 'Link must be 18 characters long!',
            },
            disabled:false,
            show:false,
            content:''
        };
    }

    handleChange = name => event => {
        let input = event.target;
        switch (name) {
            case 'name':
                this.setState(()=>({
                  errors: {
                      ...this.state.errors,
                      validName:input.value.length > 4
                          ? ''
                          : 'Name must be 4 characters long!'
                  }
                }));
                break;
            case 'surname':
                this.setState(()=>({
                    errors: {
                        ...this.state.errors,
                        validSurname:input.value.length > 5
                            ? ''
                            : 'Surname  must be 5 characters long!'
                    }
                }));
                break;
            case 'thirdName':
                this.setState(()=>({
                    errors: {
                        ...this.state.errors,
                        validThirdName:input.value.length > 8
                            ? ''
                            : 'Third name must be 8 characters long!'
                    }
                }));
                break;
            case 'phone':
                this.setState(()=>({
                    errors: {
                        ...this.state.errors,
                        validPhone:input.value.length > 8
                            ? ''
                            : 'Phone must be 8 characters long!'
                    }
                }));
                break;
            case 'link':
                this.setState(()=>({
                    errors: {
                        ...this.state.errors,
                        validLink:input.value.length > 16
                            ? ''
                            : 'Link must be 18 characters long!'
                    }
                }));
                break;
            default:
                break;
        }

        this.setState({...this.state.errors,[name]: event.target.value});
    };

    sendData = ()=>{
        if(this.state.errors.validName || this.state.errors.validLink
            || this.state.errors.validPhone || this.state.errors.validSurname || this.state.errors.validThirdName){
            this.setState({
                show:true,
                content:this.state.errors.validName || this.state.validSurname || this.state.errors.validThirdName
                    || this.state.errors.validPhone || this.state.errors.validLink
            });
            setTimeout(()=>{
                this.setState({
                    show:false
                })
            },3000)
        }
        else {
            let body = {
                name: this.state.name,
                surname: this.state.surname,
                thirdName: this.state.thirdName,
                phone: this.state.phone,
                date: this.state.date,
                link: this.state.link,
                clickedCompany: this.state.clickedCompany
            };
            Request.create('/clients', body)
                .then(response=>{
                    if(response.status === 200){
                        console.log(response.data);
                        this.props.showSnack();
                        this.props.updateData(Object.assign({},body,{id:response.data.id}));
                        this.setState({
                            disabled:true
                        })
                    }
                })
        }
    };

    componentDidMount() {
        Request.get('/companies/name')
            .then(response=>{
                this.setState({company : response.data,clickedCompany:response.data[0]});
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
                <div className='form-dialog'>
                    {this.state.show && <Chip label={this.state.content} color="secondary" style={{width:'100%'}}/>}
                    <div>
                                Name:
                                <input className='clients-input' type={'text'} name={'name'} placeholder={'Enter Name'}
                                       value={this.state.name} onChange={this.handleChange('name')}/>
                    </div>
                    <div>
                                Surname:
                                <input className='clients-input' type={'text'} name={'surname'} placeholder={'Enter Surname'}
                                       value={this.state.surname} onChange={this.handleChange('surname')}/>
                    </div>
                    <div>
                                Third Name:
                                <input className='clients-input' type={'text'} name={'thirdName'} placeholder={'Enter Third Name'}
                                       value={this.state.thirdName} onChange={this.handleChange('thirdName')}/>
                    </div>
                    <div>
                                Company:
                                <select className='clients-input' name={'company'} placeholder={'Enter Name of Company'}
                                         defaultValue='DigitalLeague' onChange={this.handleChange('clickedCompany')}>
                                    {this.mapOption()}
                                </select>
                    </div>
                    <div>
                                Phone:
                                <input className='clients-input' type={'phone'} name={'phone'} placeholder={'Enter Phone'}
                                       value={this.state.phone} onChange={this.handleChange('phone')}/>
                    </div>
                    <div>
                                Date:
                                <input className='clients-input' type={'date'} name={'date'} placeholder={'Enter Date'}
                                       value={this.state.date} onChange={this.handleChange('date')}/>
                    </div>
                    <div>
                                Link to Photo:
                                <input className='clients-input' type={'text'} name={'link'} placeholder={'Enter Link'}
                                       value={this.state.link} onChange={this.handleChange('link')}/>
                    </div>
                    <div>
                            <button className={'clients-btn'} onClick={this.sendData} disabled={this.state.disabled}>
                                Create client
                            </button>
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