class Movie < ApplicationRecord

    has_many :reviews, dependent: :destroy
    has_one_attached :image

    # attr_accessor :image
    def public_url
        "https://storage.googleapis.com/movie_bucket_list/#{self.image.key}"
    end

end
