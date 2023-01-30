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
});