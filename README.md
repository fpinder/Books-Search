# Book Search 

[ Book Search](https://floating-chamber-19128.herokuapp.com/) 

**Object**

*The Application [ Book Search](https://floating-chamber-19128.herokuapp.com/) hosted on Heroku is created has a Google app with two pages a search page and a saved page. `Search Page` - User can search for books via the Google Books API and render them on the search page. Users have the option to "View" a book, bringing them to the book on Google Books, view the "Book's Sale information" link as returned from the Google Books API or "Save" a book, saving it to the Mongo database. `Saved Page` - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.*

`index Page`

<a href="#"><img src="https://github.com/fpinder/Books-Search/blob/master/client/images/index.jpg" alt="Home Page"></a>

**The application also has an error checking process before the page is submitted to ensure that the user has entered a  Book Search name**

`Error Checking`

<a href="#"><img src="https://github.com/fpinder/Books-Search/blob/master/client/images/noBooks.jpg" alt="Error Checking"></a>

`Search Page`

**User can search for books via the Google Books API**

<a href="#"><img src="https://github.com/fpinder/Books-Search/blob/master/client/images/search.jpg" alt="Search Page"></a>


`SaleInfo Page`

**The "Book's Sale information"**

<a href="#"><img src="https://github.com/fpinder/Books-Search/blob/master/client/images/saleInfo.jpg" alt="SaleInfo Page"></a>

`Save Book Page`

**All books saved to the Mongo database**

<a href="#"><img src="https://github.com/fpinder/Books-Search/blob/master/client/images/saved.jpg" alt="Save Book Page"></a>


**The application  Book Search is organized with the following collection** 

```
{
  authors: ["Suzanne Collins"]
  description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
  image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
  title: "The Hunger Games"
}

```


**_Technology used_**

<a href="#"><img src="https://github.com/fpinder/Books-Search/blob/master/client/images/MERN-Stack.jpg" alt="MERN-Stack"></a>

*This app uses MongoDB, Express, REACT, and Node*

 Technology used   |  Role in the App                                                                  |
| ------------ | -------------------------------------------------------------------------------------- |
| * MongoDB (https://www.mongodb.com) | An open source database management system (DBMS) |
| * Express (https://expressjs.com/)  | Node js web application server framework, which is specifically designed for building single-page, multi-page, and hybrid web applications. It has become the standard server framework for node.js |
| * REACT (https://reactjs.org/)   | Declarative, efficient, and flexible JavaScript library for building user interfaces |
| * Node (https://nodejs.org/en/) |  platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. |


#
Lincense by <a href="https://creativecommons.org/licenses/by/3.0/" rel="nofollow">CC-BY</a>
