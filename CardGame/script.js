const cardsArray = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H"];
let shuffledCards = cardsArray.sort(() => 0.5 - Math.random());
let gameBoard = document.getElementById("gameBoard");
let selectedCards = [];
let matchedCards = [];

shuffledCards.forEach((value, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = value;
    
    let front = document.createElement("div");
    front.classList.add("front");
    front.textContent = value;
    
    let back = document.createElement("div");
    back.classList.add("back");
    back.textContent = "?";
    
    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
});

function flipCard() {
    if (selectedCards.length < 2 && !this.classList.contains("flipped")) {
        this.classList.add("flipped");
        selectedCards.push(this);
    }
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 600);
    }
}

function checkMatch() {
    if (selectedCards[0].dataset.value === selectedCards[1].dataset.value) {
        matchedCards.push(...selectedCards);
        selectedCards = [];
        if (matchedCards.length === cardsArray.length) {
            document.getElementById("message").textContent = "You Win!";
        }
    } else {
        selectedCards.forEach(card => card.classList.remove("flipped"));
        selectedCards = [];
    }
}