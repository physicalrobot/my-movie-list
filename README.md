# My Movie List   

## Learning Goals

- Build a web basic API with Ruby on Rails and Active Record to support a React
  frontend

## Introduction

This app allows users to review movies from a shared library and curate their own list of favorite movies. 

The focus of this project is **building a Rails API backend** that uses
**Active Record** to access and persist data in a database, which will be used
by a separate **React frontend** that interacts with the database via the API. I'm also using Active Storage with Google Cloud Services to store and display the images on the website.

A more in depth explanation of the project and how its made can be found here: https://physicalrobot.github.io/code_blog/portfolio/make-my-movie-list/

## Requirements

This app requires you to be running Rails version 6 or above and React 17.0.0. 

## Installation

This app just requires you to run 'bundle install' after forking and cloning the repo locally. Then navigate into the client folder and run npm install to install all the required packages for the frontend to work. 

## Usage

After downloading the program. Run the backend server by running the command 'rails s' and navigate to the client folder before running 'npm start' to get the frontend running. 

Feel free to sign up with your own username and password. 

The first console you will be greeted with is the "Favorite Movie" console, where a list of your favorite movies will be generated:

![favmovies](https://user-images.githubusercontent.com/53846309/168875929-63ee1343-8a25-4878-8f17-58adadc245a5.png)

The second section is for your reviews. Here you will be able to view and delete reviews you've written for previous movies. 


![reviews](https://user-images.githubusercontent.com/53846309/168876160-b5b50ebf-852a-4ba3-8ae6-ef3441a2436d.PNG)


And last but not least is the library of Movies you will be interacting with. You can like or review movies from the following component. 

![movielibrary](https://user-images.githubusercontent.com/53846309/168876259-0497a1b0-b673-498e-9ae2-60458b40f728.PNG)

Feel free to check out the deployed version of the site here: 
https://make-my-movie-list.herokuapp.com/

You may make your own user or user the following credentials to login:
Username: user
Password: name


## License
[MIT](https://choosealicense.com/licenses/mit/)
