import React,{useState} from "react";
import './AddClientIcon.css'
import {Accessibility} from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import ClientDialog from "./ClientDialog/ClientDialog";


function AddClientIcon() {
    const [clicked,setClicked] = useState(false);

    function handleClick() {
        setClicked(!clicked)
    }


    return(
        <div className='addClient-box' onClick={handleClick}>
            <div className='rightClientIcon'>
                <Accessibility style={{marginTop:'10px'}}/>
                <p>Add Client</p>
                <Dialog open={clicked} onClose={handleClick}><ClientDialog/></Dialog>
            </div>
        </div>
    )
}

export default AddClientIcon