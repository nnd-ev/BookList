export default class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn= isbn;
    }
    toString() {
        return `${this.title} ${this.author} ${this.isbn}`;
    }
}


// export {Book};