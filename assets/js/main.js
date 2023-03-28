
const btn = document.getElementById('btn');
const body = (document.querySelector('body')).classList;
const heart = document.querySelector('heart');

btn.addEventListener('click', () => {
  body.toggle('on');
});

