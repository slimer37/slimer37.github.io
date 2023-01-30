function loadHtml(url, action) {
    $.ajax({
        url: url,
        success: action,
        dataType: 'html'
    });
}

$(function () {
    loadHtml("/header.html", function (data) { $('body').prepend(data); });
    loadHtml("/footer.html", function (data) { $('body').append(data); });
    loadHtml("/favicons.html", function (data) { $('head').append(data); });

    window.onscroll = scrollFunction;
});

function scrollFunction() {
    const scrollThreshold = 50;
    let header = document.getElementById("header");

    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        header.className = "shrunk-header";
    } else {
        header.className = "";
    }
}