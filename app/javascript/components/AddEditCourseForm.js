import React from "react"
import PropTypes from "prop-types"
class AddEditCourseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            newCourse: props.newCourse,
            errors: props.errors
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    render () {

        let errorList = [];
        if(this.props.errors){
            errorList = this.props.errors.map(function(error) {
                return (
                    <li>
                        {error}
                    </li>
                );
            });
        }

        return (
            <React.Fragment>
                <div className="form-component" data-test="component-add-edit-course-form">

                    <h3>{this.state.newCourse ? "Create Course" : "Edit Course"}</h3>

                    {errorList}

                    <label>Name</label>
                    <input
                        type="text"
                        name="course[name]"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        data-test="add-edit-course-name"
                        placeholder="Please enter a course name"

                    />

                    <label>Description</label>
                    <input
                        type="text"
                        name="course[description]"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                        data-test="add-edit-course-description"
                        placeholder="Please enter a course description"
                    />

                    <input type="submit" value={this.state.newCourse ? "Create Course" : "Save Edit"} data-test="add-edit-course-submit" />
                </div>
            </React.Fragment>
        );
    }
}

AddEditCourseForm.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    newCourse: PropTypes.bool,
    errors: PropTypes.array
};

export default AddEditCourseForm
