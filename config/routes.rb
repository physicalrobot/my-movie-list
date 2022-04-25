Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  resources :movies
  resources :favorites
  resources :reviews


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
