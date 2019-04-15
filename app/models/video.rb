class Video < ApplicationRecord
  belongs_to :user

  def embed_youtube_url
    # https://www.youtube.com/watch?v=j_R1gEPZY3c
    # https://www.youtube.com/embed/j_R1gEPZY3c
   url.gsub("watch?v=", "embed/")
  end
end
