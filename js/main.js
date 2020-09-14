//Book Class --> Represents a Book
 import Book from './Book.js';
 import UI from './UI.js';
 import Store from './Store.js';

//UI Class --> Handle UI Tasks
 

//Store Class --> Handles Storage
  

//Implementation

//Event --> Display Books
document.addEventListener('DOMContentLoaded', UI.displayBook());

//Event --> Add a Book
document.querySelector('#book-form').addEventListener('submit', (e)=>{
//prevent actual submit
e.preventDefault();

    //get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

// Validate 
if(title ==='' || author ===''|| isbn ===''){
    UI.showAlert('All fields are required', 'danger');
    return;
}else{
    //instantiate book
    const book = new Book(title, author, isbn);
    // console.log(book);
    
    UI.addBookToList(book); //add book

    //add book to store
    Store.addBook(book);

    UI.clearFields(); //empty fields
    UI.showAlert('Successfully inserted data', 'success');
}

});

//Event --> Remove a Book
document.querySelector("#book-list").addEventListener('click', (e)=>{

    if(confirm("Are you sure")){
        //remove book from UI
        UI.deleteBook(e.target);
        //remove book from store
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
        UI.showAlert('Book removed', 'success');
    } 
});