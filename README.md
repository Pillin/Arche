# Arche

Web interface for applying arithmetic calculation.

## Getting Started

Starting with the project it is necessary to have the following libraries.

### Prerequisites

```
node: v11.6.0
npm: 6.5.0-next.0
docker: 18.09.7
docker-compose: 1.17.1
```

### Installing

For installation, follow the step below

```
>> npm install
```

### Set Enviroment Variables

Before run the server, it is neccesary filling the enviroment file. The .env is used to use in the development mode, while .env.docker is used in the building the images.

## Running the server

For run the server, you need to run the next command:

```
>> npm start
```

After that, you can check in the http://localhost:3000

## Running the tests

Running unit tests such as integration tests, it is necessary to execute the following command

```
>> npm run test
```

### And coding style tests

For the code styles is following the airbnb guide. Although you can run the next command

```
>> npm run pretest
```

## Deployment

For the deployment you can execute the docker commands to create the image and container with the nexts steps. Before those commands, you need to fill the enviroments file[.env.docker]

### Images Creation

```
>> docker-compose build
```

### Container Creation in background

```
>> docker-compose up -d
```
