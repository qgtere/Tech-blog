# the TECH blog
![badge](https://img.shields.io/badge/License-MIT-yellow)

## Description
 Reading about new technologies, technical concepts and recent advancements is important to developers, as well as, share information to others. This project gives the opportunity to do it through a blog where users can post their discovers or thoghts and comment on other's posts.

## Table of Content
* [Installation and Usage](#installation-and-usage)
* [Deployed Application](#deployed-application)
* [Techs](#techs)
* [Sneak Peek](#sneak-peek)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

## Installation and Usage
  To install the necessary dependencies, run the following command on oyur CLI:
```bash
npm i
```
Once you had installed the dependencies, create an .env file and change it with your own information:
```
    DB_HOST=localhost
    DB_USER=yourUser
    DB_PASS=yourPassword
```
Create the database schema:
```bash
    #work on MySQL
    mysql -u root -p
    # to create the DB schema
    SOURCE db/schema.sql    
```
Now you can start your server:
```bash
    npm start
```
Finally open your browser on `http://localhost:3001`

## Deployed Application
[Link to the app](https://stormy-taiga-77834.herokuapp.com)

## Techs
* Javascript
* Node.js
* Node Packages:
    * express
    * bcrypt    
    * dotenv
    * express-handlebars
    * express-session
    * mysql2
    * sequelize

## Sneak Peek
![Application Preview](./public/assets/the%20TECH%20blog.gif)

## License
 Licensed under the [MIT](https://opensource.org/licenses/MIT)
 license.

## Contributing 
 The open source community is a great place to inspire and learn thanks to contributions, feel free to make yours!
    If you have a suggestion that would make this better, please fork the repo and create a pull request.

## Questions
  You can see more of my work on [qgtere](https://github.com/qgtere).

  If you have any additional questions please don't hesitate to reach me on qg.tere@gmail.com.  