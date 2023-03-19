var chance = "Player 1"
var player = chance + "'s chance"
var disabledBtn = 0

let count=0;
let count1=0;
document.getElementById("chance").innerHTML = player
function check() {
    var btn1 = document.getElementById("btn1").innerHTML
    var btn2 = document.getElementById("btn2").innerHTML
    var btn3 = document.getElementById("btn3").innerHTML
    var btn4 = document.getElementById("btn4").innerHTML
    var btn5 = document.getElementById("btn5").innerHTML
    var btn6 = document.getElementById("btn6").innerHTML
    var btn7 = document.getElementById("btn7").innerHTML
    var btn8 = document.getElementById("btn8").innerHTML
    var btn9 = document.getElementById("btn9").innerHTML
    var result = document.getElementById("resultText")
    if (btn1 === "x" && btn2 === "x" && btn3 === "x") {
        disable()
        result.innerHTML = "Player X won !"
        count++
            
    }

    else if (btn4 === "x" && btn5 === "x" && btn6 === "x") {
        disable()
        result.innerHTML = "Player X won !"
        count++
    }

    else if (btn7 === "x" && btn8 === "x" && btn9 === "x") {
        disable()
        result.innerHTML = "Player X won !"
        count++
            
    }

    else if (btn1 === "x" && btn4 === "x" && btn7 === "x") {
        disable()
        result.innerHTML = "Player X won !"
        count++
            
    }

    else if (btn2 === "x" && btn5 == "x" && btn8 === "x") {
        disable()
        result.innerHTML = "Player X won !"
        count++
            
    }

    else if (btn3 === "x" && btn6 === "x" && btn9 === "x") {
        disable()
        result.innerHTML = "Player X won !"
        count++
            
    }

    else if (btn1 === "x" && btn5 === "x" && btn9 === "x") {
        disable()
        result.innerHTML = "Player X won !"
            
    }

    else if (btn3 === "x" && btn5 === "x" && btn7 === "x") {
        disable()
        result.innerHTML = "Player X won !"
        count++
            
    }

    else if (btn1 === "o" && btn2 === "o" && btn3 === "o") {
        disable()
        result.innerHTML = "Player O won !"
        count1++
            
    }

    else if (btn4 === "o" && btn5 === "o" && btn6 === "o") {
        disable()
        result.innerHTML = "Player O won !"
            
    }

    else if (btn7 === "o" && btn8 === "o" && btn9 === "o") {
        disable()
        result.innerHTML = "Player O won !"
        count1++
            
    }

    else if (btn1 === "o" && btn4 === "o" && btn7 === "o") {
        disable()
        result.innerHTML = "Player 2 won !"
        count1++
            
    }

    else if (btn2 === "o" && btn5 == "o" && btn8 === "o") {
        disable()
        result.innerHTML = "Player O won !"
        count1++
            
    }

    else if (btn3 === "o" && btn6 === "o" && btn9 === "o") {
        disable()
        result.innerHTML = "Player O won !"
        count1++
            
    }

    else if (btn1 === "o" && btn5 === "o" && btn9 === "o") {
        disable()
        
        result.innerHTML = "Player O won !"
        count1++
            
    }

    else if (btn3 === "o" && btn5 === "o" && btn7 === "o") {
        disable()
        result.innerHTML = "Player O won !"
        count1++
            
    }

    else if (disabledBtn === 9) {
        disable()
        result.innerHTML = "Match Draw !"
            
    }
    if(count==count1){
        localStorage.getItem("don",JSON.stringify("player-1"))
    }
     
}


function disableBtn(id) {
    if (chance === "Player 1") {
        document.getElementById(id).disabled = true
        document.getElementById(id).innerHTML = "x"
        chance = "Player 2"
        player = chance + "'s chance"
        document.getElementById("chance").innerHTML = player
        disabledBtn = disabledBtn + 1
        check()
    }
    else if (chance === "Player 2") {
        document.getElementById(id).disabled = true
        document.getElementById(id).innerHTML = "o"
        chance = "Player 1"
        player = chance + "'s chance"
        document.getElementById("chance").innerHTML = player
        disabledBtn = disabledBtn + 1
        check()
    }
}

function disable() {
    for (var i = 1; i < 10; i++) {
        var id = "btn" + i
        document.getElementById(id).disabled = true
    }   

}

function reset() {
    for (var i = 1; i < 10; i++) {
        var id = "btn" + i
        document.getElementById(id).disabled = false
        document.getElementById(id).innerHTML = null;
        
    }
    
    chance = "Player 1" 
    player = chance + "'s chance"
    document.getElementById("chance").innerHTML = player
    disabledBtn = 0
}