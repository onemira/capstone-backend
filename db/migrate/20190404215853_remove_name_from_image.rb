class RemoveNameFromImage < ActiveRecord::Migration[5.2]
  def change
    remove_column :images, :name
  end
end
