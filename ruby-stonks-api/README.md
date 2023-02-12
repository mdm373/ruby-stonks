# ruby-stonks-api
> The API for tradin' stonks

## Local Build & Serve
* Configure
  * copy `.env.shadow` to `.env` and modify as need
* Run
  * `gem install rails`
  * `bundle install`
  * Start DB `cd .. && docker-compose up db`
  * `rails server`

## Run DB Migrations
* `rails db:migrate`

## Generate App For UI
* From Rails Console:
  ```
  Doorkeeper::Application.create!(name:"ruby-stonks-ui", scopes: ["read", "write"])
  ```