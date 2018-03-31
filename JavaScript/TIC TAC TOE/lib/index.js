var box = $(".box")
var turn = 1;
var one = $(".one")
var two = $(".two")
var three = $(".three")
var four = $(".four")
var five = $(".five")
var six = $(".six")
var seven = $(".seven")
var eight = $(".eight")
var nine = $(".nine")
var users = [];
var empty = false;

function init() {
    for (var i = 0; i < 2; i++) {
        users[i] = prompt("Enter " + (i + 1) + " Player Name");
        if (users[i] == "") {
            alert("Value is Empty");
            empty = true;
        }
    }

    $("span").html(users[0])
}

init();

if (empty) {
    $(".inner").hide();
    $("h3").html("Sorry There Are No User To Play Refresh The Page To Add User")
}

function declarewinner(code) {
    var val = users.indexOf($("span").html())
    if (val == 0) {
        $("h3").html(users[0] + " Wins")
    } else {
        $("h3").html(users[1] + " Wins ")
    }

    if (code == "us") {
        $(".box").not(".us").hide();
    } else if (code == "ms") {
        $(".box").not(".ms").hide();
    } else if (code == "bs") {
        $(".box").not(".bs").hide();
    } else if (code == "ls") {
        $(".box").not(".ls").hide();
    } else if (code == "rs") {
        $(".box").not(".rs").hide();
    } else if (code == "lds") {
        $(".box").not(".lds").hide();
    } else if (code == "rds") {
        $(".box").not(".rds").hide();
    } else if (code == "cs") {
        $(".box").not(".cs").hide();
    }
}

var checkthewinner = {
    upperstraight: function() {
        if ((one.html() == "X") && (two.html() == "X") && (three.html() == "X")) {
            $(".us").css("background", "skyblue");
            declarewinner("us");
        } else if ((one.html() == "O") && (two.html() == "O") && (three.html() == "O")) {
            $(".us").css("background", "skyblue");
            declarewinner("us");
        }
    },
    middlestraight: function() {
        if ((four.html() == "X") && (five.html() == "X") && (six.html() == "X")) {
            $(".ms").css("background", "skyblue");
            declarewinner("ms");
        } else if ((four.html() == "O") && (five.html() == "O") && (six.html() == "O")) {
            $(".ms").css("background", "skyblue");
            declarewinner("ms");
        }
    },
    bottomstraight: function() {
        if ((seven.html() == "X") && (eight.html() == "X") && (nine.html() == "X")) {
            $(".bs").css("background", "skyblue");
            declarewinner("bs");
        } else if ((seven.html() == "O") && (eight.html() == "O") && (nine.html() == "O")) {
            $(".bs").css("background", "skyblue");
            declarewinner("bs");
        }
    },
    leftstraight: function() {
        if ((one.html() == "X") && (four.html() == "X") && (seven.html() == "X")) {
            $(".ls").css("background", "skyblue");
            declarewinner("ls");
        } else if ((one.html() == "O") && (four.html() == "O") && (seven.html() == "O")) {
            $(".ls").css("background", "skyblue");
            declarewinner("ls");
        }
    },
    centerstraight: function() {
        if ((two.html() == "X") && (five.html() == "X") && (eight.html() == "X")) {
            $(".cs").css("background", "skyblue");
            declarewinner("cs");
        } else if ((two.html() == "O") && (five.html() == "O") && (eight.html() == "O")) {
            $(".cs").css("background", "skyblue");
            declarewinner("cs");
        }
    },
    rightstraight: function() {
        if ((three.html() == "X") && (six.html() == "X") && (nine.html() == "X")) {
            $(".rs").css("background", "skyblue");
            declarewinner("rs");
        } else if ((three.html() == "O") && (six.html() == "O") && (nine.html() == "O")) {
            $(".rs").css("background", "skyblue");
            declarewinner("rs");
        }
    },
    leftdiagonalstraight: function() {
        if ((one.html() == "X") && (five.html() == "X") && (nine.html() == "X")) {
            $(".lds").css("background", "skyblue");
            declarewinner("lds");
        } else if ((one.html() == "O") && (five.html() == "O") && (nine.html() == "O")) {
            $(".lds").css("background", "skyblue");
            declarewinner("lds");
        }
    },
    rightdiagonalstraight: function() {
        if ((three.html() == "X") && (five.html() == "X") && (seven.html() == "X")) {
            $(".rds").css("background", "skyblue");
            declarewinner("rds");
        } else if ((three.html() == "O") && (five.html() == "O") && (seven.html() == "O")) {
            $(".rds").css("background", "skyblue");
            declarewinner("rds");
        }
    }

}

function checkandverify() {
    checkthewinner.upperstraight();
    checkthewinner.middlestraight();
    checkthewinner.bottomstraight();
    checkthewinner.leftstraight();
    checkthewinner.centerstraight();
    checkthewinner.rightstraight();
    checkthewinner.leftdiagonalstraight();
    checkthewinner.rightdiagonalstraight();
}

box.on('click', function() {
    if (($(this).html() == "X") || ($(this).html() == "O")) {
        alert("already filled");
    } else {
        if (turn == 1) {
            $(this).html("X")
            turn = 0;
            checkandverify();
            $("span").html(users[1])
        } else {
            $(this).html("O")
            turn = 1;
            checkandverify();
            $("span").html(users[0])
        }
    }

})