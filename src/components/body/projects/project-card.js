import React, {useRef} from "react";
import "./project-card.css";
function ProjectCard({ project }) {
  function ImageChangeOnMouseOver({ primaryImg, secondaryImg }) {
    const imageRef = useRef(null);
  
    return (
      <img
        onMouseOver={() => {
          imageRef.current.src = secondaryImg;
        }}
        onMouseOut={() => {
          imageRef.current.src = primaryImg;
        }}
        src={primaryImg}
        alt=""
        ref={imageRef}
        className="project-photo project-photo-box"
      />
    );
  }
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i className="fi-rr-globe"></i>Demo
              </div>
            </a>
            )}
            {project.github&& (
              <a className="project-link" href={project.github}>
                <div className="link-button">
                <i className="devicon-github-original colored"></i>Github
              </div>
            </a>
            )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag, index)=> {
            return <label key={index} className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <div className="">
        <ImageChangeOnMouseOver primaryImg={project.image} secondaryImg = {project.secondary_image} />
      </div>
      
    </div>
  );
}

export default ProjectCard;