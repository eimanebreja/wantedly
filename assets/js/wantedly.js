$(function () {
    var wrappers = $("[id^=wrap]").hide();
    var length = wrappers.length;
    var index = -1;
    setInterval(function () {
        next = index + 1;
        if (next === wrappers.length) {
            next = 0;
        }
        wrappers.eq(index).hide();
        wrappers.eq(next).show();
        index++;
        if (index == wrappers.length) {
            index = 0;
        }
    }, 2000);
});

(function () {
    $('.menu-button').on('click', function () {
        $('.hamburger').toggleClass('is-active');
        $('.menu-wrap').toggleClass('onn');
    })
})();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}