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
    image_url: "https://m.media-amazon.com/images/I/71y92uGrjBL._AC_SL1500_.jpg"
  },
  {
      title: "Harry Potter and the Sorcerer's Stone",
      image_url: "https://m.media-amazon.com/images/I/71x1RHSaEhL._AC_SY879_.jpg"
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      image_url: "https://www.themoviedb.org/t/p/original/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg"
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg"
      },
      {
          title: "Harry Potter and the Goblet of Fire",
          image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg"
        },
        {
            title: "Harry Potter and the Order of the Phoenix",
            image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tRoHysNFsXC2r0JiBL6iNHELut7.jpg"
          },
          {
            title: "Harry Potter and the Half-Blood Prince",
            image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/o2j49x3HYJC2VH689rYxmswtSgS.jpg"
          },
          {
            title: "Harry Potter and the Deathly Hallows part 1",
            image_url: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg"
          },
          {
            title: "Harry Potter and the Deathly Hallows part 2",
            image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c54HpQmuwXjHq2C9wmoACjxoom3.jpg"
          },
          {
            title: "Matrix",
            image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
          }
    ]),

    Review.create([
      {
        text: "hello",
        value: 2,
        movie_id: 1
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


  
