function removeClass(selector, className) {
  for(var i = 0; i < selector.length; i++) {
    selector[i].classList.remove(className)
  }
}

var customRadio = document.querySelectorAll('.custom-radio')

for(var i = 0; i < customRadio.length; i++) {
  customRadio[i].addEventListener('click', function(i) {
    removeClass(customRadio, 'choice-active')
    customRadio[i].classList.add('choice-active')
  }.bind(this, i))
}

document.getElementById('quiz-form').onsubmit = function(e) {
  e.preventDefault()
  var ans = serialize(this)
  var ansAll = ans.split('&')

  ansAll.map(function(separateAns) {
    var answer = separateAns.split('=')
    console.log(answer[1])
  })
}

function hiddenPage(selector) {
  for (var i = 0; i < selector.length; i++) {
    selector[i].style.display = 'none'
  }
}

function checkPage(currentPage, max) {
  if(currentPage <= 0) {
    document.querySelector('.btn-prev').setAttribute('disabled', 'disabled')
  }
  else {
    document.querySelector('.btn-prev').removeAttribute('disabled')
  }

  if(currentPage >= max) {
    document.querySelector('.btn-next').setAttribute('disabled', 'disabled')
  }
  else {
    document.querySelector('.btn-next').removeAttribute('disabled')
  }
}

var currentPage = 0;

document.querySelector('.btn-next').onclick = function() {
  var pageContent = document.querySelectorAll('.page-content')

  hiddenPage(pageContent)
  currentPage++
  pageContent[currentPage].style.display = 'block'
  checkPage(currentPage, pageContent.length - 1)
}

document.querySelector('.btn-prev').onclick = function() {
  var pageContent = document.querySelectorAll('.page-content')

  hiddenPage(pageContent)
  currentPage--
  pageContent[currentPage].style.display = 'block'
  checkPage(currentPage, pageContent.length - 1)
}
