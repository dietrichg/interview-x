# Soccer.io
## Overview
* Allows admins to Sign Up and Login using passport. (This gives all users admin at the moment, but roles are easily configurable.)
* Also allows public access to see current match scores.

## Project Setup
* `$ npm install` inside the root directory
* Database Credentials: Make sure you have an instance of mysql up and running. Enter your database credentials in `./config/database.js`
* Database Initiation: run `$ node deploy/create_db.js`
* You should have 4 matches in your system when accessing the site at localhost:1337
* Sign Up and enter your desired credentials. Don't worry I'm not exporting them anywhere.
* You will automatically be signed in using Passport.
* Create new matches, and logout! They are persistent for logged in and logged out users using a public facing API.
