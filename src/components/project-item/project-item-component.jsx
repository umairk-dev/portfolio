import React, { useState } from "react";
import "react-responsive-modal/styles.css";

import "./project-item.styles.scss";

import { withRouter, Link } from "react-router-dom";
import Tags from "../tags/tags-component";
import Image from "react-graceful-image";
const ProjectItem = ({ item, history, match }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen({ opem: true });
  };

  const onCloseModal = () => {
    setOpen({ opem: false });
  };

  return (
    <Link
      to={{
        pathname: "/project-detail",
        state: { _id: item._id },
      }}
    >
      <div className="project-item" onClick={() => onOpenModal()}>
        <div className="preview">
          <div className="title">{item.name}</div>

          <div className="image">
            <Image alt={item.name} src={`/static/images/${item.preview}`} />
          </div>
        </div>

        <div className="info">
          <div className="description">{item.description}</div>
          <Tags tags={item.tags} />
        </div>
      </div>
    </Link>
  );
};

export default withRouter(ProjectItem);
