import React from "react";
import api from "../../api";

import "./project-detail.styles.scss";
import Gallery from "../../components/gallery/gallery-component";
import ProjectLink from "../../components/project-link/project-link.component";
import Tags from "../../components/tags/tags-component";
import { Icon } from "react-mdl";
import { PointSpreadLoading } from "react-loadingg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    console.log("Loading");
    console.log(this.props.location);
    await api.getProjectById(this.props.location.state._id).then((project) => {
      const item = project.data.data;
      console.log(item);
      this.setState({
        project: item,
        isLoading: false,
      });
    });
  };

  render() {
    const { project, isLoading } = this.state;

    return (
      <div>
        {!isLoading ? (
          <div className="project-detail">
            <div className="titleBar"></div>
            <FontAwesomeIcon
              className="icon"
              icon={["fas", "times"]}
              color="black"
              size={80}
              onClick={() => this.props.history.push("/projects")}
            />

            <div className="title"> {project.name} </div>

            <div className="content">
              <div className="detail">
                {project.tags != undefined ? (
                  <Tags tags={project.tags} />
                ) : null}
                <div className="desc">
                  {project.description}
                  {project.features != undefined &&
                  project.features.length > 0 ? (
                    <div>
                      <h2>Features:</h2>
                      <ul>
                        {project.features.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
                <div className="links">
                  <ProjectLink
                    playstore={`${project.playstore}`}
                    website={`${project.website}`}
                    github={`${project.github}`}
                  />
                </div>
              </div>
              <div
                className={
                  project.tags.indexOf("3D") != -1 ? "landscaping" : "slides"
                }
              >
                {project.stack != undefined ? <Gallery item={project} /> : null}
              </div>
            </div>
          </div>
        ) : (
          <div className="progress">
            <PointSpreadLoading />
          </div>
        )}
      </div>
    );
  }
}

export default ProjectDetail;
