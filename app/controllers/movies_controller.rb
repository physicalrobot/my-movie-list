require 'uri'
require 'net/http'
require 'openssl'



class MoviesController < ApplicationController

  
  # Imdb::Configuration.caching = true
  # Imdb::Configuration.db(:hostname => "localhost", :database => "imdb")
    
  # TMDB::API.api_key = "d7ebfabe54c0a1ed8a53cfa274d03070"
  # TMDB::API.config
  # TMDB::API.genres
  # TMDB::API.genres("tv")

  def index 
    movies = Movie.all 
    render json: movies
  end

  def create 
    movie = Movie.create(title: params[:title], image_url: params[:image_url])
    render json: movie
  end




# url = URI("https://online-movie-database.p.rapidapi.com/auto-complete?q=game")

# http = Net::HTTP.new(url.host, url.port)
# http.use_ssl = true
# http.verify_mode = OpenSSL::SSL::VERIFY_NONE

# request = Net::HTTP::Get.new(url)
# request["X-RapidAPI-Host"] = 'online-movie-database.p.rapidapi.com'
# request["X-RapidAPI-Key"] = '12a38f1ee3msh7ed5541b1c767d7p1f606ejsnd3ec44b6343c'

# response = http.request(request)
# puts response.read_body

  # end

end
