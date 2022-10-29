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

    if(ball === 1){
        lastball()
        document.getElementById("msg1").className +=" text-center text-success "
        document.getElementById("msg1").innerHTML = "You won "  
    }
    else{
        computer(ball)
    }
}

function lastball(){
    let el1 = document.getElementById("msg1")
    el1.style.visibility = 'visible' 
    let el = document.getElementById("pick")
    el.style.visibility = 'hidden' 
    let el2 = document.getElementById("replay")
    el2.style.visibility = 'visible'
}

function computer(b){
    setTimeout(function() {
        if(b%3 === 0){
            ball = ball - 2
            document.getElementById("ballcounter").innerHTML = ball
            document.getElementById("msg").innerHTML = "Computer took 2 balls"
        }
        else {
            ball = ball - 1
            document.getElementById("ballcounter").innerHTML = ball
            document.getElementById("msg").innerHTML = "Computer took 1 ball"
        }
        
        
        if (ball == 1){ 
            lastball()
            document.getElementById("msg1").className += " text-center text-danger "
            document.getElementById("msg1").innerHTML = "You lost" 
            return
        }

    let el = document.getElementById("pick")
    el.style.visibility = 'visible' 
},1000)
  
   
}




