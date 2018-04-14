# Cute or Not

A [chingu](https://chingu.io/) collaboration, full stack application that allows one to upload a pet and have users vote on the pet's cuteness (or lack thereof).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

| Prerequisite                                | Version |
| ------------------------------------------- | ------- |
| [Node.js](http://nodejs.org) /  npm (comes with Node)  | `~ ^8.9.5` / `~^5.6.0` |
| [yarn](https://yarnpkg.com/lang/en/docs/install/) | `~ ^1.3.2` |
| [Git](https://git-scm.com/downloads) | `~ ^2` |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `~ ^3.4.9`  |




### Installing

Create a new directory and initialize git

```
mkdir cuteornot
cd cuteornot
git init
```

Pull from github and install packages

```
git pull https://github.com/chingu-voyage4/Bears-Team-23.git
yarn
cd client
yarn
cd ..
```

If using mongoDB locally see below to start the db (if using mlab skip this step)

```
mkdir data
mongod --port 27017 --dbpath=./data
```

create .env files
>In the root of the project create a .env file with the following contents
```
CONSUMER_KEY=<Twitter Consumer Key>
CONSUMER_SECRET=<Twitter Consumer Secret>
MONGOLAB_URI=<mongoDB connection string>
COOKIE_KEY=<Cookie Secret Key>
GOOGLE_CLIENT_ID=<Google Client ID>
GOOGLE_CLIENT_SECRET=<Google Client Secret>
```
>In the client folder of the project create a .env file with the following contents
```
REACT_APP_CLOUDINARY_CLOUD_NAME=<Cloudinary Cloud Name>
REACT_APP_CLOUDINARY_UPLOAD_PRESET=<Cloudinary Upload Preset>
```

Run development environment
```
yarn dev
```
The Browser should now open up with the application in development mode.

## Running the tests

```
cd client
yarn test
```

### Break down into end to end tests

see here for more testing details
https://github.com/chingu-voyage4/Bears-Team-23/wiki/Creating,-running,-and-adding-automated-tests

## Deployment

https://github.com/chingu-voyage4/Bears-Team-23/wiki/Create-a-new-production-site

## Built With

* [MongoDB](https://www.mongodb.com/) - Database
* [Express](https://expressjs.com/) - Node.js web application framework
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Node.js](https://nodejs.org/) - JavaScript runtime
 
## Authors

* **Kevin Briggs** - *Project Manager / Coder* - [kevin578](https://github.com/kevin578)
* **John Gillespie** - *Team Member / Coder* - [John Gillespie](https://github.com/olddognewtrix123)
* **Chris Mayer** - *Team Member / Coder* - [Chris Mayer](https://github.com/mayerxc)
* **Dereje Getahun** - *Team Member / Coder* - [Dereje Getahun](https://github.com/Dereje1)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Chingu - https://chingu.io/
