# Book Search 

[ Book Search](https://floating-chamber-19128.herokuapp.com/) 

**Object**

*The Application [ Book Search](https://floating-chamber-19128.herokuapp.com/) hosted on Heroku is created has a Google app with two pages a search page and a saved page. `Search Page` - User can search for books via the Google Books API and render them on the search page. Users have the option to "View" a book, bringing them to the book on Google Books, view the "Book's Sale information" link as returned from the Google Books API or "Save" a book, saving it to the Mongo database. `Saved Page` - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.*

`index Page`

<a href="#"><img src="https://github.com/fpinder/Books-Search/blob/master/client/images/index.jpg" alt="Home Page"></a>

*The application also has an error checking process before the page is submitted to ensure that the user has entered a  Book Search name*

`Error Checking`

<a href="#"><img src="https://github.com/fpinder/Books-Search/blob/master/client/images/noBooks.jpg" alt="Error Checking"></a>

**The application  Book Search is organized with the following structure:** 

```
Burger
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars


```


**_Technology used_**

*This app uses JavaScript, Node.js, Mysql and 5 NPM packages: Express, Express-handlebars, express-validato, Body-parser, dotenv and Nodemon*

 Files Used   |  Role in the App                                                                  |
| ------------ | -------------------------------------------------------------------------------------- |
| node_modules | node modules includes the  NPM packages |
| express         | used to handle routing |
| .gitignore   | This will tell git not to track these files, and thus they won't be committed to Github |
| package.json | JSON Source file the has all the dependencies.                    |
| bodyParser  | Used to sets up the Express app to handle data parsing. |
| Dotenv  |Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. | 
| Express | A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.  |
| Express-handlebars | Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.  |
| Nodemon | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. | 
| express-validator | Express middleware for the validator module. |

**Config Setup:** *`connection.js` setup the code to connect Node to MySQL. `orm.js` methods that will execute the necessary MySQL commands in the controllers. These methods will be used to retrieve and store data in your database* 

**Model Setup:** *`burger.js` the code that will call the ORM functions using burger specific input for the ORM*

**Controller Setup:** *`burgers_controller.js` control the routers for the app*

**View Setup:** *`index.handlebars` file used by Handlebars and `index.handlebars` to have the template that Handlebars can render onto* 

**DB Setup/excerpts** *The application's data is stored in MySql via the `schema.sql.` and `seeds.sql`* 

#
Lincense by <a href="https://creativecommons.org/licenses/by/3.0/" rel="nofollow">CC-BY</a>
