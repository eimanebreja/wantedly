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