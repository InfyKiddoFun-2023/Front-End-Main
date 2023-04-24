const searchInput = document.querySelector('input[type="text"]');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('keyup', function(event) {
  const searchTerm = event.target.value.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();

    if(title.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
