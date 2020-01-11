import React,{useState} from "react";
import './AddClientIcon.css'
import {Accessibility} from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import ClientDialog from "./ClientDialog/ClientDialog";


function AddClientIcon() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return(
        <div className='addClient-box' onClick={handleClickOpen}>
            <div className='rightClientIcon'>
                <Accessibility style={{marginTop:'10px'}}/>
                <p>Add Client</p>
                <Dialog open={open} onClose={handleClose}><ClientDialog onClick={handleClose}/></Dialog>
            </div>
        </div>
    )
}

export default AddClientIcon