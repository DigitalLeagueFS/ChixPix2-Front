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
         elem.style.borderBottom = 0
      });
      elem.style.backgroundColor = 'whitesmoke';
      elem.style.borderBottom = '2px #0080ff solid'
    };

    render() {
        return(
            <div>
                <header>
                    <div className='navbar'>
                        <ul>
                            <li><Link to='/main' className='navbar--elem' onClick={this.handleClick}>Main</Link></li>
                            <li><Link to='/task' className='navbar--elem' onClick={this.handleClick}>Task</Link></li>
                            <li><Link to='/profile' className='navbar--elem' onClick={this.handleClick}>Profile</Link></li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavBar