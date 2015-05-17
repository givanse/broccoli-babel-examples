#!/bin/bash

set -e

rm -rvf dist
broccoli build dist
cd dist
python -m SimpleHTTPServer
