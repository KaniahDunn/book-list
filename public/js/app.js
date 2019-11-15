var title = document.getElementsByClassName('title')
var author = document.getElementsByClassName('author')
var isbn = document.getElementsByClassName('isbn')
var robot = document.getElementsByClassName("delete");


Array.from(robot).forEach(function(element) {
      element.addEventListener('click', function(){
        const title = this.parentNode.parentNode.childNodes[1].childNodes[0].innerText
        const author = this.parentNode.parentNode.childNodes[1].childNodes[2].innerText
        const isbn = this.parentNode.parentNode.childNodes[1].childNodes[4].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'title': title,
            'author': author,
            'isbn': isbn
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
