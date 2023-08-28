## Basic setup

      - Install docker from https://docs.docker.com/get-docker/

## Dockerfile

      - FROM node:latest
      - WORKDIR /usr/app
      - COPY . .
      - RUN npm i
      - EXPOSE 3001
      - CMD npm start

## Naming conventions

      - docker build -t <name> .

## Running docker

      - docker run -d -t 3002:3001 <name>

## To copy this demo project

      - docker pull bitcoin06/demoapplication
      - docker run -d -t 3002:3001 demoapplication

## AWS node document

https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html
