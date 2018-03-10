var h1 = $("h1");
$(function() {
    h1.addClass("animated zoomIn");
})

function colorchange() {
    h1.css("animation", "colorchange 2s ease");
}

setTimeout(colorchange, 1000);
setTimeout(function() {
    h1.remove();
    window.location.href = 'index.html'
}, 3000)