import React from "react"
import PropTypes from "prop-types"
class AddEditStudentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            email: props.email,
            newStudent: props.newStudent
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

  render () {
    return (
      <React.Fragment>
          <div className="form-component" data-test="component-add-edit-student-form">

              <h3>{this.state.newStudent ? "Create Student" : "Edit Student"}</h3>

              <label>Name</label><br></br>
              <input
                  type="text"
                  name="student[name]"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  data-test="add-edit-student-name"
                  placeholder="Please enter a student name"
              />

              <label>Email</label>
              <input
                  type="email"
                  name="student[email]"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  data-test="add-edit-student-email"
                  placeholder="Please enter a student email"
              />

              <input type="submit" value={this.state.newStudent ? "Save Student" : "Save Edit"} data-test="add-edit-student-submit" />
          </div>
      </React.Fragment>
    );
  }
}

AddEditStudentForm.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    newStudent: PropTypes.bool
};

export default AddEditStudentForm
