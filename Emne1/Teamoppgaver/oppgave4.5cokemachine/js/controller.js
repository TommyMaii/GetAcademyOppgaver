// function buyCoke() {
//     if (cokesInStore == 0) {
//         errorMessage = 'Maskinen er tom!';
//         return;
//     }
//     if (valueFromCoinCounts(coinsInserted) < 25) {
//         errorMessage = 'Put på flere penger!';
//         updateView();
//     }
//     else if (isCokeInDelivery == false) {
//         cokesInStore--;
//         isCokeInDelivery = true;
//     }
//     else {
//         errorMessage = 'Du må plukke opp flasken som venter på deg først.';
//     }
//     updateView();
//     errorMessage = '';
// }

function insertCoin(value) {
    if(!isCokeInDelivery){
        let i = indexFromcoinValue(value)
        coinsInserted[i]++;
        totalCoins = valueFromCoinCounts(coinsInserted);
    }
    updateView();
}

function returnCoins() {
    if(!isCokeInDelivery){
        coinsReturned = [...coinsInserted];
        coinsInserted = [0, 0, 0, 0];
        totalCoins = 0;
    }
    updateView();
}

function takeCoins() {
    coinsReturned = [0, 0, 0, 0];
    updateView();
}

function pickUpCoke() {
    if(isCokeInDelivery) {
        for(coin in coinsInserted){
            coinsInMachine[coin] += coinsInserted[coin];
            coinsInserted[coin] = 0;
        }
    }
    isCokeInDelivery = false;
    updateView();
}

function calculatePurchase() {
    let total = 0;
    let stop = false;
    for (let i = 0; i < 4; i++) {

        while ((coinsInserted[i] > 0) && stop == false) {
            total += coinValueFromIndex(i);
            coinsInserted[i]--; 
            coinsInMachine[i]++;
            if (total >= 25) stop = true;;
        }
        if ((total >= 25) || stop == true) i = 4;
    }
    
}

function buyCoke(){
    if (cokesInStore == 0) {
        errorMessage = 'Maskinen er tom!';
        return;
    }
    if (!calculatePurchaseV2()) {
        errorMessage = 'Put på flere penger!';
        updateView();
    }
    else if (isCokeInDelivery == false) {
        cokesInStore--;
        isCokeInDelivery = true;
        returnCoinsV2();
        totalCoins = 0;
    }
    else {
        errorMessage = 'Du må plukke opp flasken som venter på deg først.';
    }
    updateView();
    errorMessage = '';
}

function calculatePurchaseV2(){
    if(totalCoins >= 25){
        return true;
    }
    else {return false;}
}


function returnCoinsV2() {
    let coinsLeftAfterPurchase = totalCoins - 25;
    
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

// function removeCoinsAfterPurchase(){
//     let cost = 25;

//         while(cost > 0){
//         if(cost >= 20 && coinsInserted[3] > 0){
//             coinsInserted[3]--;
//             totalCoins -= 20;
//             cost -= 20;
//         }
//         else if(cost >= 10 && coinsInserted[2] > 0){
//             coinsInserted[2]--;
//             totalCoins -= 10;
//             cost -= 10;
//         }
//         else if(cost >= 5 && coinsInserted[1] > 0){
//             coinsInserted[1]--;
//             totalCoins -= 5;
//             cost -= 5;
//         }
//         else if(cost >= 1 && coinsInserted[0] > 0){
//             coinsInserted[0]--;
//             totalCoins -= 1;
//             cost -= 1;
//         }else{
//             cost = 0;
//         }
//     }
// }