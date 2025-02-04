let numbersList =[];
let quantityOfNumbers = document.querySelector('#quantity');
let fromNumber = document.querySelector('#from');
let tillNumber = document.querySelector('#till');


function sort(){
    let tagContent = document.querySelector('#result');
    for(i = 0; i < quantityOfNumbers.value; i++){
        numbersList.push(getRandomNumber(fromNumber.value, tillNumber.value));
    }
    if(numbersList.length == quantityOfNumbers.value){
        let sortedNumbers = "";
        for(i = 0; i < numbersList.length; i++){
            sortedNumbers += numbersList[i] + ' ';
        }
        document.querySelector('#btn-restart').className = "container__button";
        tagContent.innerHTML = `Sorted numbers: ${sortedNumbers}`;      
    }

}; 

function restart(){
    clearInput();
    newSort();
};

function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + 1;
};

function clearInput(){
    quantityOfNumbers.value = '';
    fromNumber.value = '';
    tillNumber.value = '';
};

function newSort(){
    numbersList = [];
    sort();
    document.querySelector('#btn-restart').className = "container__button-unabled";
};



//
// document.querySelector('#btn-restart').className = "container__button-unabled";
// document.querySelector('#btn-restart').className = "container__button";
//