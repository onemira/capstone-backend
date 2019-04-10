json.extract! link, :id, :url, :title, :description, :user_id, :created_at, :updated_at

json.user_name link.user.name
json.owned   (current_user == link.user)