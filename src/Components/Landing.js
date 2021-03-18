import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Charts from './Charts';
import {useLocation} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './Landing.css'

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
    console.log(dir)
    return (
        <div>
            <Card className="root" >
                <CardContent className="content" id="target">
                    {conditionalRouting(dir)}
                </CardContent>
                <CardActions>
                <Button variant="contained" color="primary" onClick={printFile}>Save as PDF</Button>
                <Button variant="contained" color="default">Share Via Email</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Landing;
