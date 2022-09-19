const arr = [
  {
    title: 'Example Book',
    author: 'John Doe',
  },
];

const booklist = document.querySelector('#bookcontainer');
arr.forEach((book) => {
  booklist.innerHTML = `<div class="book">
  <p class="title">${book.title}</p>
  <p class="author">${book.author}</p>
  <button class="remover">Remove</button>
</div>`;
});