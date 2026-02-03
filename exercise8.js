const library = {
    name: "City Library",
    books: [],

    addBook(title, author, isbn) {
        const book = {title, author, isbn};
        this.books.push(book);
    },


    findBookByTitle(title) {
        return this.books.find(book => book.title === title) || null;
    },

    listAllBooks() {
        console.log("Books in library:");
        this.books.forEach(book=> console.log(book.title));
    }
};

const universityLibrary = Object.create(library);
universityLibrary.courses = [];

universityLibrary.addCourseBook = function(courseName, title, author, isbn){
    this.courses.push(courseName);
    this.addBook(title, author, isbn);
};

universityLibrary.addCourseBook(
    "Web Development",
    "Eloquent Javascript",
    "Marjin Haverbeke",
    "978-1593279509"
);

universityLibrary.addCourseBook(
    "Software Engineering",
    "Clean Code",
    "Robert C. Martin",
    "978-0132350884"
);

universityLibrary.addCourseBook(
    "Data Structures",
    "Grokking Alorithms",
    "Aditya Bhargava",
    "978-1617292231"
);

universityLibrary.listAllBooks();

console.log(
    "Search by author (Martin):",
    universityLibrary.books.filter(book => book.author.includes("Martin"))
);

