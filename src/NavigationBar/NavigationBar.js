import * as React from "react"
import {Link} from "react-router-dom"
import './NavigationBar.css'

class NavBar extends React.Component
{
    render() {
        return(
            <div>
                <header>
                    <div className='navbar'>
                        <ul>
                            <li><Link to='/tasks' className='navbar--elem'>Tasks</Link></li>
                            <li><Link to='/my-tasks' className='navbar--elem'>My Tasks</Link></li>
                            <li><Link to='/profile' className='navbar--elem'>My Profile</Link></li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavBar