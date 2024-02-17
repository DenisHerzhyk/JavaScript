function myFunc() {
    let b1 = document.getElementById("b1").value;
    let b2 = document.getElementById("b2").value;
    let b3 = document.getElementById("b3").value;
    let b4 = document.getElementById("b4").value;
    let b5 = document.getElementById("b5").value;
    let b6 = document.getElementById("b6").value;
    let b7 = document.getElementById("b7").value;
    let b8 = document.getElementById("b8").value;
    let b9 = document.getElementById("b9").value;

    let b1btn = document.getElementById("b1");
    let b2btn = document.getElementById("b2");
    let b3btn = document.getElementById("b3");
    let b4btn = document.getElementById("b4");
    let b5btn = document.getElementById("b5");
    let b6btn = document.getElementById("b6");
    let b7btn = document.getElementById("b7");
    let b8btn = document.getElementById("b8");
    let b9btn = document.getElementById("b9");

    // checking if winner X...
    if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
        document.getElementById("print").innerHTML = "Player X won";

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";

        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    }
    else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
        document.getElementById("print").innerHTML = "Player X won";

        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    }  
    else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
        document.getElementById("print").innerHTML = "Player X won";

        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
    } 
    else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
        document.getElementById("print").innerHTML = "Player X won";

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";

        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    } 
    else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
        document.getElementById("print").innerHTML = "Player X won";

        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";

        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
    } 
    else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) {
        document.getElementById("print").innerHTML = "Player X won";

        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    } 
    else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
        document.getElementById("print").innerHTML = "Player X won";

        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
    } 
    else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
        document.getElementById("print").innerHTML = "Player X won";

        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";

        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;
    } 
    // checking if winner O...
    else if ((b1 == '0') && (b2 == '0') && (b3 == '0')) {
        document.getElementById("print").innerHTML = "Player 0 won";

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";

        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    }
    else if ((b4 == '0') && (b5 == '0') && (b6 == '0')) {
        document.getElementById("print").innerHTML = "Player 0 won";

        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    }  
    else if ((b7 == '0') && (b8 == '0') && (b9 == '0')) {
        document.getElementById("print").innerHTML = "Player 0 won";

        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
    } 
    else if ((b1 == '0') && (b4 == '0') && (b7 == '0')) {
        document.getElementById("print").innerHTML = "Player 0 won";

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";

        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    } 
    else if ((b1 == '0') && (b5 == '0') && (b9 == '0')) {
        document.getElementById("print").innerHTML = "Player 0 won";

        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";

        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
    } 
    else if ((b3 == '0') && (b5 == '0') && (b7 == '0')) {
        document.getElementById("print").innerHTML = "Player 0 won";

        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    } 
    else if ((b3 == '0') && (b6 == '0') && (b9 == '0')) {
        document.getElementById("print").innerHTML = "Player 0 won";

        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
    } 
    else if ((b2 == '0') && (b5 == '0') && (b8 == '0')) {
        document.getElementById("print").innerHTML = "Player 0 won";

        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";

        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;
    } 
    // cheking if it's tie
    else if ((b1 != '') && (b2 != '') && (b3 != '') && (b4 != '') && (b5 != '') && (b6 != '') && (b7 != '') && (b8 != '') && (b9 != '')) {
        document.getElementById("print").innerHTML = "It's Tie"
    }
    // otherwise
    else {
        if (flag == 1) {
            document.getElementById("print").innerHTML = "Player X Turn";
        }
        else {
            document.getElementById("print").innerHTML = "Player O Turn";
        }
    }
}

function reload_func() {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

flag = 1;
function myFunc_3() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
function myFunc_4() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
function myFunc_5() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
function myFunc_6() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
function myFunc_7() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
function myFunc_8() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
function myFunc_9() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
function myFunc_10() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
function myFunc_11() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}