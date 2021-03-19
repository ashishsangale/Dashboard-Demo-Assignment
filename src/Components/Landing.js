import React,{ useState } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Charts from './Charts';
import {useLocation} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import ModalForm from './ModalForm';
import './Landing.css';

function conditionalRouting(dir){
    switch(dir){
        case "/bar":
            return <Charts Graph={Bar}/>
        case "/pie":
            return <Charts Graph={Pie}/>
        case "/line":
            return <Charts Graph={Line}/>
        default:
            return <Charts Graph={Pie}/>
    }
}

function printFile(){
    const targetDiv = document.getElementById('target');
    html2canvas(targetDiv).then(function(canvas) {
        const divImage = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(divImage, "PNG", 0, 0);
        pdf.save('download.pdf')
    })
}


function Landing() {
    const dir = useLocation().pathname
    //console.log(dir)
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <ModalForm callback={handleClose}/>
                </Fade>
            </Modal>
            <Card className="root" >
                <CardContent className="content" id="target">
                    {conditionalRouting(dir)}
                </CardContent>
                <CardActions className="action">
                <Button variant="contained" color="primary" onClick={printFile}>Save as PDF</Button>
                <Button variant="contained" color="default" onClick={handleOpen}>Share Via Email</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Landing;
