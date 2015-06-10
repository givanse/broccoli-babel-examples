# es6-fruits

A minimal example that shows you how to transpile a single ES6 script and then execute it through the command line.

## Install dependencies

    npm install
    npm install -g broccoli-cli

## Build and run 

    broccoli build dist
    node dist/fruits.js

Expected output:

    ID: 100 Name: strawberry
    ID: 101 Name: grapefruit
    ID: 102 Name: plum
    List total: 3
