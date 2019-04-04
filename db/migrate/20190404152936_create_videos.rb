class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :name
      t.text :url
      t.string :description
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
