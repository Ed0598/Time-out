
let list_hole= document.getElementsByClassName("hole");
let i= 0
let score= document.getElementsByClassName("score");

//hole

for (let hole of list_hole){
    hole.addEventListener("click", (e) => {
        if (e.target.style.backgroundColor=="red"){
            e.target.style.backgroundColor='white'
            i= i+100
            score[0].textContent= "Score : " + i
        }
})}

function taupe(){
    
    let trous= list_hole.length
    let random= Math.floor(Math.random()*trous)
    let randomtrou= list_hole[random]
    randomtrou.style.backgroundColor="red" 
    
}
setInterval(taupe,1000)


