var pdfOpenParams = "#page=0&pagemode=thumbs"; //pagemode=none,bookmarks,thumbs

$(document).ready(function () {
    //Fancybox settings
    $(".fancybox-pdf").fancybox({
        beforeLoad: function () {
            var url = $(this.element).attr("href");
            this.href = "./vendor/pdfjs/web/viewer.html?file=" + url + pdfOpenParams;
        },

        type: 'iframe',
        padding: 0,
        openEffect: 'fade',
        openSpeed: 150,
        closeEffect: 'fade',
        closeSpeed: 150,
        closeClick: true,
        width: '60%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        //Define PDF.js viewer with optional parameters

    });
});