let ball=20

let el1 = document.getElementById("msg1")
el1.style.visibility = 'hidden' 

let el2 = document.getElementById("replay")
el2.style.visibility = 'hidden' 

function one() {
    logic(1)
    }

function two() {
        logic(2)
    }

function logic(num) {
    ball = ball - num
    document.getElementById("ballcounter").innerHTML = ball 
    let el = document.getElementById("pick")
    el.style.visibility = 'hidden' 
    computer(ball)
}

function computer(b){
    setTimeout(function() {

        if (b == 1){
            let el1 = document.getElementById("msg1")
            el1.style.visibility = 'visible' 
            document.getElementById("msg1").innerHTML = "You won " 
            let el = document.getElementById("pick")
            el.style.visibility = 'hidden' 
            let el2 = document.getElementById("replay")
            el2.style.visibility = 'visible'
            return
        }

        else if(b == 19 || b == 16 || b == 13 || b == 10 || b == 7 || b == 17 || b == 14 || b == 11 || b == 8
            || b == 5 || b == 2 || b == 4 ) {
                ball = ball - 1
                document.getElementById("ballcounter").innerHTML = ball
                document.getElementById("msg").innerHTML = "Computer took 1 ball"
            }

        else if(b == 18 || b == 15 || b == 12 || b == 9 || b == 6 || b == 3){
            ball = ball - 2
            document.getElementById("ballcounter").innerHTML = ball
            document.getElementById("msg").innerHTML = "Computer took 2 balls"
        }
        
        if (ball == 1){
            let el1 = document.getElementById("msg1")
            el1.style.visibility = 'visible' 
            document.getElementById("msg1").style.backgroundColor = "red";
            document.getElementById("msg1").innerHTML = "You lost" 
            let el = document.getElementById("pick")
            el.style.visibility = 'hidden' 
            let el2 = document.getElementById("replay")
            el2.style.visibility = 'visible'
            return
        }

    let el = document.getElementById("pick")
    el.style.visibility = 'visible' 
},1000)
  
   
}




