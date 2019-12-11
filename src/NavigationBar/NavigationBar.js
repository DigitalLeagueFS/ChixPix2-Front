import * as React from "react"
import {Link} from "react-router-dom"
import './NavigationBar.css'

class NavBar extends React.Component
{

    handleClick = event=>{
      let arr = document.querySelectorAll('.navbar--elem');
      let elem = event.target;
      arr.forEach(elem=>{
         elem.style.backgroundColor = '';
      });
      elem.style.backgroundColor = 'whitesmoke';
    };

    render() {
        return(
            <div>
                <header>
                    <div className='navbar'>
                        <ul>
                            <li><Link to='/tasks' className='navbar--elem' onClick={this.handleClick}>Tasks</Link></li>
                            <li><Link to='/my-tasks' className='navbar--elem' onClick={this.handleClick}>My Tasks</Link></li>
                            <li><Link to='/profile' className='navbar--elem' onClick={this.handleClick}>My Profile</Link></li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavBar