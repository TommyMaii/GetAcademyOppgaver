function insertCoin(value) {
    let i = indexFromcoinValue(value)
    coinsInserted[i]++;
    totalCoins = valueFromCoinCounts(coinsInserted);
    updateView();
}

function takeCoins() {
    coinsReturned = [0, 0, 0, 0];
    updateView();
}

function pickUpCoke() {
    isCokeInDelivery = false;
    updateView();
}

function buyCoke(){
    if (cokesInStore == 0) {
        errorMessage = 'Maskinen er tom!';
        return;
    }
    if (!calculatePurchase()) {
        errorMessage = 'Put på flere penger!';
        updateView();
    }
    else if (isCokeInDelivery == false) {
        cokesInStore--;
        isCokeInDelivery = true;
        returnCoinsAfterPurchase();
        totalCoins = 0;
    }
    else {
        errorMessage = 'Du må plukke opp flasken som venter på deg først.';
    }
    updateView();
    errorMessage = '';
}

function calculatePurchase(){
    if(totalCoins >= 25){
        return true;
    }
    else {return false;}
}

function returnCoins(){
    coinsReturned = coinsInserted.slice();
    coinsInserted = [0, 0, 0, 0];
    totalCoins = 0;
    updateView();
}

function returnCoinsAfterPurchase() {
    let coinsLeftAfterPurchase = totalCoins - 25;
    coinsInsertedIntoMachine();
    
    while(coinsLeftAfterPurchase > 0){
        if(coinsLeftAfterPurchase >= 20 && coinsInMachine[3] > 0){
            coinsInMachine[3]--
            coinsReturned[3]++
            coinsLeftAfterPurchase -= 20;
        }
        else if(coinsLeftAfterPurchase >= 10 && coinsInMachine[2] > 0){
            coinsInMachine[2]--
            coinsReturned[2]++
            coinsLeftAfterPurchase -= 10;
        }
        else if(coinsLeftAfterPurchase >= 5 && coinsInMachine[1] > 0){
            coinsInMachine[1]--
            coinsReturned[1]++
            coinsLeftAfterPurchase -= 5;
        }
        else if(coinsLeftAfterPurchase >= 1 && coinsInMachine[0] > 0){
            coinsInMachine[0]--
            coinsReturned[0]++
            coinsLeftAfterPurchase -= 1;
        }else{
            coinsLeftAfterPurchase = 0;
        }
    }
    updateView();
}

function coinsInsertedIntoMachine(){
    for(coin in coinsInserted){
        coinsInMachine[coin] += coinsInserted[coin];
    }
    coinsInserted = [0, 0, 0, 0];
}