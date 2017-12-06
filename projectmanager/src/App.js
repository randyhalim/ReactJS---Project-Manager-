import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {

constructor(){

  super();

  this.state = {
      projects: []
  }
}

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      },
      {
        title: 'Asimo',
        category: 'Robotics'
      }
    ]});
  }

  /*react deals with user interface, wont persist the project data*/
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }


  render() {
    return (
      //Important that there's only one element here (in this case div)
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} />

      </div>
    );
  }
}

export default App;