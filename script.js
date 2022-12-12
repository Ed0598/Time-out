//exercice 1 
const word = "prout";
let currentCharacter = 0;

function type() {
  console.log(word[currentCharacter]);
  currentCharacter++;

  if (currentCharacter >= word.length) {

    clearInterval(interval);
  }
}

const interval = setInterval(type, 1000); 

//exercice 2
let seconde = 0
let minute = 1
let n=2
function sec(){
    console.log(seconde);
    seconde++;

    if (seconde === 60){
        console.log("Une " + minute + " minute" + " s'est écoulée");
        minute++
    }
    else if (seconde == n*60){
        console.log (minute + " minutes "+ "se sont écoulées")
        minute++
        n++

    }
    else{
    }

}
setInterval(sec,1000)

