var buttons = $("button");
var value = "";
var totalfield = $("#values");
var back = $(".back")
var reset = $(".reset")
var add = $(".add")
var minus = $(".minus")
var mul = $(".mul")
var mod = $(".mod")
var divide = $(".divide")
var result = $("#result")
var equal = $(".equal")
var second = "";
var first = "";
var sign = "";
buttons.on("click", function() {
    if (totalfield.val() == "")
        value = ""
    value += this.value;
    totalfield.val(value)
});

back.on("click", function() {
    value = value.substring(0, (value.length - 1));
    console.log(value);
    totalfield.val("");
    totalfield.val(value);
});

reset.on("click", function() {
    value = "";
    totalfield.val(value)
    result.val(value)
})


add.on("click", function() {
    result.val(value)
    value = ""
    totalfield.val(value)

})

minus.on("click", function() {
    result.val(value)
    value = ""
    totalfield.val(value)

})


mul.on("click", function() {
    result.val(value)
    value = ""
    totalfield.val(value)

})

divide.on("click", function() {
    result.val(value)
    value = ""
    totalfield.val(value)

})

mod.on("click", function() {
    result.val(value)
    value = ""
    totalfield.val(value)

})

equal.on("click", function() {
    first = Number(value);
    console.log(first);
    second = result.val();
    console.log(second);
    sign = second.substring(second.length, second.length - 1)
    console.log(sign);
    if (sign === "+") {
        second = Number(second.substring(0, (second.length - 1)))
        result.val(first + second)
        first = ""
        second = ""
        value = ""
        totalfield.val(value)
        sign = ""
    } else if (sign === "-") {
        console.log(sign);
        second = Number(second.substring(0, (second.length - 1)))
        result.val(second - first)
        first = ""
        second = ""
        value = ""
        totalfield.val(value)
    } else if (sign === "*") {
        console.log(sign);
        second = Number(second.substring(0, (second.length - 1)))
        result.val(second * first)
        first = ""
        second = ""
        value = ""
        totalfield.val(value)
    } else if (sign === "/") {
        console.log(sign);
        second = Number(second.substring(0, (second.length - 1)))
        result.val(second / first)
        first = ""
        second = ""
        value = ""
        totalfield.val(value)
    } else if (sign === "%") {
        console.log(sign);
        second = Number(second.substring(0, (second.length - 1)))
        result.val(second % first)
        first = ""
        second = ""
        value = ""
        totalfield.val(value)
    }
})