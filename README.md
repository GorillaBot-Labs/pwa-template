This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# PWA Template
<image src="https://travis-ci.com/GorillaBot-Labs/pwa-template.svg?branch=master"/>

## Project Setup

### Staging
1. App: `heroku apps:create staging-project-name -r staging`
1. Database: `heroku addons:create -r staging heroku-postgresql:hobby-dev --version=12`

### Production
1. App: `heroku apps:create project-name -r production`
1. Database: `heroku addons:create -r production heroku-postgresql:hobby-dev --version=12`

## Development

### Dependencies

`yarn install`

This will install all backend and client dependencies.

### Database

1. Download the [postgres app](https://postgresapp.com/)
2. `yarn db:create`
3. `yarn db:seed`

### Client and Server

`yarn start`

Runs the app (client and api) in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

*If you need to run the client and server in separate processes use `yarn client` and `yarn server`.*

## Testing

- `yarn client:test`: Run the client react test suite
- `yarn backend:test`: Run the backend test suite (i.e. api, services, db)
- `yarn cypress:open`: Launches the cypress test interface for monitoring our end-to-end testing infrastructure. Make sure you have a test client/server instance running to accept the requests (`NODE_ENV=test yarn start`). 

## Deployment

`yarn run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Staging
1. Push to Heroku: `git push staging master`
1. Migrate database: `heroku run -r staging yarn db:migrate`

### Production
1. Push to Heroku: `git push production master`
1. Migrate database: `heroku run -r production yarn db:migrate`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
