import React, { Component } from 'react';

//AddProject represents all the inputs required to add properties for the new projects
class AddProject extends Component {

  constructor(){
    super();
    this.state = {
        newProject:{}
    }
  }


  static defaultProps = {
      categories: ['Web Design', 'Engineering', 'Web Development', 'Mobile Development', 'Robotics']

  }

/*
getInitialState(){
  return{
      selectedOption: 'option1'
  };

}*/

handleOptionChange(e){  //handle radio button changes and sets the selected value of the buttons
  this.setState({
      selectedOption: e.target.value
  });

}

handleSubmit(e){  //handle errors, unexpected inputs
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newProject:{
        title: this.refs.title.value,
        category: this.refs.category.value,
        progress: this.state.selectedOption
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
}


  render() {
      let categoryOptions = this.props.categories.map(category => {
          return <option key={category} value={category}>{category}</option>
      });

    return (
      <div>
        <h3>Add Project </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />  {/*Category drop down */}
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <form>  {/*Radio Buttons  */}
              <div className="radio">
                <label>
                  <input type="radio" value="New"
                    checked={this.state.selectedOption==='New'}
                    onChange={this.handleOptionChange.bind(this)}/>
                  New
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="In Progress"
                    checked={this.state.selectedOption==='In Progress'}
                    onChange={this.handleOptionChange.bind(this)}/>
                  In Progress
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="Finished"
                    checked={this.state.selectedOption==='Finished'}
                    onChange={this.handleOptionChange.bind(this)}/>
                  Finished
                </label>
              </div>
          </form>
            <br />
            <input type="submit" value="Submit"/>
            <br />
        </form>
      </div>
    );
  }
}

export default AddProject;
