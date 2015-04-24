Rails.application.routes.draw do
	root 'posts#index'
	resources :posts
  # specify the root of your app
  # generate the rest of the routes

end
