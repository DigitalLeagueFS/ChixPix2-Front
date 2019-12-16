import React from "react";
import Request from "../Requests";
import "./Profile.css";



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
    render() {
        return(
            <div>
                <div className={'card'}>
                    <div>
                        <input className={'profile-input'} value={this.state.secondName} disabled/>
                    </div>
                    <div>
                        <input className={'profile-input'} value={this.state.firstName} disabled/>
                    </div>
                    <div>
                        <input className={'profile-input'} value={this.state.thirdName} disabled/>
                    </div>
                    <div>
                        <input className={'profile-input'} value={this.state.date} disabled/>
                    </div>

                </div>
            </div>
        )
    }
}

export default UserInfo