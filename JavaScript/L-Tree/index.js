var text = document.querySelector(" #submit ");
var str = "A";
var sentence = str;
var rule1 = {
    a: "A",
    b: "AB"
}

var rule2 = {
    a: "B",
    b: "A"
}

text.addEventListener("click", function() {
    var nxt = "";
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        if (current == rule1.a) {
            nxt += rule1.b;
        } else if (current == rule2.a) {
            nxt += rule2.b;
        } else {
            nxt += current;
        }

    }
    sentence = nxt;
    printme(sentence);
});

function printme(str) {
    var para = document.createElement("h1");
    var cont = document.createTextNode(str);
    para.appendChild(cont);
    para.classList.add("solid");
    document.body.appendChild(para);
}