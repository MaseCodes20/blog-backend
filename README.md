# Blog Website  
This is a MERN app project  built by [Todd Mason](https://www.masecodes.com/)  
Inspired by websites like Medium, Tumblr and Instagram  
To view the app click on this [link](https://mcblogwebsite.onrender.com)  

### Techstack
- MongoDB
- Express
- React
- NodeJS
- Tailwind CSS  
- Redux toolkit


![BlogWebsite home page](https://user-images.githubusercontent.com/95643884/207961232-43d8ec46-053b-48bf-be88-86dd064de914.png)


## Getting Started

### Backend (server)
1. In your terminal  
`cd backend`  
`npm install`  

2. Create an account with MongoDB and cloudinary  
[MongoDB website](https://www.mongodb.com/home)  
[Cloudinary website](https://cloudinary.com/)

3. Create .env file to hold all of your environment variables  
```diff
+ The port you want your server to run on  
PORT=8000
  
+ Your node environment development or production
NODE_ENV=development  

+ Your MongoDB connection string URI
MONGO_URI=mongodb+srv://cluster0.example.mongodb.net  

+ Set your JWT secret
JWT_SECRET=yourSecret  

+ Your cloudinary key and cloud name
CLOUDINARY_KEY=cloudinayKey
CLOUD_NAME=cloudName
```

4. In config/allowedOrigins file add the port your frontend is running on to the allowedOrigins Array  
example: http://localhost:3000

5. Start up the server (keep it running in its own terminal)  
`npm run server`


### Frontend (client)  
1. Open a new terminal  
`cd frontend`  
`npm install`  

2. In the api/config file change the API_URL to the port your server is running on.  

3. Start the development server for your react application  
`npm run start` 
