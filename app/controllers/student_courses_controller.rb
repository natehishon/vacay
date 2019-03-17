class StudentCoursesController < ApplicationController

  before_action :set_student, only: [:show]
  before_action :set_courses, only: [:show]

  def create
    course_to_add = Course.find(params[:course_id])
    @student = Student.find(params[:student_id])
      StudentCourse.create(course: course_to_add, student: @student)
      flash[:notice] = "#{@student.name} has successfully enrolled in #{course_to_add.name}."
      redirect_to students_path

  end

  def show

  end

  def set_student
    @student = Student.find (params[:id])
  end


  def set_courses
    # @courses = Course.where('' + @student.id.to_s +  ' NOT IN (SELECT DISTINCT(student_id) FROM student_courses)')
      @courses = Course.all
  end

end