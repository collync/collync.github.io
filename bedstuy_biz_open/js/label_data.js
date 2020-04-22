// This file contains the corresponding start photo of each label on the map

var label_data = {
    // "sun_court": {
    //     image_id: "2010-_MG_0419.jpg"
    // },
    // "flower_garden": {
    //     image_id: "2008_MG_3020.jpg"
    // },
    // "kitchen_garden": {
    //     image_id: "260162_sv-2003.jpg"
    // },
    // "fire_place": {
    //     image_id: "260180-2004-aws.jpg"
    // },
 
    // "old_orchard": {
    //     image_id: "260054-1997.jpg"
    // },
    // "guesthouse": {
    //     image_id: "173246_sv-1976.jpg"
    // },
    // "patio": {
    //     image_id: "260061-1995.jpg"
    // },
    // "interior": {
    //     image_id: "2005-P1000869.jpg"
    // },
    // "house": {
    //     image_id: "2008_MG_3091.jpg"
    // },
    // "henyard": {
    //     image_id: "260129_sv2002.jpg"
    // },
    // "gazebo": {
    //     image_id: "2005-P1000907.jpg"
    // },
    // "boxwood": {
    //     image_id: "260157-1993.jpg"
    // },
    // "driveway": {
    //     image_id: "260037-1992-aws.jpg"
    // },
    // "compost": {
    //     image_id: "2011_MG_1369.jpg"
    // },
    // "beata_garden": {
    //     image_id: "2006-P1010667C.jpg"
    // },
    // "leaf_passage": {
    //   image_id: "173449_sv-1987.jpg"
    // },
   "fire_south": {
        image_id: "260177-1994-aws.jpg"
    },
    "main_path":{
      image_id: "259903-2004-aws.jpg"
    },
    "south_top":{
      image_id: "259223-1993.jpg"
    },
    "sun_c":{
      image_id: "2010-_MG_0419.jpg"
    },
    "south_middle":{
      image_id: "260195_sv-2003q.jpg"
    },
    "south_bottom":{
      image_id: "260183_sv-2004_a.jpg"
    },
    "north_middle":{
      image_id: "260224-1993.jpg"
    },
    "north_top":{
      image_id: "2017-5865.JPG"
    },
    "boxwood_st":{
      image_id:"260155-1993.jpg"
    },
    "death_pt":{
        image_id:"259919-nd.jpg"
    },
    "henyard_pt":{
        image_id:"260136-1996.jpg"
    },
    "henyard_south":{
        image_id:"260120-1998-aws.jpg"
    },
    "driveway_e":{
        image_id:"2017-5903.JPG"
    },
    "driveway_begin":{
        image_id:"98SWE0812-1998.jpg"
    },
    "driveway_w":{
        image_id:"2006-P1010665.jpg"
    },
    "leaf_p":{
        image_id:"173449_sv-1987.jpg"
    },
    "henyard_w":{
        image_id:"260130_sv-2003.jpg"
    },
    "box_w":{
        image_id:"260157-1993.jpg"
    },
    "interior_pt":{
        image_id:"2005-P1000869.jpg"
    },
    "house_pt":{
        image_id:"260158_sv2003.jpg"
    },
    "orchard_chair":{
        image_id:"260088-2004-aws.jpg"
    },
    "patio_pt":{
        image_id:"260061-1995.jpg"
    },
    "patio_pt2":{
        image_id:"260054-1997.jpg"
    },
    "gazebo_pt":{
        image_id:"2005-P1000907.jpg"
    },
    "west_tree_pt":{
        image_id:"260121_sv-1997q.jpg"
    },
    "house_pt2":{
        image_id:"260060-1992-aws.jpg"
    },
    "house_e_pt":{
        image_id:"259252-1998.jpg"
    },
    "moon_pt":{
        image_id:"2008_MG_3020.jpg"
    },
    "temp_pt":{
        image_id:"2010-_MG_0419.jpg"
    },
    "entry_2ns":{
        image_id:"260211-1998-aws.jpg"
    },
    "entry_boxwood":{
        image_id:"2017-5874.JPG"
    }

};



// Object for storing the key Image objects that will never be cleared.
var key_images = {};

// load for once and can be used throughout the process.
var load_key_images = function() {
    for (var key in label_data) {
        var obj = label_data[key];
        load_key_image(obj.image_id);
    }
};

var load_key_image = function(image_name) {
    var image = new Image();
    image.src = IMAGE_DIR + image_name;
    $(image).addClass("bg-img");
    key_images[image_name] = image;
};

load_key_images();
