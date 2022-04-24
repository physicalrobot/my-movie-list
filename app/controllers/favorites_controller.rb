class FavoritesController < ApplicationController


    def index 
        movies = Favorite.all 
        render json: movies
      end
    
      def create 
        movie = Favorite.create(title: params[:title], image_url: params[:image_url])
        render json: movie
      end


      def destroy 
        favorite = Favorite.find(params[:id])
        favorite.destroy 
        render json: favorite
    end
    


end
