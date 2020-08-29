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
    //  var strings_to_check = ["a", "b", "c"],
    //  test_arrrays = [ [ "a", "c", "e", "g"], [ "v", "x", "y", "z"] ],
      var res = false;
      if(this.state.active.length > 0){
        //console.log("Tags = " + tags);
        tags.map(v => {
          //console.log(v);
          //this.state.active.some(c => this.state.active.indexOf(c) > -1);
          if(this.state.active.indexOf(v) > -1){
             res = true;
          }
         // v.some(c => this.state.active.indexOf(c) > -1);
        })
      }else{
        res = true;
      }
      //console.log(res);
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
              //{
                (this.check(item.tags) === true ? (
                  <ProjectItem key={item._id} item={item} />
                ) : (null))
             // }
               
            )}
          </div>
        </div>
      )
    }
 }
   
  export default Projects;
  