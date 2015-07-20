#!/bin/bash

set -e

rm -rf dist/

broccoli build dist

node dist/fruits.js

ls -l dist
