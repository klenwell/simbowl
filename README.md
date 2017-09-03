# Sumobo

Sumobo is an open source game of sport.


## Installation

1. Clone repository and install dependencies:

    git clone git@github.com:klenwell/sumobo.git
    cd sumobo && npm install

2. Run tests:

    npm test

3. Start server and open your browser to output url:

    npm start


## Development

Sumobo is developed using [Webpack](https://webpack.js.org/) to build and bundle assets. It includes [Babel](https://babeljs.io/) to support next-generation Javascript.

To install:

    npm install

### Local Server

To run the local server:

    npm start

This should also launch the watch option with `webpack-dev-server` which will automatically rebuild the application javascript. To manually run the webpack build:

    npm run build

### Tests

    npm test
