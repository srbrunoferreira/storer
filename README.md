# storer
# Front-end

## React dependencies

* Material UI
* Axios

# API structure

## Node dependencies

* Express
* Mongoose

## Folder structure

`/controllers` - a controller receives the incoming request, distributes to the services layer and then returns a response. The controllers are managers/supervisors.

`/middlewares` - stores more specific functions.

`/models` - stores the database models.

`/routes` - stores the routes of the api.

`/services` - a service receives the data it needs to execute a task and returns the result to the controller layer. Figures out the individual details algorithms/business logic/database calls/etc involved in completing the request.
