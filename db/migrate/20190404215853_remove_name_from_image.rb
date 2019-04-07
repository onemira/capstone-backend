class RemoveNameFromImage < ActiveRecord::Migration[5.2]
  def change
    remove_column :images, :name, :string
    remove_column :videos, :name, :string
    remove_column :links, :name, :string
  end
end
