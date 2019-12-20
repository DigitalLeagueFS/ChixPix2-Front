import React from "react";
import {BusinessCenter, Dashboard, People} from "@material-ui/icons";
import {Link} from "react-router-dom";
import './Main.css'



function LeftMenuElem(props){
    let img;
    switch (props.context) {
        case 'Companies':
            img = <BusinessCenter style={{pointerEvents:'none'}}/>;
            break;
        case 'Tasks':
            img = <Dashboard style={{pointerEvents:'none'}}/>;
            break;
        case 'Clients':
            img = <People style={{pointerEvents:'none'}}/>;
            break;
        default:
            break;
    }

    function handleClick(event){
       let arr = document.querySelectorAll('.left--navbar--elem');
       arr.forEach(elem=>{
           elem.classList.remove('addColor')
       });
       let elem = event.target;
       elem.classList.add('addColor');
    }
        return(
            <Link className='left--navbar--elem' to={props.link} onClick={handleClick}>
                    {img}
                    <p>{props.context}</p>
            </Link>
        )
}

export default LeftMenuElem