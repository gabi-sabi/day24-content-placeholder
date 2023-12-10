const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="./coffee.jpg" alt="morning coffee" />'
  title.innerHTML = 'New day'
  excerpt.innerHTML =
    'With the new day comes new strength and new thoughts.'
  profile_img.innerHTML =
    '<img src="./eleanor.png" alt="Eleanor Roosevelt photo" />'
  name.innerHTML = 'Eleanor Roosevelt'
  date.innerHTML = 'Date: long time ago but still true'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
