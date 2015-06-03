
## Install dependencies:

    npm install
    npm install -g broccoli-cli

## Build and execute:

    broccoli build dist

Serve the `index` file, example:

    cd dist/
    python -m SimpleHTTPServer
    # visit http://localhost:8000/

You should see:

![es6 simple website](screenshot.png)
