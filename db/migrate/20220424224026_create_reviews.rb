class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :text
      t.integer :value
      t.integer :movie_id
      t.integer :user_id
      t.string :username

      t.timestamps
    end
  end
end
