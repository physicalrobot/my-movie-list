class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_one_attached :avatar


    def public_url
        "https://storage.googleapis.com/movie_bucket_list/#{self.avatar.key}"
    end
end
