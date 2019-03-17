import React from "react"
import PropTypes from "prop-types"
class CourseCard extends React.Component {

  render () {
    return (
      <React.Fragment>
          <div className="card-component" data-test="component-course-card">
                  <div className="card-content ">
                      <strong>Course Name:</strong> <span data-test="course-name" className="card-title">{this.props.name}</span><br></br>
                      <strong>Course Description:</strong> <span data-test="course-description">{this.props.description}</span>
                  </div>
                  <div className="card-action">
                      <a href={this.props.editPath}><button className="card-edit card-button">Edit Course </button></a>
                      <a href={"/courses/" + this.props.id} data-confirm="Are you sure you want to delete this course?" data-method="delete" >
                          <button className="card-delete card-button">Delete Course </button>
                      </a>
                  </div>
          </div>
      </React.Fragment>
    );
  }
}

CourseCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  editPath: PropTypes.string
};
export default CourseCard
