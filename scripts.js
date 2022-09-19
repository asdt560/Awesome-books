const form = document.querySelector('#form');

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function record() {
  let arr = JSON.parse(window.localStorage.getItem('bookarr'));
  if (arr === null) {
    arr = [];
  }
  const title = form.querySelector('#title');
  const author = form.querySelector('#author');
  const titlename = title.value;
  const authorname = author.value;
  const newbook = new Book(titlename, authorname);
  arr.push(newbook);
  window.localStorage.setItem('bookarr', JSON.stringify(arr));
}

window.addEventListener('load', () => {
  const arr = JSON.parse(window.localStorage.getItem('bookarr'));
  console.log(arr);
  const booklist = document.querySelector('#bookcontainer');
  arr.forEach((item) => {
    booklist.innerHTML += `<div class="book">
    <p class="title">${item.title}</p>
    <p class="author">${item.author}</p>
    <button class="remover">Remove</button>
  </div>`;
  });
});

form.addEventListener('submit', () => {
  record();
});
