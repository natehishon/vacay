Rails.application.routes.draw do
  root 'courses#index'
  get 'courses/new', to: 'courses#new'
  get 'course/new', to: 'course#new'
  get 'student/new', to: 'student#new'
  get 'students/new', to: 'students#new'
  resources :students
  resources :courses
  resources :student_courses
  # courses controller, index action
  get 'login', to:'logins#new'
  post 'login', to:'logins#create'
  delete 'logout', to: 'logins#destroy'
  post 'course_enroll', to: 'student_courses#create'
end
