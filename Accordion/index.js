const accordionContainer = document.querySelectorAll('.container');

accordionContainer.forEach((item, index) => {
  let label = item.querySelector('.label');

  label.addEventListener('click', () => {
    let description = item.querySelector('.content');
    description.classList.toggle('hidden');
    let icon = item.querySelector('img');
    if (description.classList.contains('hidden')) {
      // Scrollheight property return the height of
      // an element including padding
      //description.style.height = `${description.scrollHeight}px`;
      icon.src = './assets/images/icon-plus.svg';
    } else {
      icon.src = './assets/images/icon-minus.svg';
    }
    // function to pass the index number of clicked label
    removeOpenedContent(index);
  });
});

function removeOpenedContent(index) {
  accordionContainer.forEach((item2, index2) => {
    let description = item2.querySelector('.content');

    if (index != index2) {
      description.classList.add('hidden');
      let icon = item2.querySelector('img');
      icon.src = './assets/images/icon-plus.svg';
    }
  });
}
