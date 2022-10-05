## HOW TO INSTALL PRODUCTION

## Clone the repository

    git clone "url git"

## Checkout branch master

    git checkout master
## Build docker

    cd {repo}
    docker-compose build --no-cache
    docker-compose up -d


## Install all the dependencies using composer and Generate key

    docker-compose exec app composer install

## Run a optimize && cache

    docker-compose exec app php artisan optimize
    docker-compose exec app php artisan route:cache
    docker-compose exec app php artisan config:cache
    docker-compose exec app php artisan view:cache

## Run get list route

    docker-compose exec app php artisan route:list

## Generate a new application key

    docker-compose exec app php artisan key:generate

## Run the database migrations and seeder (Set the database connection in .env before migrating)

    docker-compose exec app php artisan migrate --seed

## create controller 
    
    docker-compose exec app php artisan make:controller Api/ProductController --api

## create model 

    docker-compose exec app php artisan make:model Stores

