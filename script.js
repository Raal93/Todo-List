const input = document.querySelector('.lists')
const pencil = document.querySelector('#pencil')
const ul = document.querySelector('.todos')
// /////////////////////////////////////////////
const save = document.querySelector('.save')
const clear = document.querySelector('.clear')
const tips = document.querySelector('.tips')
// /////////////////////////////////////////////
const all = document.querySelector('.all')
const active = document.querySelector('.active')
const performed = document.querySelector('.performed')


pencil.addEventListener('click', () => input.classList.toggle('display'))

input.addEventListener('keypress', e => {
  if(e.which === 13){
    const text = input.value
    input.value = ''
    add(text)
  }
})

function add(text) {
  const li = document.createElement('li')
  const span = document.createElement('span')
  const i = document.createElement('i')
  li.textContent = text
  i.classList.add('fas', 'fa-trash-alt')
  span.insertAdjacentElement('afterbegin', i)
  li.insertAdjacentElement('afterbegin', span)
  ul.insertAdjacentElement('afterbegin', li)
}

// закреслення і видалення
ul.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
  } else if(e.target.tagName === 'I'){
    e.target.parentElement.parentElement.remove()
  }
})

//активні
active.addEventListener('click', () => {
  const li = document.querySelectorAll('.todos li')
  for (let i = 0; i < li.length; i++) {
    li[i].style.display = 'list-item'
    if(li[i].classList.contains('checked')){
      li[i].style.display = 'none'
    }
  }
})

//всі
all.addEventListener('click', () => {
  const li = document.querySelectorAll('.todos li')
  for (let i = 0; i < li.length; i++) {
    li[i].style.display = 'list-item'
  }
})

performed.addEventListener('click', () => {
  const li = document.querySelectorAll('.todos li')
  for (let i = 0; i < li.length; i++) {
    li[i].style.display = 'list-item'
    if(!li[i].classList.contains('checked')){
      li[i].style.display = 'none'
    }
  }
})


//видалити все
clear.addEventListener('click', () => {
  ul.innerHTML = ''
  localStorage.removeItem('todo')
})


save.addEventListener('click', () => {
  localStorage.setItem('todo', ul.innerHTML)
})
load()
function load() {
  if (localStorage.getItem('todo')) {
    ul.innerHTML = localStorage.getItem('todo')
  }
}