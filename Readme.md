# What is YelpCamp?
**YelpCamp** is a web app where users can create, update and rate camping sites for rent.

It uses Node.js and MongoDB for backend, Express.js for rendering the views and Twitter Bootstrap for the UI component styling and positioning.

Cloudinary API is used for image uploads.

# How to Install

Prerequisites:
- Node.js
- MongoDB

Install the necessary dependencies
```
npm install
```

Register with Cloudinary ([Sign Up](https://cloudinary.com/users/register/free)).

Add .env file to the root directory containing your Cloudinary secrets:
```
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_KEY=...
CLOUDINARY_SECRET=...
```

If you wish to populate the database with example data, run:
```
node seeds/index.js
```

We use nodemon to run the project:
```
npm install nodemon -g
```

To run the project:
```
nodemon app.js
```
Then go to the browser: [http://localhost:3000/campgrounds](http://localhost:3000/campgrounds)