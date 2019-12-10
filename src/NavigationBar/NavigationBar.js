import * as React from "react"
import {Link} from "react-router-dom"
import './NavigationBar.css'

class NavBar extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <header>
                    <div className='navbar'>
                        <ul>
                            <li><Link to='/Tasks' className='navbar--elem'>Tasks</Link></li>
                            <li><Link to='/My_tasks' className='navbar--elem'>My Tasks</Link></li>
                            <li><Link to='/My_profile' className='navbar--elem'>My Profile</Link></li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavBar