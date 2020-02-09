import React from "react";
import Request from "../../../Requests";
import Chip from "@material-ui/core/Chip";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../../../Clients/AddClient/ClientDialog/indexClientDialog";

class WorkersDialog extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name: '',
            surname: '',
            thirdName: '',
            date: '',
            clickedPost:'',
            post: [],
            errors: {
                validName: 'Name must be 4 characters long!',
                validSurname: 'Surname  must be 5 characters long!',
                validThirdName: 'Third name must be 8 characters long!',
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
            case 'post':
                this.setState(()=>({
                    errors: {
                        ...this.state.errors,
                        validLink:input.value.length > 4
                            ? ''
                            : 'Link must be 4 characters long!'
                    }
                }));
                break;
            default:
                break;
        }

        this.setState({...this.state.errors,[name]: event.target.value});
    };

    sendData = ()=>{
        if(this.state.errors.validName || this.state.errors.validPost
            || this.state.errors.validSurname || this.state.errors.validThirdName){
            this.setState({
                show:true,
                content:this.state.errors.validName || this.state.validSurname || this.state.errors.validThirdName || this.state.errors.validPost
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
                date: this.state.date,
                clickedPost: this.state.clickedPost,
            };
            Request.create('/workers', body)
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
        Request.get('/posts/name')
            .then(response=>{
                this.setState({post : response.data,clickedPost:response.data[0]});
            })
    };

    getOption(name) {
        return <option value = {name} key={name}>{name}</option>
    };

    mapOption(){
        return this.state.post.map(value => {
            return this.getOption(value.post)
        })
    };

    render() {
        return(
            <div className='container-dialog'>
                <div className='form-dialog'>
                    {this.state.show && <Chip label={this.state.content} color="secondary" style={{width:'100%'}}/>}
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
                                Date:
                                <input className='clients-input' type={'date'} name={'date'} placeholder={'Enter Date'}
                                       value={this.state.date} onChange={this.handleChange('date')}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>
                                Post:
                                <select className='clients-input' name={'post'} placeholder={'Enter Post'}
                                        onChange={this.handleChange('clickedPost')}>
                                    {this.mapOption()}
                                </select>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <button className={'clients-btn'} onClick={this.sendData} disabled={this.state.disabled}>
                                Create worker
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
)(WorkersDialog)