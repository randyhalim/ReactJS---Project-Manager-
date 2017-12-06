import React, { Component } from 'react';


class ProjectItem extends Component {
  render() {

    return (
      //Important that there's only one element here (in this case div)
      <li className="Project">
          <strong>{this.props.project.title}</strong>: {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
