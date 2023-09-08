'use strict';
const cube = document.querySelectorAll('.cube');
let currentClass = '';
const radioGroup = document.querySelector('.radio-group');

function changeSide() {
  const checkedRadio = radioGroup.querySelector(':checked');
  const showClass = 'show-' + checkedRadio.value;

  for (let i = 0; i < cube.length; i++) {

    if (currentClass) {
      cube[i].classList.remove(currentClass);
    }
    cube[i].classList.add(showClass);
  }
  currentClass = showClass;
}
changeSide();

radioGroup.addEventListener( 'change', changeSide );

