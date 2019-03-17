class Student < ApplicationRecord
  before_save { self.email = email.downcase}
  validates :name, presence: true, length: { maximum: 50}
  validates :email , presence: true, length: {maximum: 25}, uniqueness: {case_sensitive: false}
  has_many :student_courses
  has_many :courses, through: :student_courses

end