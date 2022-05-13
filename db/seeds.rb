# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.create([
  {
    title: "Top Gun",
    image_url: "https://storage.cloud.google.com/movie_bucket_list/topgun.jpg"
  },
  {
      title: "Harry Potter and the Sorcerer's Stone",
      image_url: "https://storage.cloud.google.com/movie_bucket_list/HarryPotter1.jpg"
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      image_url: "https://storage.cloud.google.com/movie_bucket_list/HarryPotter2.jpg"
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        image_url: "https://storage.cloud.google.com/movie_bucket_list/HarryPotter3.jpg"
      },
      {
          title: "Harry Potter and the Goblet of Fire",
          image_url: "https://storage.cloud.google.com/movie_bucket_list/HarryPotter4.jpg"
        },
        {
            title: "Harry Potter and the Order of the Phoenix",
            image_url: "https://storage.cloud.google.com/movie_bucket_list/HarryPotter5.jpg"
          },
          {
            title: "Harry Potter and the Half-Blood Prince",
            image_url: "https://storage.cloud.google.com/movie_bucket_list/HarryPotter6.jpg"
          },
          {
            title: "Harry Potter and the Deathly Hallows part 1",
            image_url: "https://storage.cloud.google.com/movie_bucket_list/HarryPotter71.jpg"
          },
          {
            title: "Harry Potter and the Deathly Hallows part 2",
            image_url: "https://storage.cloud.google.com/movie_bucket_list/HarryPotter72.jpg"
          },
          {
            title: "Matrix",
            image_url: "https://storage.cloud.google.com/movie_bucket_list/Matrix.jpg"
          }
    ])

    Review.create([
      {
        text: "hello",
        value: 2,
        movie_id: 1,
        user_id: 1
      }

    ])

# Review.create([
#   {
#     text: "This movie sucked",
#     value: 1, 
#     movie_id: 1
#   },
#   {
#     text: "This movie sucked",
#     value: 4, 
#     movie_id: 4 
#   },
#   {
#     text: "This movie sucked",
#     value: 5, 
#     movie_id: 2 
#   },
#   {
#     text: "This movie sucked",
#     value: 2, 
#     movie_id: 3
#   },
#   {
#     text: "This movie sucked",
#     value: 3, 
#     movie_id: 1 
#   },
#   {
#     text: "This movie sucked",
#     value: 1, 
#     movie_id: 1 
#   },
#   {
#     text: "This movie sucked",
#     value: 2, 
#     movie_id: 1
#   }

# ])


  
