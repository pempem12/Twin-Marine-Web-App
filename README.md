Environment: Both the frontend and backend servers run off of Node 6.14.8. The frontend uses React and React-Bootstrap, while the backend uses Express. The frontend server runs off of port 3000, and all requests get proxied to the backend server on port 5000. Both need to be running simultaneously to function. Additionally, an instance of MongoDB must also be available to connect to.
Most of the configuration variables are available in server/config/config.js.
db.uri - The URL of the MongoDB instance.
server.port - The port the backend should listen to
tokens - Multiple API tokens and secrets to allow for access administration features.
    createParent - Token to create a Parent User with guest management privileges
    createShip - Token to create a ship that can be owned/accessed by one or more users
    sessionSecret - Secret used to encrypt the user session variable
Additionally, in react_client/package.json, a proxy field exists to forward all client requests to the backend. The value is the URL of the backend server.
There is one test account: test@gmail.com with a password of dtm