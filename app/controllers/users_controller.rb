class UsersController < ApplicationController
    before_action :authorize, only: [:show]

    def index 
        @current_user ||= User.find_by(id: session[:user_id])
        # username = @current_user.username
        render json: @current_user, methods: [:public_url]
    end

    def create
      user = User.create(user_params)
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created, methods: [:public_url ]   
      else
        
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity

      end
    end

    
    def update 
      user = User.find_by(id: session[:user_id])
      user.update(avatar: params[:avatar])
      render json: user, methods: [:public_url]  
    end
  
    def show
      user = User.find_by(id: session[:user_id])
      username = [{ username: user.username}, { public_url: user.public_url}]
      render json: username
      # render json: user, methods: [:public_url]  

    end
  
    private
  
    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
  
    def user_params
      params.permit(:username, :password, :password_confirmation, :avatar)
    end
end
