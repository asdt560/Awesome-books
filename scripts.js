const form = document.querySelector('#form');

function Book(title, author) {
  this.title = title;
  this.author = author;
}

class BookList {
  constructor() {
    this.container = [];
  }

  add(title, author) {
    this.container = JSON.parse(window.localStorage.getItem('bookarr'));
    if (this.container === null) {
      this.container = [];
    }
    const newBook = new Book(title, author);
    this.container.push(newBook);
    window.localStorage.setItem('bookarr', JSON.stringify(this.container));
  }

  remove(id) {
    this.container = JSON.parse(window.localStorage.getItem('bookarr'));
    this.container.splice(id, 1);
    window.localStorage.setItem('bookarr', JSON.stringify(this.container));
  }
}

const list = new BookList();

function record() {
  const title = form.querySelector('#title');
  const author = form.querySelector('#author');
  const titlename = title.value;
  const authorname = author.value;
  list.add(titlename, authorname);
}

window.addEventListener('load', () => {
  const arr = JSON.parse(window.localStorage.getItem('bookarr'));
  console.log(arr);
  const booklist = document.querySelector('#bookcontainer');
  arr.forEach((item) => {
    booklist.innerHTML += `<div class="book">
    <p class="title-author">"${item.title}" by ${item.author}</p>
    <button id=${arr.indexOf(item)} onclick="deleting(this.id)" class="remover">Remove</button>
    </div>`;
  });
});

// eslint-disable-next-line no-unused-vars
function deleting(id) {
  list.remove(id);
  window.location.reload();
}

form.addEventListener('submit', () => {
  record();
});
