import React from 'react'
import './Form.css'
import bird from './bird.png'
import Request from "../Requests";
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }

    handleChange = name => event => {
        this.setState({ ...this.state.value, [name]: event.target.value });
    };

    sendData = ()=>{
      let body = {login:this.state.login,password:this.state.password};
      Request.update('/login',body)
          .then(response=>{
              console.log(response)
          })
    };

    render() {
        return(
            <div className='container'>
                <img className='form-logo' src={bird} alt='logo'/>
                <div className='form'>
                    <div>
                        <p>
                            <label>
                                Login:
                                <input className='login-input' type={'text'} name={'login'} placeholder={'Enter Login'}
                                       value={this.state.login} onChange={this.handleChange('login')}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>Password:
                                <input className='login-input' type={'password'} name={'password'} placeholder={'Enter Password'}
                                       value={this.state.password} onChange={this.handleChange('password')}/>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <button className={'login-btn'} onClick={this.sendData}>Log in</button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm