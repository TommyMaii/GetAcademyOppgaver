function buyCoke() {
    cokesInStore--;
    isCokeInDelivery = true;
    updateView();
}

function insertCoin(index) {
    coinsInserted[index]++;
    updateView();
}

function returnCoins() {
    coinsReturned = [...coinsInserted];
    coinsInserted = [0, 0, 0, 0];
    updateView();
}

function takeCoins() {
    coinsReturned = [0, 0, 0, 0];
    updateView();
}
