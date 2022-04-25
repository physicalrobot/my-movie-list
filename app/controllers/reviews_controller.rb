class ReviewsController < ApplicationController
    def index 
        reviews = Review.all 
        render json: reviews


      end
    
      def create 
        review = Review.create(text: params[:text], value: params[:value], user_id: params[:user_id], movie_id: params[:movie_id])
        render json: review
      end

    def show

    end

    def destroy 

    end

    def patch 

    end
end
