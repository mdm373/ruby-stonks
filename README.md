# ruby-stonks
> An app for tadin' stonks

## Running Locally
 * See subproject `README` files for details on running each app locally
 * Either install and run postgres locally or run `docker-compose up db` to start postgres

## Containerized Build & Serve
* Copy `./.env.shadow` or `./.env` and configure as needed 
* Run `docker-compose up --build`

## TODOs

* Implement some form of service auth between API and UI
  * current arch relies on API not publicly exposed outside of docker stack 