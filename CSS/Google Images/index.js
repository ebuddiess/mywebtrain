var img = $(".image");
var close = $("span");
var show = $(".show")
img.on("click", function() {
    show[0].children[1].src = $(this)[0].children[0].src;
    show.show(600);
    console.dir(show[0].children[0].src);
});

close.on("click", function() {
    show.fadeOut(1000, function() {
        $(this).hide();
    });
});