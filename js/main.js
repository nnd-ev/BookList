//Book Class --> Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn= isbn;
    }
    toString() {
        return `${this.title} ${this.author} ${this.isbn}`;
    }
}

//UI Class --> Handle UI Tasks
class UI{
    static displayBook(){
        const StoredBook = [
        {
            title: 'Book One',
            author: 'John Doe',
            isbn : '13123'
        },
        {
            title: 'Book Two',
            author: 'John Doe',
            isbn : '13123'
        }
    ];

    const books = StoredBook;

    books.forEach((book)=>{
        UI.addBookToList(book);
    })
}

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        `;

        list.appendChild(row);
    }

}

//Store Class --> Handles Storage

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

    //instantiate book
    const book = new Book(title, author, isbn);
    // console.log(book);

    UI.addBookToList(book);
});



//Event --> Remove a Book