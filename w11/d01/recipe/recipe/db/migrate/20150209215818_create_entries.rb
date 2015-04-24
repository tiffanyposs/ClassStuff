class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.text :name
      t.text :ingredients
      t.text :instructions

      t.timestamps null: false
    end
  end
end
