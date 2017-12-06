import React, { Component } from 'react';

//represents the project items displayed under Latest projects

class ProjectItem extends Component {
  render() {

    return (
      //Important that there's only one element here (in this case div)
      <li className="Project">
          <strong>{this.props.project.title}</strong>: {this.props.project.category} - <i> {this.props.project.progress}</i>
      </li>
    );
  }
}

export default ProjectItem;
