/* JavaScript to show/hide the popup */
const lipaButton = document.getElementById('lipa-button');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

lipaButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});
