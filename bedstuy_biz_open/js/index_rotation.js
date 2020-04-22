var images = ["imgs/173410_sv-home-resize.jpg",
	      "imgs/173409_sv-home-resize.jpg",
	      "imgs/173432_sv-home-resize.jpg"];
var position = 0;

var create_background = function(img_url, id) {
    img_url = "url('" + img_url + "')";
    var bg_img = $("<div>")
	.addClass("bg-img")
	.attr("id", id)
	.css("background-image", img_url);
    if (id == position) {
	bg_img.css("z-index", "-1");
    }
    $("body").append(bg_img);
};

var rotate_background = function() {
    new_position = (position + 1) % images.length;
    var image_url = "url('" + images[position] + "')";
    var old_bg = $("#" + position);
    var new_bg = $("#" + new_position);
    new_bg.hide()
	.css("z-index", "-1");
    old_bg.css("z-index", "-2");
    new_bg.fadeIn(1000, function() {
	old_bg.hide();
    });
    position = new_position;
};

$(document).ready(function() {
    for (var i = 0; i < images.length; i++) {
	create_background(images[i], i);
    }
    // Make the first switch happen sooner, since there wasn't any
    // initial fade animation. Then the others should be longer to account
    // for the animations.
    setTimeout(function() {
	rotate_background();
	setInterval(rotate_background, 4000);
    }, 3000);
});
