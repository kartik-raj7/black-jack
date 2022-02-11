let firstcard = Math.floor(Math.random() * 16);
let secondcard = Math.floor(Math.random() * 16);
let cards = [firstcard,secondcard]
let sum = firstcard+secondcard
let message = ""
let msg = document.getElementById("message");
let sums = document.getElementById("sum")
let cardss = document.getElementById("cards")
function render(){
if(sum<=20){
    message="Do you Want to draw a new card 🙂"
}
else if(sum===21){
    message="Congratulations!! You have Won 🥳 "
}
else {
    message="You have lost Better Luck Next Time 😥 😢 😭"
}
msg.innerText = message
sums.textContent="Sum: " + sum
cardss.textContent="Cards: " + cards[0] + " - " + cards[1] + " - " + cards[2]
}

function start(){
    render()
}
let thirdcard = " "
function newcard(){
thirdcard = Math.floor(Math.random()*11)
cards = [firstcard,secondcard,thirdcard]
sum+=thirdcard
render()   
}