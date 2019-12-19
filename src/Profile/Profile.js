import React from "react";
import Request from "../Requests";
import "./Profile.css";
import FormPropsTextField from "../Form/FormPropsTextField";



class UserInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            secondName:'',
            thirdName:'',
            date:'',
        }
    }

    componentDidMount() {
        Request.get('/user')
            .then(response=>{
                this.setState({
                    firstName:response.data.firstName,
                    secondName: response.data.secondName,
                    thirdName: response.data.thirdName,
                    date: response.data.date
                });
            })
    }
    logOut() {
        localStorage.clear();
        window.location.href = '/';
    }
    render() {
        return(
            <div className='box'>
                <div className='card'>
                    <div>
                        {FormPropsTextField(this.state.secondName,'Second Name')}
                    </div>
                    <div>
                        {FormPropsTextField(this.state.firstName, 'First Name')}
                    </div>
                    <div>
                        {FormPropsTextField(this.state.thirdName,'Third Name')}
                    </div>
                    <div>
                        {FormPropsTextField(this.state.date,'Date')}
                    </div>
                    <div>
                        <button type={'submit'} className='logout-btn' onClick={this.logOut}>Log Out</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo