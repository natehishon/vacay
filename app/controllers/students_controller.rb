class StudentsController < ApplicationController

  before_action :set_student, only: [:show, :edit, :update]

  def index
    @students = Student.all
  end

  def show

  end

  def new
    @student = Student.new
  end

  def destroy
    student = Student.find (params[:id])
    student.delete
    flash[:notice] = "You have successfully deleted the student"
    redirect_to students_path
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      flash[:notice] = "Student Created"
      redirect_to students_path
    else
      render 'new'
    end
  end

  def edit

  end

  def update

    if @student.update(student_params)
      flash[:notice] = "Student Updated"
      redirect_to students_path
    else
      render 'edit'
    end
  end

  private

  def set_student
    @student = Student.find (params[:id])
  end

  def student_params
    params.require(:student).permit(:name, :email)
  end


end