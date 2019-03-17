class CoursesController < ApplicationController
  # skip_before_action :require_user
  before_action :set_course, only: [:show, :edit, :update]

  def index
    @courses = Course.all

  end

  def show
    redirect_to root_path
  end

  def new
    @course = Course.new
  end

  def create
    @course = Course.new(course_params)
    if @course.save
      flash[:notice] = "Course Created"
      redirect_to @course
    else
      # flash[:notice] = @course.errors.full_messages.to_sentence
      # render
      render json: @course.errors, status: :unprocessable_entity
    end
  end

  def course_params
    params.require(:course).permit(:name, :description)
  end

  def destroy
    @course = Course.find (params[:id])
    @course.delete
    flash[:notice] = "You have successfully deleted the course"
    redirect_to courses_path
  end

  def edit

  end

  def set_course
    @course = Course.find (params[:id])
  end

  def update

    if @course.update(course_params)
      flash[:notice] = "You have successfully updated this course"
      redirect_to @course
    else
      render 'edit'
    end
  end

end