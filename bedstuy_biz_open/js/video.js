var clear_windows = function () {
    $(".window").remove();
    $("#display-window").hide();
};

var add_windows = function () {
    var videos = image_data[curr_img_name].videos;
    for (var i = 0; i < videos.length; i++) {
        var window_data = videos[i];
        var video = $("<div>")
            .addClass("window")
            .css("opacity", "0.0")
            .attr("data-img-name", window_data.vid_url)

        load_image(window_data.image_name);

        for (var prop in window_data.css_props) {
            video.css(prop, window_data.css_props[prop]);
        }

        $("#bg-img-container").append(video);
        start_pulse(video);
    }
};

var FADE_INTERVAL = 1700;

var fade_out = function (window, callback) {
    $(window).animate({
        "opacity": "0.0"
    }, FADE_INTERVAL, callback);
};

var fade_in = function (window, callback) {
    $(window).animate({
        "opacity": "0.25"
    }, FADE_INTERVAL, callback);
};

var pulse = function (window) {
    fade_in(window, function () {
        fade_out(window);
    });
    setInterval(function () {
        fade_in(window, function () {
            fade_out(window);
        });
    }, 2 * FADE_INTERVAL);
};

// 1.5 second wait before pulse starts
var start_pulse = function (window) {
    setTimeout(function () {
        pulse(window);
    }, 500);
};

var current_window = null;
var maximized = false;


$(document).ready(function () {
    $("#bg-img-container").on("click", ".window", function () {
        current_window = this;

        var image_name = $(this).attr("data-img-name");
        $("#display-img-container").html(loaded_images[image_name]);
        $("#display-img-container img").css("width", $(this).width());
        $("#display-img-container img").css("height", $(this).height());

        var offset = $(this).offset();
        $("#video_fr").css("width", $(this).width())
            .css("height", $(this).height())
            .css("top", offset.top)
            .css("left", offset.left);

        $("#video_fr").show();
    });

    $("#close").click(function () {
        $("#video_fr").hide();
        minimizeWindow(current_window);
    });

});