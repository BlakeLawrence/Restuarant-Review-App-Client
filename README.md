# Restuarant Review App

This is a yelp clone app.

This is not my own creation, it was a tutorial that I followed along to, but it served as a great way to re-enforce many React concepts I have previously learnt and it also taught me new React concepts I hadn't used previously.

When following along, I decided to do a few things my own way which meant i had to rely on my own knowledge to get the app working properly. for example, I did not use Axios and so I had to alter my requests (Fetch, Post, Put, Delete) so that they worked.

## Try it out here

https://restuarant-reviews.netlify.app
allow 5 seconds for current data to display

## Installation 💻

Clone both the front end (client) and back end (server) repositories to your computer:

```bash
 https://github.com/BlakeLawrence/Restuarant-Review-App-Client.git
```

```bash
 https://github.com/BlakeLawrence/Restuarant-Review-App-Server.git
```

Open up each repo up separately in a window of your code editor of choice (I use VS Code).
Install the dependancies for each repo with the following command:

```bash
 npm i
```

## Run Locally

In each repository, run this command (the front end will run on localhost 3000 and the back end will run on localhost 5000)

```bash
  npm run start
```

## Difficulties

#### Heroku deployment

I used this project as an opportunity to practice deploying the client repo on Netlify and the server repo on Heroku. I struggled a little bit with Heroku as I forgot that they sometimes change the environment variable name to something standard and I never realized this had happened. Once I noticed it, I was able to change the variable name within my .env file accordingly and it sorted the problem out.

## What did I learn

- React Router
- React Context
- React useHistory hook (I found this a great tool to have in my arsenal, it's easy to use and will no doubt come in handy for future projects)
- useParams (pretty straight forward but saves time)
- Creating a DB and Tables locally on my PC by installing PostgreSQL 14 (I then moved these out to heroku by creating "create, populate, drop and reset" scripts)

## Authors

- [@BlakeLawrence](https://github.com/BlakeLawrence)
