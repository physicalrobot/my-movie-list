class ReviewsController < ApplicationController
     def index 
        reviews = Review.all
        render json: reviews
 
      end
    
      def create 
        review = Review.create(text: params[:text], value: params[:value], user_id: params[:user_id], movie_id: params[:movie_id], username: params[:username], userpic: params[:userpic])
        render json: review
      end


    def destroy 
      review = Review.find(params[:id])
      # routine.delete_if { |hash| id.include?(hash[:id]) }
      review.destroy 
      render json: review
    end

end
