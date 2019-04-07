class User < ApplicationRecord
  has_many :links
  has_many :images
  has_many :videos
end
