import React from 'react';
import './resume.styles.scss'
import SidePanel from '../../components/side-panel/side-panel-component';
import Education from '../../components/education/education-component';

class Resume extends React.Component {

    constructor(props){
        super(props);

        this.state={
            current : "Education"
        }
    }

    handleSelection(selection){
        this.setState({current:selection});
    }

    render() {
       return (
          <div className="resume">
               <div className="left-panel">
                   <SidePanel current={this.state.current} handleClick = {this.handleSelection.bind(this)}/>
               </div>
               <div className="detail">
                    {this.state.current === "Education" ? (
                        <Education/>
                    ):(null)}
               </div>
          </div>
       )
    }
  }
  
  export default Resume;