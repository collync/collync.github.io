// TODO
// Try setting browser to maximum size that satisfies ratio

var curr_img_name = "";
var transitioning = false;
var image_history = [];

var transition = function(dir) {
    if (!transitioning) {
        transitioning = true;
        var next_img_name;
        if (dir == "back") {
            if (image_history.length === 0) {
                transitioning = false;
                throw "There's not an image to go back to.";
            }
            next_img_name = image_history.pop();
        } else {
            next_img_name = image_data[curr_img_name].paths[dir];
            image_history.push(curr_img_name);
        }
        clear_windows();
        var next_image = loaded_images[next_img_name];
        $("#transition").html("").append(next_image).css({
          "z-index": "-1",
        });
        back_img_name = curr_img_name;

        var done = function() {
            $("#bg-img-container").children(".bg-img").remove();
            $("#bg-img-container").append(next_image);
            $("#transition").css("opacity", "0").css("z-index", "-2");
            transitioning = false;

            //TODO: is there a way to ensure that update() has finished before
            // this is run?
            // Can we just put update() here? and then put add_windows
            // within update?
            add_windows();
            load_image(image_history[image_history.length - 1]);
        };

        var duration = 1000;
        $("#transition").animate({opacity:1},duration, done);
        curr_img_name = next_img_name;
        update();
    } else {
        console.log("Slow down! Still transitioning.");
    }
};

var labelTransition = function(label) {
    if (!transitioning) {
        transitioning = true;
        var next_img_name;

        next_img_name = label_data[label].image_id;
        // if click on the label linked to the same image, do nothing.
        if (next_img_name == curr_img_name) {
            transitioning = false;
            return;
        }
        image_history.push(curr_img_name);

        clear_windows();
        var next_image = key_images[next_img_name];

        $("#transition").html("").append(next_image).css("z-index", "-1");
        back_img_name = curr_img_name;

        var done = function() {
            $("#bg-img-container").children(".bg-img").remove();
            $("#bg-img-container").append(next_image);
            $("#transition").css("opacity", "0").css("z-index", "-2");
            transitioning = false;

            add_windows();
            // load_image(image_history[image_history.length - 1]);
        };

        var duration = 1000;
        $("#transition").animate({
            "opacity": "1.0"
        }, duration, done);
        curr_img_name = next_img_name;
        update();
    } else {
        console.log("Slow down! Still transitioning.");
    }
};

var update = function() {
    var curr_data = image_data[curr_img_name];

    if (image_history.length === 0) {
        $("#back").addClass("disabled");
    } else {
        $("#back").removeClass("disabled");
    }

    // Update the marker
    var coord_data = curr_data.coords;

    coords = coord_data.split(" ");

    var marker_dir = 'url(assets/marker_' + curr_data.direction + '.svg)';
    $('.marker').css({
          "right": coords[0],
          "top": coords[1],
          "background": marker_dir,

      });

      //Temp Image File Name
    //   $('#temp_file_name').remove();
    //   var tmp_name = $('<div id="temp_file_name">' + curr_img_name + '</div>');
    //   $('.maps').before(tmp_name);

    // Update the date
    $("#year").html(curr_data.year);

    var paths = curr_data.paths;
    var image_names = [];
    for (var dir in paths) {
        var image_name = paths[dir];

        // Update the controls
        if (!image_name) {
            $("#" + dir).addClass("disabled");
        } else {
            image_names.push(image_name);
            $("#" + dir).removeClass("disabled");
        }
    }

    // Update the compass
    var compass_src = "url('assets/compass_" + curr_data.direction + ".svg')";
    $("#compass").css("background-image", compass_src);

    // Update the loaded images
    clear_loaded_images();
    load_images(image_names);
};


$(document).ready(function() {
    // Transition when a control is clicked
    $(".control").click(function() {
        transition($(this).attr("id"));
    });

    // Transition when the labels on the map is clicked
    // $(".maplabel").click(function() {
    //     labelTransition($(this).attr("id"));
    // });
    $(".maplabel_sq").click(function() {
        labelTransition($(this).attr("id"));
    });

    $("#back").click(function() {
        transition("back");
    });

    // toggle map when the map icon is clicked
    $(".maps").hide();

    $("#map_icon").click(function() {
        $(".maps").fadeToggle(400);
    });


    // Initial background
    curr_img_name = "98SWE0812-1998.jpg";
    var image = new Image();
    image.src = image_path(curr_img_name);
    $(image).addClass("bg-img");
    $("#bg-img-container").append(image);

    // Initial marker
    var curr_data = image_data[curr_img_name];
    var coord_data = curr_data.coords;

    coords = coord_data.split(" ");
    var tmp = $('<div class="marker"><span ' + 'id=' + '"' + curr_data + '"' + '/>' + '</div>');
    $('#mapbase').after(tmp);
    var marker_dir = 'url(assets/marker_' + curr_data.direction + '.svg)';
    tmp.css({
        "right": coords[0],
        "top": coords[1],
        "background": marker_dir,
    });

    //Temp Image File Name
    // var tmp_name = $('<div id="temp_file_name">' + curr_img_name + '</div>');
    // $('.maps').before(tmp_name);

    // Order matters, since add_windows() adds loaded images, but update()
    // clears them all.
    update();
    add_windows();

});
