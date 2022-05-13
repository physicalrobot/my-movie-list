require 'uri'
require 'net/http'
require 'openssl'

require "google/cloud/storage"



class MoviesController < ApplicationController

  

  def index 
    movies = Movie.all 
    # render json: movies
    render json: movies, include: [ :reviews ], methods: [:public_url ] 
  end



  def create 
    

    movie = Movie.create(title: params[:title], image: params[:image], image_url: params[:image_url])
    # storage = Google::Cloud::Storage.new

    

    # if params[:image] != ""
    #   movie.update(image: params[:image])
    #   movie[:image_url] = url_for(movie.image)
    #   movie[:title] = Storage[0].name
    # end
    render json: movie, include: [ :reviews ], methods: [:public_url ]   
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
