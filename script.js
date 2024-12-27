  	/* key press effect */
document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', evt => {
    key.classList.add('pressed');
    setTimeout(_ => {
      key.classList.remove('pressed');
    }, 250);
  });
});

const numbers = document.querySelectorAll('.number');
const result = document.getElementById('numbers');
const key = document.getElementById('key');
const icon = document.getElementById('icon');
const code = '4316';

 	 /* number */
for (let i = 0,c = numbers.length; i < c; i++){
  const number = numbers[i];
  number.addEventListener('click', evt => {
    if(result.innerHTML === '0'){
      result.innerHTML = '';
    }
    result.innerText += number.innerText;
  });
};

  	/* clear */
document.getElementById('clear').addEventListener('click', clear);

  /* key */
key.addEventListener('click', evt => {
  const resultLength = result.innerHTML.length;
  if(result.innerHTML === code){
    icon.innerHTML = '&#10004;'
    setTimeout(_ => {
      window.location.href = 'gift.html';
    }, 1000);
  } else {
    icon.innerHTML = '&#10008;'
    setTimeout(_ => {
      icon.innerHTML = '';
      clear();
    }, 2000);
  }
});

function clear(){
  result.innerHTML = '0';
}