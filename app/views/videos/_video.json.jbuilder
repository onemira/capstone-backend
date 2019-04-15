json.extract! video, :id, :url, :description, :user_id, :created_at, :updated_at

json.user_name video.user.name

json.url video.embed_youtube_url

json.owned   (current_user == video.user)
