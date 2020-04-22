var clear_windows = function() {
    $(".window").remove();
    $("#display-window").hide();
};

var add_windows = function() {
    var windows = image_data[curr_img_name].windows;
    for (var i = 0; i < windows.length; i++) {
        var window_data = windows[i];
        var window = $("<div>")
            .addClass("window")
            .css("opacity", "0.0")
            .attr("data-img-name", window_data.image_name)
            .attr("data-year", window_data.year);

        load_image(window_data.image_name);

        for (var prop in window_data.css_props) {
            window.css(prop, window_data.css_props[prop]);
        }

        $("#bg-img-container").append(window);
        start_pulse(window);
    }
};

var FADE_INTERVAL = 1700;

var fade_out = function(window, callback) {
    $(window).animate({
        "opacity": "0.0"
    }, FADE_INTERVAL, callback);
};

var fade_in = function(window, callback) {
    $(window).animate({
        "opacity": "0.25"
    }, FADE_INTERVAL, callback);
};

var pulse = function(window) {
    fade_in(window, function() {
        fade_out(window);
    });
    setInterval(function() {
        fade_in(window, function() {
            fade_out(window);
        });
    }, 2 * FADE_INTERVAL);
};

// 1.5 second wait before pulse starts
var start_pulse = function(window) {
    setTimeout(function() {
        pulse(window);
    }, 500);
};

var current_window = null;
var maximized = false;

var maximizeWindow = function() {

    $("#display-window").css("top", "0")
        .css("left", "0")
        .css("width", "100vw")
        .css("height", "100vh");

    var image = $("#display-window img")[0];
    $(image).css("position", "absolute");
    var ratio = image.width / image.height;

    if (ratio * $(window).height() > $(window).width()) {
        // fit to width
        $(image).css("width", "100vw");
        $(image).css("height", "auto");
        var height = $(image).height();
        var top = ($(window).height() - height) / 2;
        $(image).css("top", top + "px");
    } else {
        // fit to height
        $(image).css("height", "100vh");
        $(image).css("width", "auto");
        var width = $(image).width();
        var left = ($(window).width() - width) / 2;
        $(image).css("left", left + "px");
    }

    $("#toggle-fullscreen").css("background-image", "url(assets/minimize.svg)");
    $("#close").css("right", "20px");
    $("#date").css("right", "20px");

    maximized = true;
};

var minimizeWindow = function(window_elem) {
    var width = $(window_elem).width() + "px";
    var height = $(window_elem).height() + "px";
    var offset = $(window_elem).offset();

    $("#display-window").css("width", width)
        .css("height", height)
        .css("top", offset.top)
        .css("left", offset.left);

    $("#display-window img").css("width", width)
        .css("height", height)
        .css("top", "0")
        .css("left", "0");

    $("#toggle-fullscreen").css("background-image", "url(assets/expand.svg)");
    $("#close").css("right", "5px");
    $("#date").css("right", "0px");

    maximized = false;
};

$(document).ready(function() {
    $("#bg-img-container").on("click", ".window", function() {
        current_window = this;

        var image_name = $(this).attr("data-img-name");
        $("#display-img-container").html(loaded_images[image_name]);

        // console.log(/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(image_name));
        if (/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(image_name)) {            
            $("#display-img-container img").css("width", $(this).width());
            $("#display-img-container img").css("height", $(this).height());
            $("#date").text($(this).attr("data-year"));
        
        }
        else {
            $("#display-img-container iframe").css("width", $(this).width());
            $("#display-img-container iframe").css("height", $(this).height());
            $("#display-img-container iframe").attr("frameborder", 0);
            $("#display-img-container iframe").attr("allowfullscreen", "true");
            $("#display-img-container iframe").attr("webkitallowfullscreen", "true");
            $("#display-img-container iframe").attr("mozallowfullscreen", "true");
            $("#date").remove();
            $("#toggle-fullscreen").remove();
        };

        
        var offset = $(this).offset();
        $("#display-window").css("width", $(this).width())
            .css("height", $(this).height())
            .css("top", offset.top)
            .css("left", offset.left);


        $("#display-window").show();
    });

    $("#toggle-fullscreen").click(function() {
        if (maximized) {
            minimizeWindow(current_window);
        } else {
            maximizeWindow();
        }
    });

    $("#close").click(function() {
        $("#display-window").hide();
        $("#display-img-container iframe").remove();
        minimizeWindow(current_window);
    });

});
