class ContactsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @contact = Contact.create(contact_params)
    if @contact.save!
      render :json => {
               title: "Thanks for your message",
               content: "We received your message and we will contact you soon !",
             }, :status => 200
    else
      render :json => {
               title: "Error ",
               content: "There is an error while sending your message , try again",
             }, :status => 422
    end
  end

  def contact_params
    params.require(:contact).permit(:email, :body)
  end
end
