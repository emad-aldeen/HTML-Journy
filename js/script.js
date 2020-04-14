'use strict'
var today = new Date();
var hourNow = today.getHours();
if (hourNow >= 20) {
    var r = confirm("Its late now go sleep");
    if (r == true) {
        window.location = "sleep.html";
    } else {
        var z = confirm("So .. Are you Instructer or TA?")
        if (z == true) {
            var y = prompt("Whats your Name?")
            if (y == "samer" || y == "saad") {
                alert('Welcome ' + y + " glad to see you agin .. :)");
            } else {
                window.location = "sleep.html";
            }
        } else {
            window.location = "sleep.html";
        }
    }
} else {
    alert("this weebsite not for -17 !!");
    var age = prompt('So what is your age?');

    if (age <= 17) {
        window.location = "byby.html";
    } else {
        alert("are you Sure?")

        alert(" im seeing you now O_O ")
    }

}


function newfunc() {
    var x = document.getElementById("cheak");

    if (x.checked == true) {
        document.body.style.background = 'black';
    } else {
        document.body.style.background = '';
    }
};
function newfunc1() {
    var x = document.getElementById("cheak1");

    if (x.checked == true) {
        document.body.style.background = 'blue';
    } else {
        document.body.style.background = '';
    }
};
function newfunc2() {
    var x = document.getElementById("cheak2");

    if (x.checked == true) {
        document.body.style.background = 'white';
    } else {
        document.body.style.background = '';
    }
};