document.addEventListener('DOMContentLoaded', function () {
const row = document.getElementById('dogImages');
for(let i = 0; i <30; i++) {
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((images) => {
   const col = document.createElement('div')
    col.className = 'col-sm-12 col-lg-4 mb-3';
    const card = document.createElement('div')
    card.className = 'card mb-3';
    const cardImg = document.createElement('img')
    cardImg.className = 'img'
    cardImg.src = images.message;
    cardImg.alt = 'dog-image';
    const cardBody = document.createElement('div')
    cardBody.className = 'card-body';
    const cardText = document.createElement('div')
    cardText.className = 'card-text';
    cardText.textContent = `Status: ${images.status}`;
    //Append card text to card body
    cardBody.appendChild(cardText);
    //append card body and image to card
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    //Append card to column and column to row
    col.appendChild(card);
    row.appendChild(col);
})
.catch((error) => console.error(error));
};
});