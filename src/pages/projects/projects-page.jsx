import React from 'react';
import api from '../../api';
import ProjectItem from '../../components/project-item/project-item-component';
import ProjectMenu from '../../components/project-menu/project-menu-component';

import './projects.styles.scss';

class Projects extends React.Component{

    constructor(props){
      super(props)
      this.state = {
          projects : [],
          isLoading : false,
          active : [],
          current : 0
      }
    }

    componentDidMount = async () => {
      this.setState({isLoading : true})
      await api.getAllProjects().then(projects => {
          this.setState({
              projects : projects.data.data,
              isLoading : false
          })
      })
    }


    check(tags){
      var res = false;
      if(this.state.active.length > 0){
        tags.map(v => {
          if(this.state.active.indexOf(v) > -1){
             res = true;
          }
        })
      }else{
        res = true;
      }
      return res;

    }

    handleActive(tags, key){
      console.log("key " + key);
      console.log(tags);
      this.setState({active : tags, current:key})
    }

    render(){
      const {projects,isLoading} = this.state
      console.log('Projects -> render -> projects', projects);
      return (
        <div className="projects">
          <h1>Projects</h1>
          <ProjectMenu current={this.state.current} handleActive={this.handleActive.bind(this)}/>
          <div className="items">
            {projects.map((item) => 
                (this.check(item.tags) === true ? (
                  <ProjectItem key={item._id} item={item} />
                ) : (null))
            )}
          </div>
        </div>
      )
    }
 }
   
  export default Projects;
  