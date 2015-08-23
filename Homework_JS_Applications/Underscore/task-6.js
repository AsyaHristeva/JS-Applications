/* 
Create a function that:
*   **Takes** a collection of books
    *   Each book has propeties `title` and `author`
        **  `author` is an object that has properties `firstName` and `lastName`
*   **finds** the most popular author (the author with biggest number of books)
*   **prints** the author to the console
	*	if there is more than one author print them all sorted in ascending order by fullname
		*   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/


function solve(){
  return function (books) {  
	 var authors = _.chain(books)
	 .map(function(book){
		book.authorFullName = book.author.firstName + " " + book.author.lastName;
		return book;
	 })
	  .sortBy('authorFullName')
	  .countBy('authorFullName')
	  .pairs()
	  .value();
	  
	  var maxBooks = _.chain(authors)
	  .max(_.last)
	  .last()
	  .value();
	  
	  var mostPopularAuthors = _.chain(authors)
	  .filter(function(pair) {
		return pair[1] === maxBooks;  
	  })
	  .each(function(pair) {
		  console.log(pair[0]);   
	  }); 
	  
  };
}
  
module.exports = solve;
