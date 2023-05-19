const cardArray = [
    {
        name : "fires",
        img:'images/fries.png'
    },
    {
        name : "cheeseburger",
        img:'images/cheeseburger.png'
    },
    {
        name : "hotdog",
        img:'images/hotdog.png'
    },
    {
        name : "ice-cream",
        img:'images/ice-cream.png'
    },
    {
        name : "milkshake",
        img:'images/milkshake.png'
    },
    {
        name : "pizza",
        img:'images/pizza.png'
    },
    // 1st pair end here

    // 2nd pair starting
    {
        name : "fires",
        img:'images/fries.png'
    },
    {
        name : "cheeseburger",
        img:'images/cheeseburger.png'
    },
    {
        name : "hotdog",
        img:'images/hotdog.png'
    },
    {
        name : "ice-cream",
        img:'images/ice-cream.png'
    },
    {
        name : "milkshake",
        img:'images/milkshake.png'
    },
    {
        name : "pizza",
        img:'images/pizza.png'
    },
        // 2nd pair starting

]
cardArray.sort(()=>0.5 - Math.random())
// console.log(cardArray)
const gridDisplay = document.querySelectorAll('#grid')
// console.log(gridDisplay)

function createBoard(){
    for (let i = 0; i < 10; i++) {
      const card =  document.createElement('img')
      card.setAttribute('src','images/blank.png')
      card.setAttribute('data-id',i)
    //   console.log(card ,i)
        // gridDisplay.appendChild(card)
        // gridDisplay

    }
}
createBoard()