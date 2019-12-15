import React from "react";
import Request from "../Requests";



class UserInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            secondName:'',
            thirdName:'',
            date:'',
            access:''
        }
    }

    componentDidMount() {
        Request.get('/user')
            .then(response=>{
                console.log(response);
            })
    }

    render() {
        return(
            <div>
            </div>
        )
    }
}

export default UserInfo