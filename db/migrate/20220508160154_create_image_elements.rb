class CreateImageElements < ActiveRecord::Migration[6.1]
  def change
    create_table :image_elements do |t|
      t.references :movie, null: false, foreign_key: true

      t.timestamps
    end
  end
end
