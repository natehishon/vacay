class Course < ApplicationRecord
  validates :name, presence: true, length: { maximum: 50}
  validates :description, presence: true, length: { maximum: 300}
  has_many :student_courses
  has_many :students, through: :student_courses
end