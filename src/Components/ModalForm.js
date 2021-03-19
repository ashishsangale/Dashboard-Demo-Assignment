import React, { createRef,useState } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import './Modal.css';

function ModalForm({callback}) {
    const [error, setError] = useState(null)
    const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailRef=createRef();

    
    const handleSubmit=()=>{

        const email=emailRef.current.value;
        if(!emailRegex.test(email))
        {
            console.log("err")
            setError("Invalid Email");
        }
        else
        {
            let anchor=document.createElement("a");
            anchor.href=`mailto:${email}`;
            anchor.click();
            callback();
        }
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <p style={{color:"red"}}>{error|| ""}</p>
                <Input name="email" type="email" ref={emailRef} onChange={()=>setError(null)}/>
                <div className="button">
                <Button variant="outlined" color="primary" onClick={handleSubmit}>Send Email</Button>
                <Button variant="outlined" color="secondary" onClick={callback}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default ModalForm;