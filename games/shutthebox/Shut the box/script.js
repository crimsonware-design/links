let dice = document.querySelector(".dice")
let totalHtml = document.querySelector(".total")
let total = 0;
let dice1 = document.querySelector(".dice-1");
let dice2 = document.querySelector(".dice-2");
let numbers = document.querySelector(".numbers")
let restart = document.querySelector(".restartButton")

dice.addEventListener("click",function(e){
    if(total === 0)
{
    total = 0;

    let rand = randomNumber(1,6);
    total+=rand;
    dice1.innerHTML = switchDice(rand)

    rand = randomNumber(1,6);
    total+=rand;
    dice2.innerHTML = switchDice(rand)

    totalHtml.textContent = "Remaining: " + parseInt(total);
}
})

function randomNumber(min, max){
     
    return (Math.trunc(Math.random()* max) + min)
}

numbers.addEventListener("click",function(e){
    let target = e.target.closest("div.number")
    let targetNum = parseInt(target.textContent)
    if(!Array.from(target.classList).includes("used") && targetNum<=total){
    
    total-=targetNum;
    total !== 0 ? totalHtml.textContent = "Remaining: " + parseInt(total) : totalHtml.textContent = "Roll Again "; 
    target.classList.add("used")
    }
})
restart.addEventListener("click",function(e){
    e.preventDefault();
    location.reload()
})

function switchDice(num){
    switch (num){
        case 1:
            return `<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16Zm-68-64a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"></path>`
            break;
        case 2:
            return `<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16Zm-88-84a12,12,0,1,1-12-12A12,12,0,0,1,120,108Zm40,40a12,12,0,1,1-12-12A12,12,0,0,1,160,148Z"></path>`
            break;
        case 3:
            return `<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16ZM104,92A12,12,0,1,1,92,80,12,12,0,0,1,104,92Zm36,36a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm36,36a12,12,0,1,1-12-12A12,12,0,0,1,176,164Z"></path>`
            break;
        case 4:
            return `<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16Zm-96-92a12,12,0,1,1-12-12A12,12,0,0,1,112,100Zm56,0a12,12,0,1,1-12-12A12,12,0,0,1,168,100Zm-56,56a12,12,0,1,1-12-12A12,12,0,0,1,112,156Zm56,0a12,12,0,1,1-12-12A12,12,0,0,1,168,156Z"></path>`
            break;
        case 5: 
            return `<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16ZM104,92A12,12,0,1,1,92,80,12,12,0,0,1,104,92Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,92Zm-72,72a12,12,0,1,1-12-12A12,12,0,0,1,104,164Zm36-36a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm36,36a12,12,0,1,1-12-12A12,12,0,0,1,176,164Z"></path>`
            break;
        case 6:
            return `<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16ZM104,84A12,12,0,1,1,92,72,12,12,0,0,1,104,84Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,84Zm-72,44a12,12,0,1,1-12-12A12,12,0,0,1,104,128Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,128Zm-72,44a12,12,0,1,1-12-12A12,12,0,0,1,104,172Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,172Z"></path>`
            break;
    }
}