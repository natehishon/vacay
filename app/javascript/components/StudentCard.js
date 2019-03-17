import React from "react"
import PropTypes from "prop-types"
class StudentCard extends React.Component {

  render () {
      let courseList = [];
      if(this.props.courses){
        courseList = this.props.courses.map(function(course) {
          return (
              <li key="{course.name}">
                {course.name}
              </li>
          );
        });
      }


    return (
      <React.Fragment>
          <div data-test="component-student-card" className="card-component">
            <div className="card-content ">
              Name: <span className="card-title" data-test="student-name">{this.props.name}</span><br></br>
              Email: <span data-test="student-email">{this.props.email}</span><br></br><br></br>
              <span>Course Enrollments:</span>
              <ul data-test="student-courses">{courseList} </ul>
            </div>
            <div className="card-action">
              <a href={this.props.addStudentClassPath} data-test="student-add-class-path"><button className="card-add-class card-button">Add Class </button></a>
              <a href={this.props.editPath} data-test="student-edit-path"><button className="card-edit card-button">Edit Student </button></a>
              <a href={"/students/" + this.props.id} data-test="student-delete-path" data-confirm="Are you sure you want to delete this student?" data-method="delete">
                <button className="card-delete card-button">Delete Student </button>
              </a>

            </div>
          </div>
      </React.Fragment>
    );
  }
}

StudentCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  courses: PropTypes.array,
  editPath: PropTypes.string,
  addStudentClassPath: PropTypes.string,

};
export default StudentCard
