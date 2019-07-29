class AddEmailAndBodyToContacts < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :email, :string
    add_column :contacts, :body, :text
  end
end
