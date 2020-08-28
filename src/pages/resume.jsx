import React,{Component} from 'react';

import {Grid,Cell} from 'react-mdl'


class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>Left Side</Cell>
                    <Cell className="resume-right-col" col={4}>Right Side</Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;