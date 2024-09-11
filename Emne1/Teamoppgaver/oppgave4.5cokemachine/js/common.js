function valueFromCoinCounts(coinCounts) {
    return coinCounts[0]
        + coinCounts[1] * 5
        + coinCounts[2] * 10
        + coinCounts[3] * 20;
}

function coinValueFromIndex(index){
    const values = [1, 5, 10, 20];
    return values[index];
}

function indexFromcoinValue(value){
    if(value == 1) return 0;
    if(value == 5) return 1;
    if(value == 10) return 2;
    if(value == 20) return 3;
}

