json.extract! image, :id,  :url, :description, :user_id, :created_at, :updated_at

json.owned   (current_user == image.user)