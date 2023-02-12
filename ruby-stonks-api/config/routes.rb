Rails.application.routes.draw do
  use_doorkeeper
  defaults format: :json do
    resources :todos
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index
end
