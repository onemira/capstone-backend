json.extract! video, :id, :url, :description, :user_id, :created_at, :updated_at

json.user_name video.user.name
json.owned   (current_user == video.user)