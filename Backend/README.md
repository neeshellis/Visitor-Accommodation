# Capstone - Visitor Accommodaton Application
Capstone BackEnd development.

GIT
I created a new Repository in GitHub called Capstone.  I then made two seperate branches named FrontEnd and BackEnd.  I used the BackEnd branch to then develop this Backend application for my myCapstone Project.

I created a full MVC BackEnd application in Visual Code. I had the following dependancies - axios, dotenv, express, mysql2, sequelize in my package.json file.  I created a file dbConnect.js. in my application so I could connect to an external SQL database.  

I then created a new Capstone SQL database in my Mac Terminal. I used WorkBench as my GUI to show the database stucture and data. Returning to Visual Code I activated the SQL server which I had previously connected to MySQL WorkBench GUI, there I could see my new database called myCapstone in the MySQL Workbench window.

In Visual code I then created 6 models - User, Accommodation, Booking, Review, Activies and Contact, the associated Routes and Controllers. Once the application was working successfully in WorkBench I could see the table structure for each model. I tested the models using ThunderClient to carry out the CRUD functions.  Once working correctly, I created a JSON dataset using a LLM, and an InitialController in the controllers folder to link the JSON data through to my database. 

To run this data to populate the myCapstone database. I had to ensure the SQL server was running in the VC terminal using the command json-server data.json, then started up the node package manager with the command run npm start.

Throughout this process I committed regularly to GitHub referencing the stages each time.





