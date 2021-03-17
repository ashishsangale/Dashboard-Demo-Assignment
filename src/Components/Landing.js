import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import Charts from './Charts';
import Card from '@material-ui/core/Card'

function Landing() {
    return (
        <div>
            <Card>
                <Charts />
            </Card>
        </div>
    )
}

export default Landing;
