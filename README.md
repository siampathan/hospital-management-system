# Description :point_left:

It's a web application for managing hospitals rooms and determining the patient's priority for isolation. The app provides a centralised hub for managing the patients and planning their distribution across hospital’s rooms.

It allows nurses to keep track of the patients and their diseases in real time and to have an overview over the patients and rooms, and better manage the rooms assignment across patients.

# Prerequisites

- [x] Node.js 6.9.1 or later - install from https://nodejs.org/

# Installing - :electric_plug:

1. Download the repository

```
git clone https://github.com/siampathan/hospital-management-system.git
```

2. Open the Terminal (Linux & MacOS) or PowerShell (Windows) and change directory to the project folder.
3. Type ‘npm install’ in the Terminal (PowerShell) and press Enter. All the dependencies would be installed.
4. Go back to the Terminal (PowerShell) and be sure that you are pointing inside the project folder. To open the application, type ‘node app.js’ and press Enter.
5. The application should be live on the local port 3000.
6. Type http://localhost:8000/ into a browser.
7. To login use the username: admin and the password: admin
8. Now you should be inside the application

# App Modules and Code organisation

### Modules

| Module        | Core             | Patients                         | Diseases                     | Rooms                      |
| ------------- | ---------------- | -------------------------------- | ---------------------------- | -------------------------- |
| Functionality | - login system   | - add / delete patients          | - add / delete diseases      | - assign rooms to patients |
| .             | - add users      | - update patient's diagnosis     | - assign disease to patients | - add / remove rooms       |
| .             | - view dashboard | - view patient’s page            |
| .             | .                | - retrieve patient's information |

# Technologies

### Backend - NodeJs

### Frontend HTML,CSS,jquery

### Database - MongoDB

### Databse Schema

![Database schema](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/database_design.jpg)

Inside the file, you need to change the database link from
mongoose.connect("mongodb://admin:admin123@ds145220.mlab.com:45220/nhs-app"); to mongoose.connect("your-database-link");
