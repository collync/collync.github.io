var IMAGE_DIR = "imgs/";

// Returns a concatenation of IMAGE_DIR with the image_name
var image_path = function (image_name) {
    return IMAGE_DIR + image_name;
};

// General data structure for image meta data
//   paths: which images come next in the path
//   direction: the direction the camera was facing to capture the image
//   year: the year the photograph was taken
//   windows: data for windows that appear on the image
//      image_name: the image in the window
//      css_props: size and position of the window, as percentages since the
//        exact size may vary

var image_data = {
    //
    //
    //
    //
    // SAMPLE PATH
    //
    //
    //
    //
    "2006-P1010609.jpg": {
        coords: "15.2% 47.6%",
        paths: {
            forward: null,
            turn_right: "2011_MG_1364.jpg",
            backward: "2006-P1010667C.jpg",
            turn_left: "2011_MG_1364.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2006,
        windows: []
    },
    "2006-P1010667C.jpg": {
        // key_turning:1
        coords: "18.6% 47.6%",
        paths: {
            forward: "2006-P1010609.jpg",
            turn_right: "173496_sv-1990.jpg",
            backward: "2006-P1010667.jpg",
            turn_left: "2006-P1010673.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2006,
        windows: []
    },
    "260204-1998-aws.jpg": {
        coords: "20.8% 47.6%",
        paths: {
            forward: "2006-P1010667C.jpg",
            turn_right: null,
            backward: "2007_MG_2083.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1998,
        windows: []
    },
    "2006-P1010667.jpg": {
        coords: "25% 47.6%",
        paths: {
            forward: "2006-P1010667C.jpg",
            turn_right: null,
            backward: "2010-_MG_0419.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2006,
        windows: []
    },
    "2010-_MG_0419.jpg": {
        coords: "36.2% 47.6%",
        paths: {
            forward: "2006-P1010667.jpg",
            turn_right: "2010_MG_0433.jpg",
            backward: "2006-P1010686.jpg",
            turn_left: "2010-_MG_0421.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2010,
        windows: [{
            image_name: "1987-173466_sv.jpg",
            year: 1987,
            css_props: {
                // Note that these percentages are relative to the original
                // image dimensions. This window was 123px by 123px on a 864px
                //  by 576px image, located at (577px, 118px) within the image.
                top: "20.49%", // 100*118/576
                left: "66.78%", // 100*577/864
                width: "14.24%", // 100*123/864
                height: "21.35%" // 100*123/576
            }
        }]
    },
    "2010_MG_0433.jpg": {
        coords: "36.2% 47.6%",
        paths: {
            forward: null,
            turn_right: "2010_MG_0440.jpg",
            backward: null,
            turn_left: "2010-_MG_0419.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NE",
        year: 2010,
        windows: []
    },
    "2010_MG_0440.jpg": {
        coords: "36.2% 47.6%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: "2010_MG_0433.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "2006-P1010679_a.jpg"
        },
        direction: "E",
        year: 2010,
        windows: [{
            image_name: "https://player.vimeo.com/video/227587451?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "20.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "2011_MG_1364.jpg": {
        coords: "5.2% 48%",
        paths: {
            forward: "260166_sv-1997.jpg",
            turn_right: "2006-P1010609.jpg",
            backward: null,
            turn_left: "2006-P1010609.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2011,
        windows: [{
                image_name: "173164_sv-1970.jpg",
                year: 1970,
                css_props: {
                    top: "30.49%", // 100*118/576
                    left: "30.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "21.45%" // 100*123/576
                }
            },
            {
                image_name: "173400_sv-1982.jpg",
                year: 1982,
                css_props: {
                    top: "50.49%",
                    left: "35.78%",
                    width: "14.24%",
                    height: "25.45%"
                }
            }
        ]
    },
    "260166_sv-1997.jpg": {
        coords: "20% 48.1%",
        paths: {
            forward: "2007_MG_2011.jpg",
            turn_right: null,
            backward: "2011_MG_1364.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1997,
        windows: []
    },
    "2007_MG_2011.jpg": {
        coords: "25.2% 47%",
        paths: {
            forward: "2006-P1010669.jpg",
            turn_right: "2006-P1010673.jpg",
            backward: "260166_sv-1997.jpg",
            turn_left: "2006-P1010673.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2007,
        windows: []
    },
    "2006-P1010669.jpg": {
        coords: "30% 47%",
        paths: {
            forward: "260205-nd.jpg",
            turn_right: null,
            backward: "2007_MG_2011.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2006,
        windows: []
    },
    "260205-nd.jpg": {
        //jump_sun_court
        coords: "34.6% 47%",
        paths: {
            forward: "2006-P1010668.jpg",
            turn_right: null,
            backward: "2006-P1010669.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: "-",
        windows: []
    },
    "2006-P1010668.jpg": {
        //key_turning:2
        coords: "38.6% 47%",
        paths: {
            forward: "2006-P1010677.jpg",
            turn_right: "260183_sv-2004_b.jpg",
            backward: "260205-nd.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2006,
        windows: [{
            image_name: "https://player.vimeo.com/video/227590974?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "30.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "2006-P1010677.jpg": {
        coords: "39% 47%",
        paths: {
            forward: "260191-1997.jpg",
            turn_right: null,
            backward: "2006-P1010668.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1997,
        windows: []
    },
    "260191-1997.jpg": {
        coords: "44.7% 47%",
        paths: {
            forward: null,
            turn_right: "2006-P1010686.jpg",
            backward: "2006-P1010677.jpg",
            turn_left: "2006-P1010686.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1997,
        windows: []
    },
    "259286-2000.jpg": {
        coords: "55.2% 46.4%",
        paths: {
            forward: "2008_MG_3020.jpg",
            turn_right: null,
            backward: "260041.jpg",
            turn_left: "2017-5908.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2008,
        windows: []
    },
    "2008_MG_3020.jpg": {
        coords: "56.2% 46.4%",
        paths: {
            forward: "2006-P1010686.jpg",
            turn_right: null,
            backward: "259286-2000.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2008,
        windows: []
    },
    "2006-P1010686.jpg": {
        coords: "52.4% 46.4%",
        paths: {
            forward: "2010-_MG_0419.jpg",
            turn_right: "260191-1997.jpg",
            backward: "2008_MG_3020.jpg",
            turn_left: "260191-1997.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2006,
        windows: []
    },
    "2010-_MG_0421.jpg": {
        coords: "36.2% 47.6%",
        paths: {
            forward: null,
            turn_right: "2010-_MG_0419.jpg",
            backward: null,
            turn_left: "260183_sv-2004_b.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NW",
        year: 2010,
        windows: []
    },
    //
    //
    //
    //
    // HENYARD
    //
    //
    //
    //
    "259914-2004-aws.jpg": {
        coords: "54.8% 67.2%",
        paths: {
            forward: "260153_sv-2003q.jpg",
            //jump_boxwood
            turn_right: "260130_sv-2003.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "260038-1995-aws.jpg",
            r_backward: null
        },
        direction: "NW",
        year: 2004,
        windows: []
    },
    "260153_sv-2003q.jpg": {
        coords: "56.0% 60.0%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "259914-2004-aws.jpg",
            turn_left: null,
            l_forward: "2017-5903.JPG",
            r_forward: "260157-1993.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "NW",
        year: 2003,
        windows: []
    },
    "260129_sv2002.jpg": {
        //jump_north_house
        // key picture: henyard
        coords: "65.7% 65.3%",
        paths: {
            forward: "260130_sv-2003.jpg",
            turn_right: "259252-1998.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2002,
        windows: [{
            image_name: "173418_sv-1986.jpg",
            year: 1986,
            css_props: {
                top: "30.49%",
                left: "40.78%",
                width: "14.24%",
                height: "25.45%"
            }
        }]
    },
    "260130_sv-2003.jpg": {
        //jump_north_house
        // key picture: henyard
        coords: "50.7% 72.3%",
        paths: {
            forward: null,
            turn_right: "2017-5929.JPG",
            backward: "260129_sv2002.jpg",
            turn_left: "259914-2004-aws.jpg",
            l_forward: null,
            r_forward: "260111-1993.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2003,
        windows: [{
            image_name: "173150_sv-1965.jpg",
            year: 1965,
            css_props: {
                top: "50.49%", // 100*118/576
                left: "60.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "21.45%" // 100*123/576
            }
        },
        {
            image_name: "https://player.vimeo.com/video/227585119?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "10.49%",
                left: "25.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "260111-1993.jpg": {
        coords: "49.6% 77.3%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: "260113-1993.jpg",
            r_forward: null,
            l_backward: "260130_sv-2003.jpg",
            r_backward: null
        },
        direction: "NE",
        year: 1993,
        windows: []
    },
    "260113-1993.jpg": {
        coords: "46.3% 77.3%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: "260112-1998-aws.jpg",
            l_backward: null,
            r_backward: "260111-1993.jpg"
        },
        direction: "N",
        year: 1993,
        windows: []
    },
    "260112-1998-aws.jpg": {
        coords: "42.1% 77.3%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: "260115-1993.jpg",
            r_forward: null,
            l_backward: "260113-1993.jpg",
            r_backward: null
        },
        direction: "NE",
        year: 1998,
        windows: []
    },
    "260115-1993.jpg": {
        coords: "41.4% 77.3%",
        paths: {
            forward: "260118-1998.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "260112-1998-aws.jpg"
        },
        direction: "N",
        year: 1993,
        windows: []
    },
    "260118-1998.jpg": {
        coords: "39.6% 77.3%",
        paths: {
            forward: "260120-1998-aws.jpg",
            turn_right: null,
            backward: "260112-1998-aws.jpg",
            turn_left: null,
            l_forward: "260119-1998-aws.jpg",
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1998,
        windows: []
    },
    "260119-1998-aws.jpg": {
        coords: "39.1% 76.5%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: "2007_MG_2075.jpg",
            l_forward: null,
            r_forward: "260120-1998-aws.jpg",
            l_backward: null,
            r_backward: "260118-1998.jpg"
        },
        direction: "NW",
        year: 1998,
        windows: [{
            image_name: "260137_sv-1995.jpg",
            year: 1995,
            css_props: {
                top: "30.49%", // 100*118/576
                left: "50.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "21.45%" // 100*123/576
            }
        }]
    },
    "2007_MG_2075.jpg": {
        coords: "39.1% 73.6%",
        paths: {
            forward: null,
            turn_right: "260119-1998-aws.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2007,
        windows: []
    },
    // "2007_MG_2075--260183_sv-2004-a.jpg": {
    //     coords: "38.1% 56.6%",
    //     paths: {
    //         forward: "260183_sv-2004_a.jpg",
    //         turn_right: "2006-P1010660.jpg",
    //         backward: "2007_MG_2075.jpg",
    //         turn_left: "260131_sv-2003q.jpg",
    //         l_forward: null,
    //         r_forward: null,
    //         l_backward: null,
    //         r_backward: null
    //     },
    //     direction: "W",
    //     year: "GAP",
    //     windows: []
    // },

    "260120-1998-aws.jpg": {
        coords: "36.8% 77.3%",
        paths: {
            forward: "260122-1998-aws.jpg",
            turn_right: null,
            backward: "260118-1998.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "260119-1998-aws.jpg",
            r_backward: null
        },
        direction: "N",
        year: 1998,
        windows: []
    },
    "260122-1998-aws.jpg": {
        coords: "30.4% 77.3%",
        paths: {
            forward: "260123-1996.jpg",
            turn_right: null,
            backward: "260120-1998-aws.jpg",
            turn_left: "2007_MG_2091.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1998,
        windows: [{
            image_name: "173286_sv-1979.jpg",
            year: 1979,
            css_props: {
                top: "30.49%",
                left: "40.78%",
                width: "14.24%",
                height: "25.45%"
            }
        }]
    },
    "2007_MG_2091.jpg": {
        coords: "23.5% 76.6%",
        paths: {
            forward: null,
            turn_right: "260122-1998-aws.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2007,
        windows: []
    },
    "260123-1996.jpg": {
        coords: "7.1% 77.3%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "260122-1998-aws.jpg",
            turn_left: "260160-2005-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "2017-5895.JPG"
        },
        direction: "N",
        year: 1996,
        windows: []
    },
    "260160-2005-aws.jpg": {
        coords: "7.1% 74.0%",
        paths: {
            forward: "2017-5899.JPG",
            turn_right: "260123-1996.jpg",
            backward: null,
            turn_left: "260140_sv-1997.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2005,
        windows: []
    },
    "2017-5899.JPG": {
        coords: "7.1% 71.0%",
        paths: {
            forward: null,
            turn_right: "260159-2005-aws.jpg",
            backward: "260160-2005-aws.jpg",
            turn_left: "2017-5880.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2017,
        windows: []
    },
    "2017-5880.JPG": {
        coords: "9.1% 57.0%",
        paths: {
            forward: "2017-5881.JPG",
            turn_right: "2017-5899.JPG",
            backward: "2017-5874.JPG",
            turn_left: "2017-5883.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2017,
        windows: []
    },
    "2017-5881.JPG": {
        coords: "15.1% 57.0%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "2017-5880.JPG",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2017,
        windows: []
    },
    "2017-5874.JPG": {
        coords: "5.1% 53.0%",
        paths: {
            forward: "2017-5880.JPG",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2017,
        windows: []
    },
    "2017-5883.JPG": {
        coords: "10.1% 57.0%",
        paths: {
            forward: "2017-5895.JPG",
            turn_right: "2017-5880.JPG",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: "2017-5900.JPG",
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2017,
        windows: []
    },

    "2017-5900.JPG": {
        coords: "16.1% 58.0%",
        paths: {
            forward: "260155-1993.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "2017-5883.JPG",
            r_backward: null
        },
        direction: "S",
        year: 2017,
        windows: []
    },

    "260140_sv-1997.jpg": {
        coords: "7.9% 68.3%",
        paths: {
            forward: null,
            turn_right: "260160-2005-aws.jpg",
            backward: null,
            turn_left: null,
            l_forward: "260136-1996.jpg",
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 1997,
        windows: []
    },
    "260136-1996.jpg": {
        coords: "10.8% 70.7%",
        paths: {
            forward: "2007_MG_2010.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: "260127-1996.jpg",
            l_backward: "2017-5895.JPG",
            r_backward: "260140_sv-1997.jpg"
        },
        direction: "S",
        year: 1996,
        windows: [{
                image_name: "259245-1995.jpg",
                year: 1995,
                css_props: {
                    top: "30.49%", // 100*118/576
                    left: "20.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "18.45%" // 100*123/576
                }
            },
            {
                image_name: "173227_sv-1973.jpg",
                year: 1973,
                css_props: {
                    top: "50.49%", // 100*118/576
                    left: "50.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "21.45%" // 100*123/576
                }
            },
            {
                image_name: "173256_sv-1976.jpg",
                year: 1976,
                css_props: {
                    top: "40.49%", // 100*118/576
                    left: "70.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "21.45%" // 100*123/576
                }
            }

        ]
    },
    "2007_MG_2010.jpg": {
        coords: "15.1% 75.4%",
        paths: {
            forward: "2007_MG_2006.jpg",
            turn_right: null,
            backward: "260136-1996.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "260127-1996.jpg"
        },
        direction: "S",
        year: 2007,
        windows: [{
            image_name: "173325_sv-1981.jpg",
            year: 1981,
            css_props: {
                top: "30.49%",
                left: "40.78%",
                width: "14.24%",
                height: "25.45%"
            }
        }]
    },
    "260127-1996.jpg": {
        coords: "13% 67%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: "2007_MG_2010.jpg",
            r_forward: null,
            l_backward: "260136-1996.jpg",
            r_backward: null
        },
        direction: "SW",
        year: 1996,
        windows: []
    },
    "2010_MG_0456.jpg": {
        coords: "17.8% 58.5%",
        paths: {
            forward: "2017-5888.JPG",
            turn_right: null,
            backward: null,
            turn_left: "260155-1993.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 2010,
        windows: []
    },
    "2007_MG_2006.jpg": {
        coords: "19.3% 71.1%",
        paths: {
            forward: "260131-1992-aws.jpg",
            turn_right: null,
            backward: "2007_MG_2010.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2007,
        windows: [{
            image_name: "173198_sv-1971.jpg",
            year: 1971,
            css_props: {
                top: "30.49%",
                left: "40.78%",
                width: "14.24%",
                height: "25.45%"
            }
        }]
    },
    "260131-1992-aws.jpg": {
        coords: "23.3% 69.5%",
        paths: {
            forward: "260138-1993.jpg",
            turn_right: null,
            backward: "2007_MG_2006.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1992,
        windows: []
    },
    "260138-1993.jpg": {
        coords: "42.2% 69.5%",
        paths: {
            forward: "260132-1993.jpg",
            turn_right: null,
            backward: "260131-1992-aws.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 1993,
        windows: []
    },
    "260132-1993.jpg": {
        coords: "43.9% 67.4%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "260138-1993.jpg",
            turn_left: null,
            l_forward: "260143-2004-aws.jpg",
            r_forward: "260140-1998.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1993,
        windows: []
    },
    "260140-1998.jpg": {
        coords: "47.9% 70.2%",
        paths: {
            forward: "260145-1998-aws.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "260132-1993.jpg",
            r_backward: null
        },
        direction: "S",
        year: 1998,
        windows: []
    },
    "260143-2004-aws.jpg": {
        coords: "47.9% 70.5%",
        paths: {
            forward: "260036-2004-aws.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "260132-1993.jpg"
        },
        direction: "SE",
        year: 2004,
        windows: []
    },
    "260036-2004-aws.jpg": {
        coords: "53.8% 80.9%",
        paths: {
            forward: null,
            turn_right: "260037-1992-aws.jpg",
            backward: "260143-2004-aws.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SE",
        year: 2004,
        windows: []
    },
    "260145-1998-aws.jpg": {
        coords: "51.6% 70.6%",
        paths: {
            forward: null,
            turn_right: "260153_sv-2003q.jpg",
            backward: "260140-1998.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1998,
        windows: []
    },
    //
    //
    //
    //
    // DRIVEWAY E-W
    //
    //
    //
    //
    "260154_sv2003.jpg": {
        //key picture: Driveway
        coords: "58.1% 94.1%",
        paths: {
            forward: null,
            turn_right: "260037-1992-aws.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 2003,
        windows: []
    },
    "98SWE0812-1998.jpg": {
        coords: "54% 95%",
        paths: {
            forward: "260037-1992-aws.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 1998,
        windows: [{
            image_name: "https://player.vimeo.com/video/227579800?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "30.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "260037-1992-aws.jpg": {
        coords: "58.1% 88%",
        paths: {
            forward: "260038-1995-aws.jpg",
            turn_right: null,
            backward: "98SWE0812-1998.jpg",
            turn_left: "260154_sv2003.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 1992,
        windows: [{
                image_name: "173290_sv-1979.jpg",
                year: 1979,
                css_props: {
                    top: "20.49%",
                    left: "40.78%",
                    width: "14.24%",
                    height: "25.45%"
                }
            }
        ]
    },
    "260037-1992-aws--173449_sv-1987.jpg": {
        coords: "50.1% 88%",
        paths: {
            forward: "173449_sv-1987.jpg",
            turn_right: "2005-P1000843.jpg",
            backward: null,
            turn_left: "260038-1995-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: "GAP",
        windows: []
    },
    "173449_sv-1987.jpg": {
        //leaf passage
        coords: "25.3% 85.6%",
        paths: {
            forward: null,
            turn_right: "260034-1995.jpg",
            backward: "260037-1992-aws--173449_sv-1987.jpg",
            turn_left: "260034-1995.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1987,
        windows: []
    },
    "260034-1995.jpg": {
        //leaf passage
        coords: "10.6% 85.6%",
        paths: {
            forward: "173450_sv-1987.jpg",
            turn_right: "173449_sv-1987.jpg",
            backward: null,
            turn_left: "173449_sv-1987.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1995,
        windows: []
    },
    "173450_sv-1987.jpg": {
        //leaf passage
        coords: "20% 85.6%",
        paths: {
            forward: "260035-2005-aws.jpg",
            turn_right: null,
            backward: "260034-1995.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1987,
        windows: [{
            image_name: "260034-1995.jpg",
            year: 1965,
            css_props: {
                top: "40.49%", // 100*118/576
                left: "35.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "18.45%" // 100*123/576
            }
        }]
    },
    "260035-2005-aws.jpg": {
        //leaf passage
        coords: "51.6% 85.6%",
        paths: {
            forward: null,
            turn_right: "260038-1995-aws.jpg",
            backward: "173450_sv-1987.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2005,
        windows: []
    },
    "260038-1995-aws.jpg": {
        coords: "58.1% 83.4%",
        paths: {
            forward: "2017-5903.JPG",
            turn_right: "260037-1992-aws--173449_sv-1987.jpg",
            backward: "260037-1992-aws.jpg",
            turn_left: "260035-2005-aws.jpg",
            l_forward: "259269-1996.jpg",
            r_forward: "259914-2004-aws.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 1995,
        windows: []
    },
    "2017-5903.JPG": {
        coords: "58.1% 57%",
        paths: {
            forward: "260039-1995-aws.jpg",
            turn_right: "260157-1993.jpg",
            backward: "260038-1995-aws.jpg",
            turn_left: "259923-1995-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "260153_sv-2003q.jpg"
        },
        direction: "W",
        year: 2017,
        windows: []
    },
    "259269-1996.jpg": {
        coords: "61.7% 60%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: "259913-2004-aws.jpg",
            l_forward: null,
            r_forward: "260039-1995-aws.jpg",
            l_backward: null,
            r_backward: "260038-1995-aws.jpg"
        },
        direction: "SW",
        year: 1996,
        windows: []
    },
    "259913-2004-aws.jpg": {
        coords: "58.1% 83.4%",
        paths: {
            forward: null,
            turn_right: "259269-1996.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2004,
        windows: []
    },
    "260039-1995-aws.jpg": {
        coords: "57.4% 50.0%",
        paths: {
            forward: "2017-5908.JPG",
            turn_right: null,
            backward: "2017-5903.JPG",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "259269-1996.jpg",
            r_backward: null
        },
        direction: "W",
        year: 1995,
        windows: []
    },
    "2017-5908.JPG": {
        coords: "57.4% 46.0%",
        paths: {
            forward: "2017-5909.JPG",
            turn_right: "260041.jpg",
            backward: "260039-1995-aws.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2017,
        windows: []
    },
    "2017-5909.JPG": {
        coords: "57.4% 40.0%",
        paths: {
            forward: "2017-5852.JPG",
            turn_right: "259903-2004-aws.jpg",
            backward: "2017-5908.JPG",
            turn_left: "2017-5911.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2017,
        windows: []
    },
    "2017-5911.JPG": {
        coords: "57.4% 32.0%",
        paths: {
            forward: null,
            turn_right: "2017-5909.JPG",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2017,
        windows: []
    },
    "2017-5852.JPG": {
        coords: "57.4% 32.0%",
        paths: {
            forward: "2017-5853.JPG",
            turn_right: "260150_sv-2003q.jpg",
            backward: "2017-5909.JPG",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2017,
        windows: []
    },
    "260150_sv-2003q.jpg": {
        coords: "57.4% 32.0%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: "2017-5852.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NW",
        year: 2003,
        windows: [{
                image_name: "260502_sv-2004-aws.jpg",
                year: 2004,
                css_props: {
                    top: "30.49%", // 100*118/576
                    left: "50.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "18.45%" // 100*123/576
                }
            },
            {
                image_name: "2008_MG_3019.jpg",
                year: 2008,
                css_props: {
                    top: "50.49%", // 100*118/576
                    left: "70.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "18.45%" // 100*123/576
                }
            }
        ]
    },
    "2017-5853.JPG": {
        coords: "57.4% 12.0%",
        paths: {
            forward: "2006-P1010623-crop-1.jpg",
            turn_right: null,
            backward: "2017-5852.JPG",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2017,
        windows: []
    },
    "2006-P1010661.jpg": {
        coords: "57.2% 39.7%",
        paths: {
            forward: "260502_sv-2004-aws.jpg",
            turn_right: null,
            backward: "260039-1995-aws.jpg",
            turn_left: "259907-2004-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2006,
        windows: []
    },
    "259907-2004-aws.jpg": {
        coords: "58.8% 46.9%",
        paths: {
            forward: null,
            turn_right: "2006-P1010661.jpg",
            backward: null,
            turn_left: "259923-1995-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 2004,
        windows: []
    },
    "260502_sv-2004-aws.jpg": {
        coords: "57.1% 25.6%",
        paths: {
            forward: "2006-P1010623-crop-1.jpg",
            turn_right: "259903-2004-aws.jpg",
            backward: "2006-P1010661.jpg",
            turn_left: "2017-5911.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NW",
        year: 2004,
        windows: []
    },
    "2006-P1010623-crop-1.jpg": {
        coords: "57.2% 9.2%",
        paths: {
            forward: null,
            turn_right: "2017-5855.JPG",
            backward: "2017-5853.JPG",
            turn_left: "259236-1995.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2006,
        windows: []
    },

    //
    //
    //
    //
    // DRIVEWAY W-E
    //
    //
    //
    //
    //jump_driveway_w-e
    "2017-5917.JPG": {
        coords: "59.5% 6.7%",
        paths: {
            forward: "2006-P1010665.jpg",
            turn_right: "259236-1995.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2017,
        windows: []
    },
    "2006-P1010665.jpg": {
        coords: "59.5% 8.7%",
        paths: {
            forward: "260043-1998-aws.jpg",
            turn_right: null,
            backward: "2017-5917.JPG",
            turn_left: "2017-5855.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2006,
        windows: []
    },
    "260043-1998-aws.jpg": {
        coords: "58.1% 22.7%",
        paths: {
            forward: "260044-1998-aws.jpg",
            turn_right: null,
            backward: "2006-P1010665.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "260180-2004-aws.jpg",
            r_backward: null
        },
        direction: "E",
        year: 1998,
        windows: []
    },
    "260044-1998-aws.jpg": {
        coords: "58.1% 27.1%",
        paths: {
            forward: "259944-nd.jpg",
            turn_right: null,
            backward: "260043-1998-aws.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NE",
        year: 1998,
        windows: []
    },
    "259944-nd.jpg": {
        coords: "57.0% 39.0%",
        paths: {
            forward: "2017-5930.JPG",
            turn_right: "2017-5911.JPG",
            backward: "260044-1998-aws.jpg",
            turn_left: "259903-2004-aws.jpg",
            l_forward: null,
            r_forward: "173277_sv-1978.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: "-",
        windows: []
    },
    "2017-5930.JPG": {
        coords: "57.0% 56.0%",
        paths: {
            forward: "2017-5929.JPG",
            turn_right: "259923-1995-aws.jpg",
            backward: "259944-nd.jpg",
            turn_left: "260157-1993.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: "2017",
        windows: []
    },
    "2017-5929.JPG": {
        coords: "57.0% 74.0%",
        paths: {
            forward: "2005-P1000843.jpg",
            turn_right: null,
            backward: "2017-5930.JPG",
            turn_left: "260130_sv-2003.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: "2017",
        windows: []
    },
    "260041.jpg": {
        //key picture: Flower Garden
        coords: "57.0% 46.0%",
        paths: {
            forward: "259286-2000.jpg",
            turn_right: "259944-nd.jpg",
            backward: null,
            turn_left: "2017-5908.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: "-",
        windows: []
    },
    "260045-2004.jpg": {
        coords: "62% 48%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "173277_sv-1978.jpg",
            turn_left: null,
            l_forward: "2005-P1000843.jpg",
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SE",
        year: 2004,
        windows: []
    },
    "173277_sv-1978.jpg": {
        coords: "59.1% 54.5%",
        paths: {
            forward: "260045-2004.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "259944-nd.jpg",
            r_backward: null
        },
        direction: "SE",
        year: 1978,
        windows: []
    },
    "260102-1994-aws-crop.jpg": {
        coords: "67% 47.7%",
        paths: {
            forward: "259908-2004-aws.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "259923-1995-aws.jpg",
            r_backward: null
        },
        direction: "W",
        year: 1994,
        windows: []
    },
    "2005-P1000843.jpg": {
        coords: "57.5% 88.2%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "2017-5929.JPG",
            turn_left: "260037-1992-aws--173449_sv-1987.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "260045-2004.jpg"
        },
        direction: "NE",
        year: 2005,
        windows: []
    },
    //
    //
    //
    //
    // FIRE PLACE
    //
    //
    //
    //
    "260177-1994-aws.jpg": {
        coords: "53.6% 11.9%",
        paths: {
            forward: "259936-1989-95.jpg",
            turn_right: "260180-2004-aws.jpg",
            backward: "2017-5855.JPG",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NE",
        year: 1994,
        windows: [{
            image_name: "260179-1998-aws.jpg",
            year: 1998,
            css_props: {
                // Note that these percentages are relative to the original
                // image dimensions. This window was 123px by 123px on a 864px
                //  by 576px image, located at (577px, 118px) within the image.
                top: "63.49%", // 100*118/576
                left: "63.78%", // 100*577/864
                width: "14.24%", // 100*123/864
                height: "21.35%" // 100*123/576
            }
        },
        {
            image_name: "https://player.vimeo.com/video/227589846?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "20.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "260180-2004-aws.jpg": {
        coords: "53.3% 13.7%",
        paths: {
            forward: null,
            turn_right: "260182-1995-aws.jpg",
            backward: null,
            turn_left: "260177-1994-aws.jpg",
            l_forward: "260181-2002-aws.jpg",
            r_forward: "260043-1998-aws.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2004,
        windows: []
    },
    "260181-2002-aws.jpg": {
        coords: "53.3% 20.2%",
        paths: {
            forward: "173301_sv-1978.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: "",
            l_backward: null,
            r_backward: "260180-2004-aws.jpg"
        },
        direction: "E",
        year: 2002,
        windows: []
    },
    "173301_sv-1978.jpg": {
        coords: "52.7% 31.9%",
        paths: {
            forward: "260183-1998-aws-crop.jpg",
            turn_right: "260164_sv2005q.jpg",
            backward: "260181-2002-aws.jpg",
            turn_left: "2005-P1000852.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1978,
        windows: []
    },
    //Pending To Change
    "260183-1998-aws-crop.jpg": {
        coords: "51.4% 35.7%",
        paths: {
            forward: null,
            turn_right: "2017-5911.JPG",
            backward: "173301_sv-1978.jpg",
            turn_left: "2007_MG_2014_cropped.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1998,
        windows: []
    },
    "260214-1998-aws-crop1.jpg": {
        coords: "51.4% 36.7%",
        paths: {
            forward: "2017-5911.JPG",
            turn_right: null,
            backward: "2017-5922.JPG",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1998,
        windows: []
    },
    "2017-5911.JPG": {
        coords: "58% 36.7%",
        paths: {
            forward: "260215-1998-aws-crop.jpg",
            turn_right: "2017-5909.JPG",
            backward: "260214-1998-aws-crop1.jpg",
            turn_left: "259944-nd.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1998,
        windows: []
    },

    "2007_MG_2014_cropped.jpg": {
        coords: "50.4% 36.7%",
        paths: {
            forward: "260219-1995.jpg",
            turn_right: null,
            backward: "2017-5921.JPG",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2007,
        windows: []
    },
    "260219-1995.jpg": {
        coords: "41.8% 38.7%",
        paths: {
            forward: "260194_sv-2003q.jpg",
            turn_right: null,
            backward: "2007_MG_2014_cropped.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1995,
        windows: []
    },
    "260164_sv2005q.jpg": {
        coords: "51.6% 29.3%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "173300_sv-1978.jpg",
            turn_left: "173301_sv-1978.jpg",
            l_forward: null,
            r_forward: "2017-5859.JPG",
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 2005,
        windows: []
    },
    "2017-5859.JPG": {
        coords: "51.6% 26.3%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: "2017-5860.JPG",
            l_backward: "260164_sv2005q.jpg",
            r_backward: null
        },
        direction: "SW",
        year: 2017,
        windows: []
    },
    "2017-5860.JPG": {
        coords: "50.6% 20.3%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: "2017-5861.JPG",
            l_backward: "2017-5859.JPG",
            r_backward: null
        },
        direction: "W",
        year: 2017,
        windows: []
    },
    "2017-5861.JPG": {
        coords: "49.6% 18.3%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: "259936-1989-95.jpg",
            l_backward: "2017-5860.JPG",
            r_backward: null
        },
        direction: "NW",
        year: 2017,
        windows: []
    },
    "173300_sv-1978.jpg": {
        coords: "50.9% 29.9%",
        paths: {
            forward: "260164_sv2005q.jpg",
            turn_right: null,
            backward: null,
            turn_left: "260183-1998-aws-crop.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "2007_MG_2238.jpg"
        },
        direction: "SW",
        year: 1978,
        windows: []
    },
    "2007_MG_2238.jpg": {
        coords: "50.3% 30.9%",
        paths: {
            forward: null,
            turn_right: "2005-P1000852.jpg",
            backward: null,
            turn_left: "2017-5922.JPG",
            l_forward: "173300_sv-1978.jpg",
            r_forward: null,
            l_backward: null,
            r_backward: "2017-5921.JPG"
        },
        direction: "W",
        year: 2007,
        windows: [{
            image_name: "https://player.vimeo.com/video/227590294?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "20.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "2005-P1000852.jpg": {
        coords: "47.3% 31.2%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: "2007_MG_2238.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2005,
        windows: []
    },
    // "173299_sv-1978.jpg": {
    //     coords: "47.8% 33.6%",
    //     paths: {
    //         forward: "173300_sv-1978.jpg",
    //         turn_right: null,
    //         backward: null,
    //         turn_left: "2005-P1000852.jpg",
    //         l_forward: null,
    //         r_forward: null,
    //         l_backward: null,
    //         r_backward: null
    //     },
    //     direction: "S",
    //     year: 1978,
    //     windows: []
    // },
    "259936-1989-95.jpg": {
        coords: "47.8% 9.2%",
        paths: {
            forward: "259934-1989-95.jpg",
            turn_right: null,
            backward: "260177-1994-aws.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "2017-5861.JPG"
        },
        direction: "N",
        year: 1989,
        windows: []
    },
    //
    //
    //
    //
    // KITCHEN GARDEN
    //
    //
    //
    //
    "260162_sv-2003.jpg": {
        //key picture: kitchen garden
        coords: "31.4% 15.6%",
        paths: {
            forward: null,
            turn_right: "260172-1994-aws.jpg",
            backward: null,
            turn_left: "2006-P1010610.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: "260195-1996.jpg",
            r_backward: null
        },
        direction: "NE",
        year: 2003,
        windows: []
    },
    "260172-1994-aws.jpg": {
        coords: "31.4% 15.6%",
        paths: {
            forward: null,
            turn_right: "260163_sv-2001q.jpg",
            backward: null,
            turn_left: "260162_sv-2003.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1994,
        windows: [{
            image_name: "https://player.vimeo.com/video/227588348?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "20.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "260163_sv-2001q.jpg": {
        coords: "31.4% 15.6%",
        paths: {
            forward: null,
            turn_right: "2006-P1010610.jpg",
            backward: null,
            turn_left: "260172-1994-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1996,
        windows: []
    },
    "2006-P1010610.jpg": {
        coords: "31.4% 15.6%",
        paths: {
            forward: null,
            turn_right: "260162_sv-2003.jpg",
            backward: null,
            turn_left: "260163_sv-2001q.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 1996,
        windows: []
    },
    //
    //
    //
    //
    // Old Orchard Left Path
    //
    //
    //
    "260054-1997.jpg": {
        //jump_orchard
        //key image: old orchard
        coords: "79.5% 46%",
        paths: {
            forward: "2007_MG_2258.jpg",
            turn_right: null,
            backward: "173170_sv-1970.jpg",
            turn_left: "260175_sv-2003q.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "259896-2002.jpg"
        },
        direction: "SW",
        year: 1997,
        windows: []
    },
    "2007_MG_2258.jpg": {
        coords: "80.0% 45.4%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "260054-1997.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: "260126_sv-2005q.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 2007,
        windows: []
    },
    "260126_sv-2005q.jpg": {
        coords: "80.0% 43.4%",
        paths: {
            forward: "2005-P1000855.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: "2017-5918.JPG",
            r_forward: null,
            l_backward: "2007_MG_2258.jpg",
            r_backward: null
        },
        direction: "W",
        year: 2007,
        windows: []
    },
    "2017-5918.JPG": {
        coords: "82.0% 35.4%",
        paths: {
            forward: "173339_sv-1981.jpg",
            turn_right: "2005-P1000855.jpg",
            backward: "173246_sv-1976.jpg",
            turn_left: "260060-1992-aws-crop.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "260126_sv-2005q.jpg"
        },
        direction: "S",
        year: 2017,
        windows: []
    },
    "173339_sv-1981.jpg": {
        coords: "86.1% 37.8%",
        paths: {
            forward: "2005-P1000956.jpg",
            turn_right: null,
            backward: "2017-5918.JPG",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 1981,
        windows: []
    },
    "2005-P1000956.jpg": {
        coords: "87.3% 37%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "173339_sv-1981.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: "259927-2005.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2005,
        windows: []
    },
    "259927-2005.jpg": {
        coords: "86.3% 38.1%",
        paths: {
            forward: "260121_sv-1997q.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "2005-P1000956.jpg",
            r_backward: null
        },
        direction: "SW",
        year: 2005,
        windows: []
    },
    "260121_sv-1997q.jpg": {
        coords: "88.9% 31.9%",
        paths: {
            forward: "260122_sv1995.jpg",
            turn_right: "2005-P1000825.jpg",
            backward: "259927-2005.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 1997,
        windows: [{
                image_name: "260119_sv-nd.jpg",
                year: "-",
                css_props: {
                    top: "30.49%", // 100*118/576
                    left: "20.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "18.45%" // 100*123/576
                }
            },
            {
                image_name: "260120_sv-nd.jpg",
                year: "-",
                css_props: {
                    top: "40.49%", // 100*118/576
                    left: "50.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "18.45%" // 100*123/576
                }
            }
        ]
    },
    "260122_sv1995.jpg": {
        coords: "89.2% 31.5%",
        paths: {
            forward: "2006-P1010615.jpg",
            turn_right: null,
            backward: "260121_sv-1997q.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 1995,
        windows: []
    },
    "2006-P1010615.jpg": {
        coords: "89.2% 31%",
        paths: {
            forward: "2006-P1010736.jpg",
            turn_right: null,
            backward: "260122_sv1995.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 2006,
        windows: [{
            image_name: "https://player.vimeo.com/video/227579077?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "20.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "2007_MG_2146.jpg": {
        coords: "89.7% 29.5%",
        paths: {
            forward: "2006-P1010736.jpg",
            turn_right: null,
            backward: "2006-P1010615.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 2007,
        windows: []
    },
    "2006-P1010736.jpg": {
        coords: "89.5% 29.7%",
        paths: {
            forward: "260119_sv-nd.jpg",
            turn_right: null,
            backward: "2007_MG_2146.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 2007,
        windows: []
    },
    "260119_sv-nd.jpg": {
        coords: "90% 28.5%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "2006-P1010736.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: "260078-2002.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: "-",
        windows: []
    },
    "260078-2002.jpg": {
        coords: "86% 23.5%",
        paths: {
            forward: null,
            turn_right: "260125_sv-2007q.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "260119_sv-nd.jpg",
            r_backward: null
        },
        direction: "NW",
        year: "2002",
        windows: [{
            image_name: "173322_sv-1981.jpg",
            year: 1981,
            css_props: {
                top: "30.49%",
                left: "35.78%",
                width: "14.24%",
                height: "25.45%"
            }
        }]
    },
    "260125_sv-2007q.jpg": {
        coords: "87.9% 18.4%",
        paths: {
            forward: "260088-2004-aws.jpg",
            turn_right: null,
            backward: null,
            turn_left: "260078-2002.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2007,
        windows: [{
            image_name: "173343_s-1981v.jpg",
            year: 1981,
            css_props: {
                top: "40.49%",
                left: "30.78%",
                width: "14.24%",
                height: "25.45%"
            }
        }]
    },
    "260088-2004-aws.jpg": {
        coords: "84.9% 18.4%",
        paths: {
            forward: "2010_MG_0472.jpg",
            turn_right: "260500_sv-1992-aws.jpg",
            backward: "260125_sv-2007q.jpg",
            turn_left: "260079-2001-crop.jpg",
            l_forward: null,
            r_forward: "260180_sv-nd.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2004,
        windows: []
    },
    //
    //
    //
    //
    // Old Orchard Right Path
    //
    //
    //
    //
    "2005-P1000855.jpg": {
        coords: "80.0% 35.4%",
        paths: {
            forward: "2005-P1000825.jpg",
            turn_right: "259910-2004-aws.jpg",
            backward: "260126_sv-2005q.jpg",
            turn_left: "2017-5918.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2005,
        windows: []
    },
    "2005-P1000825.jpg": {
        coords: "80.5% 27.7%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "2005-P1000855.jpg",
            turn_left: "260121_sv-1997q.jpg",
            l_forward: null,
            r_forward: "260076-1994-aws.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2005,
        windows: []
    },
    "260077-1994-aws.jpg": {
        // key image: old orchard/guesthouse intersection
        coords: "77.5% 20.1%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "260076-1994-aws.jpg",
            turn_left: null,
            l_forward: "2005-P1000905.jpg",
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 1994,
        windows: [{
            image_name: "https://player.vimeo.com/video/227592793?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "20.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },

    // insert left path of 260077-1994-aws.jpg
    // jump_g1
    "260076-1994-aws.jpg": {
        coords: "77.5% 22.1%",
        paths: {
            forward: "260077-1994-aws.jpg",
            turn_right: "2007_MG_2254.jpg",
            backward: "259281-2000.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "2005-P1000825.jpg",
            r_backward: null
        },
        direction: "W",
        year: 1994,
        windows: []
    },
    "259281-2000.jpg": {
        coords: "70.3% 32.4%",
        paths: {
            forward: "260076-1994-aws.jpg",
            turn_right: "259908-2004-aws.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "259908-2004-aws.jpg"
        },
        direction: "SW",
        year: 2000,
        windows: []
    },
    "259908-2004-aws.jpg": {
        coords: "68.2% 33.1%",
        paths: {
            forward: "2005-P1000904.jpg",
            turn_right: "2008_MG_3088-crop.jpg",
            backward: "260102-1994-aws-crop.jpg",
            turn_left: "173246_sv-1976.jpg",
            l_forward: "259281-2000.jpg",
            r_forward: null,
            l_backward: "259896-2002.jpg",
            r_backward: null
        },
        direction: "W",
        year: 2004,
        windows: []
    },

    //jump_g2
    "173246_sv-1976.jpg": {
        coords: "66.7% 33.1%",
        paths: {
            forward: "2017-5918.JPG",
            turn_right: "259908-2004-aws.jpg",
            backward: "260215-1998-aws-crop.jpg",
            turn_left: "260061-1995.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1976,
        windows: []
    },
    "260215-1998-aws-crop.jpg": {
        //key image: enter guesthouse yard.
        coords: "65% 33.1%",
        paths: {
            forward: "173246_sv-1976.jpg",
            turn_right: null,
            backward: "2017-5911.JPG",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1998,
        windows: []
    },
    //jump_g2 back

    "2005-P1000904.jpg": {
        coords: "68.2% 29%",
        paths: {
            forward: "2008_MG_3062.jpg",
            turn_right: null,
            backward: "259908-2004-aws.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NW",
        year: 2005,
        windows: []
    },
    "2008_MG_3062.jpg": {
        coords: "68.2% 27.1%",
        paths: {
            forward: "260103-2004-aws.jpg",
            turn_right: "2008_MG_3087.jpg",
            backward: "2005-P1000904.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2008,
        windows: []
    },
    "2008_MG_3087.jpg": {
        coords: "68.2% 27.1%",
        paths: {
            forward: "2007_MG_2034.jpg",
            turn_right: null,
            backward: "2007_MG_2254.jpg",
            turn_left: "2008_MG_3062.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2008,
        windows: []
    },
    "2007_MG_2034.jpg": {
        coords: "67.6% 26.9%",
        paths: {
            forward: "259911-2004-aws.jpg",
            turn_right: null,
            backward: "2008_MG_3087.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2007,
        windows: []
    },
    "259911-2004-aws.jpg": {
        //key image: guest house end.
        coords: "65.9% 26.9%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "2007_MG_2034.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2004,
        windows: []
    },
    "260103-2004-aws.jpg": {
        coords: "67.9% 25.8%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "2008_MG_3062.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2004,
        windows: []
    },
    //jump_west_path


    // jump_g1 back
    "2005-P1000905.jpg": {
        coords: "78.7% 16.2%",
        paths: {
            forward: "260079-2001-crop.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "260077-1994-aws.jpg"
        },
        direction: "SW",
        year: 2005,
        windows: []
    },
    "260079-2001-crop.jpg": {
        // key image: pivot connecting paths around gazebo
        coords: "80.1% 13.9%",
        paths: {
            forward: "260080-1994-aws.jpg",
            turn_right: "260088-2004-aws.jpg",
            backward: "2005-P1000905.jpg",
            turn_left: "2007_MG_2040.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 2001,
        windows: [{
            image_name: "173320_sv-1981.jpg",
            year: 1981,
            css_props: {
                top: "30.49%",
                left: "40.78%",
                width: "14.24%",
                height: "25.45%"
            }
        }]
    },
    "260080-1994-aws.jpg": {
        coords: "82.1% 11.9%",
        paths: {
            forward: "259895-2002.jpg",
            turn_right: null,
            backward: "260079-2001-crop.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 1994,
        windows: [{
            image_name: "https://player.vimeo.com/video/227578088?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "30.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "259895-2002.jpg": {
        coords: "83.5% 10.2%",
        paths: {
            forward: "173321_sv-1981.jpg",
            turn_right: null,
            backward: "260080-1994-aws.jpg",
            turn_left: "2005-P1000907.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 2002,
        windows: []
    },
    "173321_sv-1981.jpg": {
        coords: "83.5% 10.2%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "259895-2002.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SE",
        year: 1981,
        windows: []
    },
    "2007_MG_2040.jpg": {
        coords: "80.1% 13.9%",
        paths: {
            forward: null,
            turn_right: "260079-2001-crop.jpg",
            backward: null,
            turn_left: "260500_sv-1992-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SE",
        year: 2007,
        windows: []
    },
    "260500_sv-1992-aws.jpg": {
        coords: "80.1% 13.9%",
        paths: {
            forward: null,
            turn_right: "2007_MG_2040.jpg",
            backward: "260124_sv-2003.jpg",
            turn_left: "260088-2004-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1992,
        windows: []
    },
    "2010_MG_0472.jpg": {
        coords: "80.1% 13.9%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "260088-2004-aws.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2010,
        windows: []
    },
    "260180_sv-nd.jpg": {
        coords: "74.8% 25.7%",
        paths: {
            forward: "2007_MG_2254.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "260088-2004-aws.jpg",
            r_backward: null
        },
        direction: "N",
        year: "-",
        windows: []
    },
    "2007_MG_2254.jpg": {
        coords: "73.4% 27.2%",
        paths: {
            forward: "2008_MG_3087.jpg",
            turn_right: "260060-1992-aws.jpg",
            backward: "260180_sv-nd.jpg",
            turn_left: "260076-1994-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2007,
        windows: []
    },
    "260060-1992-aws.jpg": {
        coords: "75.4% 27.2%",
        paths: {
            forward: "260060-1992-aws-crop.jpg",
            turn_right: null,
            backward: null,
            turn_left: "2007_MG_2254.jpg",
            l_forward: "259909-2004-aws.jpg",
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1992,
        windows: [{
            image_name: "1956-5955.jpg",
            year: 1956,
            css_props: {
                // Note that these percentages are relative to the original
                // image dimensions. This window was 123px by 123px on a 864px
                //  by 576px image, located at (577px, 118px) within the image.
                top: "30.49%", // 100*118/576
                left: "50.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "18.45%" // 100*123/576
            }
        }]
    },
    "260060-1992-aws-crop.jpg": {
        coords: "75.4% 31.2%",
        paths: {
            forward: "2008_MG_5691.jpg",
            turn_right: "2017-5918.JPG",
            backward: "260060-1992-aws.jpg",
            turn_left: "259910-2004-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1992,
        windows: []
    },
    "259910-2004-aws.jpg": {
        coords: "72.9% 32.4%",
        paths: {
            forward: "2008_MG_3088.jpg",
            turn_right: "260060-1992-aws-crop.jpg",
            backward: "2007_MG_2254.jpg",
            turn_left: "2005-P1000855.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2004,
        windows: []
    },
    "2008_MG_3088.jpg": {
        //key image: end of guesthouse
        coords: "70.5% 35.9%",
        paths: {
            forward: "2008_MG_3088-crop.jpg",
            turn_right: null,
            backward: "259910-2004-aws.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2008,
        windows: []
    },
    "2008_MG_3088-crop.jpg": {
        //key image: end of guesthouse
        coords: "68.5% 35.9%",
        paths: {
            forward: "275885_sv.jpg",
            turn_right: "259909-2004-aws.jpg",
            backward: "2008_MG_3088.jpg",
            turn_left: "259908-2004-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2008,
        windows: []
    },
    "275885_sv.jpg": {
        //key image: end of guesthouse
        coords: "62.5% 35.9%",
        paths: {
            forward: "259903-2004-aws.jpg",
            turn_right: null,
            backward: "2008_MG_3088-crop.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1992,
        windows: [{
            image_name: "173396_sv-1982.jpg",
            year: 1982,
            css_props: {
                top: "35.49%",
                left: "40.78%",
                width: "14.24%",
                height: "25.45%"
            }
        }]
    },
    //
    //
    //
    //
    // Main Path S-N
    //
    //
    //
    // jump_north_house
    "259903-2004-aws.jpg": {
        //key image: beginning of main path
        coords: "53.9% 37.9%",
        paths: {
            forward: "2017-5921.JPG",
            turn_right: "259944-nd.jpg",
            backward: "275885_sv.jpg",
            turn_left: "2017-5909.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2008,
        windows: [
            {
                image_name: "https://player.vimeo.com/video/227561751?autoplay=1&title=0&byline=0&portrait=0",
                css_props: {
                    top: "30.49%",
                    left: "40.78%",
                    width: "32vw",
                    height: "20vw"
                }
            }]
    },
    "2017-5921.JPG": {
        coords: "51.5% 37%",
        paths: {
            forward: "2007_MG_2014_cropped.jpg",
            turn_right: null,
            backward: "259903-2004-aws.jpg",
            turn_left: null,
            l_forward: "2007_MG_2238.jpg",
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2017,
        windows: []
    },
    //
    //
    //
    //
    // North side of the House
    //
    //
    //
    // jump_north_house
    "259909-2004-aws.jpg": {
        coords: "69.2% 37.4%",
        paths: {
            forward: "260061-1995.jpg",
            turn_right: null,
            backward: null,
            turn_left: "2008_MG_3088-crop.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "260060-1992-aws.jpg"
            //jump_north_house
        },
        direction: "E",
        year: 2004,
        windows: []
    },
    "260050-2004.jpg": {
        coords: "68.1% 44%",
        paths: {
            forward: "259252-1998.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "260061-1995.jpg"
        },
        direction: "E",
        year: 2004,
        windows: []
    },
    "259252-1998.jpg": {
        coords: "66.6% 63.5%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "260050-2004.jpg",
            turn_left: "260129_sv2002.jpg",
            l_forward: "260151_sv-2003.jpg",
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1998,
        windows: []
    },
    "260151_sv-2003.jpg": {
        //jump_driveway
        coords: "66.3% 71.9%",
        paths: {
            forward: "2005-P1000843.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "259252-1998.jpg"
        },
        direction: "NE",
        year: 2003,
        windows: []
    },



    //
    //
    //
    //
    // Patio
    //
    //
    //
    // jump_patio
    "260061-1995.jpg": {
        coords: "69.6% 39.6%",
        paths: {
            forward: null,
            turn_right: "173246_sv-1976.jpg",
            backward: "259909-2004-aws.jpg",
            turn_left: null,
            l_forward: "260050-2004.jpg",
            r_forward: "260174_sv-2004.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1995,
        windows: [{
            image_name: "1960s-5968.jpg",
            year: "1960s",
            css_props: {
                top: "30.49%", // 100*118/576
                left: "50.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "18.45%" // 100*123/576
            }
        }]
    },
    // "173239_sv-1976.jpg": {
    //     coords: "69.6% 39.1%",
    //     paths: {
    //         forward: null,
    //         turn_right: null,
    //         backward: null,
    //         turn_left: null,
    //         l_forward: "2008_MG_5691.jpg",
    //         r_forward: null,
    //         l_backward: "260061-1995.jpg",
    //         r_backward: null
    //     },
    //     direction: "E",
    //     year: 1976,
    //     windows: []
    // },
    "2008_MG_5691.jpg": {
        coords: "71.2% 45.7%",
        paths: {
            forward: "2008_MG_5726.jpg",
            turn_right: null,
            backward: "260060-1992-aws-crop.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: "2008_MG_3091.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2008,
        windows: []
    },
    "2008_MG_5726.jpg": {
        //key pic: pivot pic infront of house
        // jump_interior
        coords: "73% 52.9%",
        paths: {
            forward: "2005-P1000869.jpg",
            turn_right: null,
            backward: "2008_MG_5691.jpg",
            turn_left: "259258-2001.jpg",
            l_forward: null,
            r_forward: "2007_MG_2237.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2008,
        windows: []
    },
    "2007_MG_2237.jpg": {
        coords: "73% 55.4%",
        paths: {
            forward: "2008_MG_3091.jpg",
            //jump_south_house
            turn_right: "260175_sv-2003q.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "2008_MG_5726.jpg",
            r_backward: null
        },
        direction: "SE",
        year: 2007,
        windows: []
    },
    "260174_sv-2004.jpg": {
        coords: "72.3% 52%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: "173429_sv-1986.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: "260061-1995.jpg",
            r_backward: null
        },
        direction: "E",
        year: 2004,
        windows: []
    },
    "259258-2001.jpg": {
        coords: "73% 55.4%",
        paths: {
            forward: "173429_sv-1986.jpg",
            turn_right: "2008_MG_5726.jpg",
            backward: null,
            turn_left: "173170_sv-1970.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2001,
        windows: [{
                image_name: "1954-55-5950.jpg",
                year: 1955,
                css_props: {
                    top: "30.49%", // 100*118/576
                    left: "40.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "18.45%" // 100*123/576
                }
            },
            {
                image_name: "173171_sv-1970.jpg",
                year: 1970,
                css_props: {
                    top: "20.49%", // 100*118/576
                    left: "66.78%", // 100*577/864
                    width: "14.24%", // 100*123/864
                    height: "21.35%" // 100*123/576
                }
            },
            {
                image_name: "https://player.vimeo.com/video/227577679?autoplay=1&title=0&byline=0&portrait=0",
                css_props: {
                    top: "60.49%",
                    left: "25.78%",
                    width: "32vw",
                    height: "20vw"
                }
            }
        ]
    },
    "173429_sv-1986.jpg": {
        coords: "71.2% 53.8%",
        paths: {
            forward: "2007_MG_2275.jpg",
            turn_right: "260174_sv-2004.jpg",
            backward: "259258-2001.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1986,
        windows: []
    },
    "2007_MG_2275.jpg": {
        coords: "69.8% 49.7%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "173429_sv-1986.jpg",
            turn_left: "259896-2002.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2007,
        windows: []
    },
    "259896-2002.jpg": {
        coords: "70.2% 47%",
        paths: {
            forward: null,
            turn_right: "2007_MG_2275.jpg",
            backward: null,
            turn_left: null,
            l_forward: "260054-1997.jpg",
            r_forward: "259908-2004-aws.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2002,
        windows: [{
            image_name: "1950s_5966.jpg",
            year: "-",
            css_props: {
                top: "30.49%", // 100*118/576
                left: "50.78%", // 100*577/864
                width: "12%", // 100*123/864
                height: "32.45%" // 100*123/576
            }
        }]
    },
    "260175_sv-2003q.jpg": {
        //jump_orchard
        coords: "75.8% 53.1%",
        paths: {
            forward: null,
            turn_right: "173170_sv-1970.jpg",
            backward: null,
            turn_left: "2007_MG_2237.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2003,
        windows: [{
            image_name: "259925-2003.jpg",
            year: 2003,
            css_props: {
                top: "30.49%", // 100*118/576
                left: "50.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "18.45%" // 100*123/576
            }
        }]
    },
    "173170_sv-1970.jpg": {
        coords: "76.7% 50.9%",
        paths: {
            forward: "260054-1997.jpg",
            turn_right: "259258-2001.jpg",
            backward: "260031-1990-aws.jpg",
            turn_left: "260175_sv-2003q.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "260156_sv-2005q.jpg"
        },
        direction: "W",
        year: 1970,
        windows: []
    },
    //
    //
    //
    //
    // House Interior
    //
    //
    //
    "2005-P1000869.jpg": {
        //jump_interior
        //key image: interior pivot
        coords: "72.7% 57.9%",
        paths: {
            forward: "2005-P1000859.jpg",
            turn_right: "2005-P1000868.jpg",
            backward: "2008_MG_5726.jpg",
            turn_left: "260157_sv2002q.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2005,
        windows: []
    },
    "260157_sv2002q.jpg": {
        coords: "72.7% 57.9%",
        paths: {
            forward: "260160_sv-nd.jpg",
            turn_right: "2005-P1000869.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2002,
        windows: []
    },
    "260160_sv-nd.jpg": {
        coords: "70.2% 58%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "260157_sv2002q.jpg",
            turn_left: "173237_sv-1976.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: "-",
        windows: []
    },
    "173237_sv-1976.jpg": {
        coords: "70.2% 58%",
        paths: {
            forward: null,
            turn_right: "260160_sv-nd.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 1976,
        windows: []
    },
    "2005-P1000868.jpg": {
        coords: "72.7% 57.9%",
        paths: {
            forward: null,
            turn_right: "260156_sv-2005q.jpg",
            backward: null,
            turn_left: "2005-P1000869.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2005,
        windows: []
    },
    "2005-P1000859.jpg": {
        // interior pivot 2.
        coords: "72.6% 65.8%",
        paths: {
            forward: "173393_sv-1981.jpg",
            turn_right: "2005-P1000866.jpg",
            backward: "2005-P1000869.jpg",
            turn_left: "2005-P1000865.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2005,
        windows: [{
            image_name: "1955-5951.jpg",
            year: 1955,
            css_props: {
                top: "30.49%",
                left: "50.78%",
                width: "14%",
                height: "21.45%"
            }
        }]
    },
    "173393_sv-1981.jpg": {
        coords: "72.6% 72.1%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "2005-P1000859.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1981,
        windows: []
    },
    "2005-P1000866.jpg": {
        coords: "72.6% 65.8%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: "2005-P1000859.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2005,
        windows: [{
            image_name: "259906-1995-aws.jpg",
            year: 1995,
            css_props: {
                // Note that these  percentages are relative to the original
                // image dimensions. This window was 123px by 123px on a 864px
                //  by 576px image, located at (577px, 118px) within the image.
                top: "20.49%", // 100*118/576
                left: "66.78%", // 100*577/864
                width: "14.24%", // 100*123/864
                height: "21.35%" // 100*123/576
            }
        }]
    },
    "2005-P1000865.jpg": {
        coords: "72.6% 65.8%",
        paths: {
            forward: "173417_sv-1986.jpg",
            turn_right: "2005-P1000859.jpg",
            backward: null,
            turn_left: "260156_sv-2005q.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NE",
        year: 2005,
        windows: []
    },
    "173417_sv-1986.jpg": {
        coords: "68.4% 72.9%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "2005-P1000865.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1986,
        windows: []
    },
    "260156_sv-2005q.jpg": {
        coords: "72.6% 65.8%",
        paths: {
            forward: null,
            turn_right: "2005-P1000865.jpg",
            backward: null,
            turn_left: "2005-P1000868.jpg",
            l_forward: "173170_sv-1970.jpg",
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NW",
        year: 2005,
        windows: []
    },
    //
    //
    //
    //
    // South Side of the House
    //
    //
    //
    "2008_MG_3091.jpg": {
        //jump_south_house
        coords: "76.8% 58%",
        paths: {
            forward: "260158_sv2003.jpg",
            turn_right: null,
            backward: "2007_MG_2237.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "2008_MG_5691.jpg",
            r_backward: null
        },
        direction: "E",
        year: 2008,
        windows: [{
                image_name: "1964-5986.jpg",
                year: 1964,
                css_props: {
                    top: "30.49%", // 100*118/576
                    left: "40.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "18.45%" // 100*123/576
                }
            },
            {
                image_name: "1950s_5961.jpg",
                year: "1950s",
                css_props: {
                    top: "40.49%", // 100*118/576
                    left: "60.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "18.45%" // 100*123/576
                }
            }
        ]
    },
    "260158_sv2003.jpg": {
        coords: "78.1% 68.1%",
        paths: {
            forward: "2007_MG_2259.jpg",
            turn_right: null,
            backward: "2008_MG_3091.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NE",
        year: 2003,
        windows: [{
            image_name: "https://player.vimeo.com/video/227588348?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "20.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "2007_MG_2259.jpg": {
        //key pic: pivot in front of south side of house
        coords: "77.7% 62.5%",
        paths: {
            forward: null,
            turn_right: "259271-1996.jpg",
            backward: "260158_sv2003.jpg",
            turn_left: "2007_MG_2261.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NE",
        year: 2007,
        windows: []
    },
    "259271-1996.jpg": {
        coords: "77.7% 62.5%",
        paths: {
            forward: null,
            turn_right: "260031-1990-aws.jpg",
            backward: null,
            turn_left: "2007_MG_2259.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1996,
        windows: []
    },
    "260031-1990-aws.jpg": {
        //jump_orchard
        coords: "76.7% 66.5%",
        paths: {
            forward: "173170_sv-1970.jpg",
            turn_right: "260032-1996.jpg",
            backward: null,
            turn_left: "259271-1996.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 1990,
        windows: [{
            image_name: "1956-5972.jpg",
            year: 1956,
            css_props: {
                top: "30.49%", // 100*118/576
                left: "50.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "18.45%" // 100*123/576
            }
        }]
    },
    "2007_MG_2261.jpg": {
        coords: "78.1% 71.2%",
        paths: {
            forward: "2007_MG_2263.jpg",
            turn_right: null,
            backward: null,
            turn_left: "260032-1996.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2007,
        windows: []
    },
    "260032-1996.jpg": {
        coords: "77% 72.7%",
        paths: {
            forward: null,
            turn_right: "2007_MG_2261.jpg",
            backward: null,
            turn_left: "260031-1990-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NW",
        year: 2008,
        windows: [{
            image_name: "1965-5989.jpg",
            year: 1965,
            css_props: {
                top: "30.49%", // 100*118/576
                left: "50.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "18.45%" // 100*123/576
            }
        }]
    },
    "2007_MG_2263.jpg": {
        coords: "76.7% 69.6%",
        paths: {
            forward: "2008_MG_5715.jpg",
            turn_right: null,
            backward: "2007_MG_2261.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2007,
        windows: []
    },
    "2008_MG_5715.jpg": {
        coords: "76.8% 68.9%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "2007_MG_2263.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2008,
        windows: []
    },

    //
    //
    //
    //
    // Main Path West: N to S
    //
    //
    //
    //jump_west_path
    "259236-1995.jpg": {
        coords: "69.2% 8.5%",
        paths: {
            forward: "173430_sv-1986.jpg",
            turn_right: "2006-P1010623-crop-1.jpg",
            backward: null,
            turn_left: "2017-5917.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1995,
        windows: [{
                image_name: "173389_sv-1981.jpg",
                year: 1965,
                css_props: {
                    top: "30.49%", // 100*118/576
                    left: "20.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "21.45%" // 100*123/576
                }
            },
            {
                image_name: "173388_sv-1981.jpg",
                year: 1981,
                css_props: {
                    top: "20.49%", // 100*118/576
                    left: "60.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "21.45%" // 100*123/576
                }
            },
            {
                image_name: "259945-1989-95.jpg",
                year: 1989,
                css_props: {
                    top: "60.49%", // 100*118/576
                    left: "40.78%", // 100*577/864
                    width: "14%", // 100*123/864
                    height: "21.45%" // 100*123/576
                }
            }
        ]
    },

    "173430_sv-1986.jpg": {
        coords: "74.3% 8.4%",
        paths: {
            forward: "260081-1996.jpg",
            turn_right: "259919-nd.jpg",
            backward: "259236-1995.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1986,
        windows: []
    },
    "260081-1996.jpg": {
        coords: "75.6% 8.4%",
        paths: {
            forward: "2005-P1000907.jpg",
            turn_right: null,
            backward: "173430_sv-1986.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1996,
        windows: []
    },
    "2005-P1000907.jpg": {
        coords: "82% 8.4%",
        paths: {
            forward: null,
            turn_right: "259895-2002.jpg",
            backward: "260081-1996.jpg",
            turn_left: "260124_sv-2003.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2005,
        windows: [{
            image_name: "173420_sv-1986.jpg",
            year: 1986,
            css_props: {
                top: "30.49%", // 100*118/576
                left: "50.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "21.45%" // 100*123/576
            }
        }]
    },
    "260124_sv-2003.jpg": {
        coords: "82% 8.4%",
        paths: {
            forward: "260500_sv-1992-aws.jpg",
            turn_right: "2005-P1000907.jpg",
            backward: null,
            turn_left: "259919-nd.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2003,
        windows: []
    },
    //
    //
    //
    //
    // Main Path West: S to N
    //
    //
    //
    //jump_west_path
    "259919-nd.jpg": {
        coords: "78% 8.4%",
        paths: {
            forward: "2017-5855.JPG",
            turn_right: "260124_sv-2003.jpg",
            backward: null,
            turn_left: "173430_sv-1986.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: "-",
        windows: []
    },
    "2017-5855.JPG": {
        coords: "55% 8.4%",
        paths: {
            forward: "260177-1994-aws.jpg",
            turn_right: "2006-P1010665.jpg",
            backward: "259919-nd.jpg",
            turn_left: "2006-P1010623-crop-1.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: "2017",
        windows: []
    },
    "259934-1989-95.jpg": {
        coords: "41% 9.2%",
        paths: {
            forward: "260194-1998-aws.jpg",
            turn_right: null,
            backward: "259936-1989-95.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1989,
        windows: []
    },
    "260194-1998-aws.jpg": {
        coords: "39% 8.3%",
        paths: {
            forward: "260195-1996.jpg",
            turn_right: null,
            backward: "259934-1989-95.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1998,
        windows: []
    },
    "260195-1996.jpg": {
        coords: "38.0% 8.3%",
        paths: {
            forward: "260197-2004-aws.jpg",
            turn_right: "259223-1993.jpg",
            backward: "260194-1998-aws.jpg",
            turn_left: "260227-1998-aws-crop.jpg",
            l_forward: null,
            r_forward: "260162_sv-2003.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1996,
        windows: []
    },
    "260197-2004-aws.jpg": {
        coords: "32.3% 8.5%",
        paths: {
            forward: "260198-2005-aws.jpg",
            turn_right: null,
            backward: "260195-1996.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2004,
        windows: []
    },
    "260198-2005-aws.jpg": {
        coords: "30.7% 8.5%",
        paths: {
            forward: "2006-P1010605.jpg",
            turn_right: "08-260175-1994-aws.jpg",
            backward: "260197-2004-aws.jpg",
            turn_left: "260201-1998.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2005,
        windows: []
    },
    "08-260175-1994-aws.jpg": {
        coords: "30.7% 8.5%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: "260198-2005-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1994,
        windows: []
    },
    "260172-1994-aws-extra.jpg": {
        coords: "30.7% 8.5%",
        paths: {
            forward: null,
            turn_right: "260201-1998.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1994,
        windows: []
    },
    "260201-1998.jpg": {
        coords: "31.3% 7.9%",
        paths: {
            forward: "260203-1998-aws.jpg",
            turn_right: "260198-2005-aws.jpg",
            backward: "259940-1989-95--260201-1998.jpg",
            turn_left: "260172-1994-aws-extra.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1998,
        windows: []
    },
    "260202-1998-aws.jpg": {
        coords: "32.6% 7.9%",
        paths: {
            forward: "260191_sv-2005.jpg",
            turn_right: null,
            backward: "260201-1998.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1998,
        windows: []
    },
    "260203-1998-aws.jpg": {
        //jump_vertical_path_2-1
        coords: "37.2% 7.9%",
        paths: {
            forward: "173478_sv-1988.jpg",
            turn_right: "260227-1998-aws-crop.jpg",
            backward: "260201-1998.jpg",
            turn_left: "259223-1993.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1998,
        windows: [{
            image_name: "https://player.vimeo.com/video/227591731?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "20.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "173478_sv-1988.jpg": {
        coords: "38.5% 8.3%",
        paths: {
            forward: "260182-1995-aws.jpg",
            turn_right: null,
            backward: "260203-1998-aws.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1998,
        windows: []
    },
    "260182-1995-aws.jpg": {
        coords: "50.6% 12.8%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "173478_sv-1988.jpg",
            turn_left: "260180-2004-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1995,
        windows: []
    },
    "2006-P1010605.jpg": {
        coords: "29.4% 8.5%",
        paths: {
            forward: "260199-1993.jpg",
            turn_right: null,
            backward: "260198-2005-aws.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2006,
        windows: []
    },
    "260199-1993.jpg": {
        coords: "24.4% 8.5%",
        paths: {
            forward: "2007_MG_2286.jpg",
            turn_right: null,
            backward: "2006-P1010605.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1993,
        windows: []
    },
    "2007_MG_2286.jpg": {
        //key pic: vertical_path_1-2
        //jump_vertical_path_1-2
        coords: "21.3% 8.5%",
        paths: {
            forward: "260200-1992-aws.jpg",
            turn_right: "2017-5866.JPG",
            backward: "260199-1993.jpg",
            turn_left: "259229-1993-end.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NE",
        year: 2007,
        windows: [{
            image_name: "https://player.vimeo.com/video/227589129?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "20.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "260200-1992-aws.jpg": {
        coords: "16.3% 10%",
        paths: {
            forward: "259940-1989-95.jpg",
            turn_right: null,
            backward: "2007_MG_2286.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1992,
        windows: []
    },
    "259940-1989-95.jpg": {
        coords: "9.8% 10.5%",
        paths: {
            forward: null,
            turn_right: "2017-5863.JPG",
            backward: "260200-1992-aws.jpg",
            turn_left: "2017-5863.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1989,
        windows: []
    },

    "2017-5863.JPG": {
        coords: "15.7% 11%",
        paths: {
            forward: "2017-5865.JPG",
            turn_right: "259940-1989-95.jpg",
            backward: null,
            turn_left: "259940-1989-95.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: "2017",
        windows: []
    },

    "2017-5865.JPG": {
        coords: "20.7% 11%",
        paths: {
            forward: "260201-1998.jpg",
            turn_right: "259229-1993-end.jpg",
            backward: "2017-5863.JPG",
            turn_left: "2017-5866.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: "2017",
        windows: []
    },
    //
    //
    //
    //
    // Main Path North North
    //
    //
    //
    //jump_vertical_path_1-2
    "2017-5866.JPG": {
        coords: "20.7% 12%",
        paths: {
            forward: "260228-1990-aws-crop.jpg",
            turn_right: "2017-5865.JPG",
            backward: null,
            turn_left: "2007_MG_2286.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2017,
        windows: [{
            image_name: "173391_sv-1981.jpg",
            year: 1981,
            css_props: {
                top: "30.49%",
                left: "40.78%",
                width: "14.24%",
                height: "25.45%"
            }
        }]
    },

    "260228-1990-aws-crop.jpg": {
        coords: "20.7% 17%",
        paths: {
            forward: "2017-5868.JPG",
            turn_right: null,
            backward: "2017-5866.JPG",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1990,
        windows: []
    },
    "2010_MG_0458.jpg": {
        coords: "19.8% 46.9%",
        paths: {
            forward: "2006-P1010680-crop.jpg",
            turn_right: "2006-P1010733.jpg",
            backward: "173496_sv-1990.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2010,
        windows: []
    },
    "173496_sv-1990.jpg": {
        coords: "19.8% 45.8%",
        paths: {
            forward: "2010_MG_0458.jpg",
            turn_right: "2007_MG_2011.jpg",
            backward: "259230-1993.jpg",
            turn_left: "2006-P1010667C.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1990,
        windows: []
    },

    "259230-1993.jpg": {
        //key_turning: main path
        coords: "20.1% 40.9%",
        paths: {
            forward: "173496_sv-1990.jpg",
            turn_right: "259924-1995-aws.jpg",
            backward: "2017-5868.JPG",
            turn_left: "260193_sv-2003q.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1993,
        windows: [{
            image_name: "173496_sv-1990.jpg",
            year: 1990,
            css_props: {
                top: "30.49%", // 100*118/576
                left: "50.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "21.45%" // 100*123/576
            }
        }]
    },
    "260193_sv-2003q.jpg": {
        coords: "20.1% 40.9%",
        paths: {
            forward: "259267-1997.jpg",
            turn_right: "259230-1993.jpg",
            backward: "260220-1996.jpg",
            turn_left: "260224-1993.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2003,
        windows: []
    },
    "259267-1997.jpg": {
        coords: "8.2% 42%",
        paths: {
            forward: null,
            turn_right: "260212-1997.jpg",
            backward: "260193_sv-2003q.jpg",
            turn_left: null,
            l_forward: "2011_MG_1369.jpg",
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1997,
        windows: []
    },
    "259267-1997--end.jpg": {
        coords: "3.2% 42.5%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "259267-1997.jpg",
            turn_left: "2011_MG_1369.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: "GAP",
        windows: []
    },
    "2017-5868.JPG": {
        coords: "20.7% 28.9%",
        paths: {
            forward: "259230-1993.jpg",
            turn_right: "2017-5870.JPG",
            backward: "260228-1990-aws-crop.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2017,
        windows: []
    },
    "2017-5870.JPG": {
        coords: "20.7% 28.9%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: "2017-5868.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2017,
        windows: []
    },
    "2006-P1010680-crop.jpg": {
        coords: "19.8% 48.4%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "2010_MG_0458.jpg",
            turn_left: "2005-P1000924.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2006,
        windows: [{
            image_name: "173311_sv-1979.jpg",
            year: 1979,
            css_props: {
                top: "30.49%", // 100*118/576
                left: "50.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "21.45%" // 100*123/576
            }
        }]
    },

    "259229-1993.jpg": {
        coords: "20.7% 21.2%",
        paths: {
            forward: "259229-1993-end.jpg",
            turn_right: null,
            backward: "260224-1993.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 1993,
        windows: []
    },
    "259229-1993-end.jpg": {
        coords: "20.7% 10.2%",
        paths: {
            forward: null,
            // non-reversable transition
            turn_right: "2007_MG_2286.jpg",
            backward: "259229-1993.jpg",
            turn_left: "2017-5865.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 1993,
        windows: []
    },
    "260224-1993.jpg": {
        coords: "20% 41%",
        paths: {
            forward: "259229-1993.jpg",
            turn_right: "260193_sv-2003q.jpg",
            backward: "2006-P1010673.jpg",
            turn_left: "259924-1995-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 1993,
        windows: []
    },
    "2006-P1010673.jpg": {
        coords: "21.4% 45%",
        paths: {
            forward: "260224-1993.jpg",
            turn_right: "2006-P1010667C.jpg",
            backward: "2017-5888.JPG",
            turn_left: "2007_MG_2011.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NW",
        year: 2006,
        windows: []
    },

    "2017-5888.JPG": {
        //key pic: box street
        coords: "20.4% 48%",
        paths: {
            forward: "2006-P1010673.jpg",
            turn_right: null,
            backward: "2010_MG_0456.jpg",
            turn_left: "260155-1993-gap.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2006,
        windows: []
    },

    //
    //
    //
    //
    // Boxwood Street
    //
    //
    //
    //jump_boxwood
    // "260156-1992-aws.jpg": {
    //     coords: "54.1% 59.2%",
    //     paths: {
    //         forward: null,
    //         turn_right: null,
    //         backward: "260153_sv-2003q.jpg",
    //         turn_left: null,
    //         l_forward: null,
    //         r_forward: "260157-1993.jpg",
    //         l_backward: null,
    //         r_backward: null
    //     },
    //     direction: "NW",
    //     year: 2004,
    //     windows: []
    // },
    "260157-1993.jpg": {
        //key pic: boxwood aller
        coords: "52.2% 54.8%",
        paths: {
            forward: "259922-2002-sl.jpg",
            turn_right: "2017-5930.JPG",
            backward: null,
            turn_left: "2017-5903.JPG",
            l_forward: null,
            r_forward: "173308_sv-1979.jpg",
            l_backward: null,
            r_backward: "260153_sv-2003q.jpg"
        },
        direction: "N",
        year: 1993,
        windows: []
    },
    "173308_sv-1979.jpg": {
        coords: "50% 60%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: "260157-1993.jpg",
            r_backward: null
        },
        direction: "NE",
        year: 1979,
        windows: [{
            image_name: "https://player.vimeo.com/video/227586657?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "30.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },

    "259922-2002-sl.jpg": {
        coords: "43% 54.4%",
        paths: {
            forward: "2006-P1010660.jpg",
            turn_right: null,
            backward: "260157-1993.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2003,
        windows: [{
            image_name: "https://player.vimeo.com/video/227580858?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "30.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "2006-P1010660.jpg": {
        coords: "39.5% 54.4%",
        paths: {
            forward: "2010_MG_0443.jpg",
            turn_right: "2006-P1010679--end.jpg",
            backward: "259922-2002-sl.jpg",
            turn_left: "260185_sv-2004-crop.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NE",
        year: 2006,
        windows: []
    },
    "2010_MG_0443.jpg": {
        coords: "29.6% 54.4%",
        paths: {
            forward: "2005-P1000924.jpg",
            turn_right: null,
            backward: "2006-P1010660.jpg",
            turn_left: null,
            // turn_left: "2017-5888.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "NW",
        year: 2010,
        windows: []
    },
    "2005-P1000924.jpg": {
        coords: "16% 53.5%",
        paths: {
            forward: "260159-2005-aws.jpg",
            turn_right: "2006-P1010680-crop.jpg",
            backward: "2010_MG_0443.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2005,
        windows: []
    },
    "260159-2005-aws.jpg": {
        coords: "9.2% 53.5%",
        paths: {
            forward: null,
            turn_right: "2017-5895.JPG",
            backward: "2005-P1000924.jpg",
            turn_left: "2017-5899.JPG",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2005,
        windows: []
    },
    "2017-5895.JPG": {
        coords: "9% 63%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "2017-5883.JPG",
            turn_left: "260159-2005-aws.jpg",
            l_forward: "260123-1996.jpg",
            r_forward: "260136-1996.jpg",
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2017,
        windows: []
    },
    "260155-1993.jpg": {
        coords: "14.1% 53.8%",
        paths: {
            forward: "260155-1993-gap.jpg",
            turn_right: "2010_MG_0456.jpg",
            backward: "2017-5900.JPG",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1993,
        windows: [{
                image_name: "173154_sv-1968.jpg",
                year: 1968,
                css_props: {
                    top: "20.49%",
                    left: "20.78%",
                    width: "14.24%",
                    height: "25.45%"
                }
            },
            {
                image_name: "173279_sv-1979.jpg",
                year: 1979,
                css_props: {
                    top: "50.49%",
                    left: "60.78%",
                    width: "14.24%",
                    height: "25.45%"
                }
            }
        ]
    },
    "260155-1993-gap.jpg": {
        coords: "16.1% 53.8%",
        paths: {
            forward: "2005-P1000939.jpg",
            turn_right: "2017-5888.JPG",
            backward: "260155-1993.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1993,
        windows: []
    },
    "2006-P1010733.jpg": {
        //key pic: henyard to boxwood
        coords: "22.7% 49.8%",
        paths: {
            forward: "2006-P1010718-crop.jpg",
            turn_right: null,
            backward: null,
            turn_left: "2010_MG_0458.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SW",
        year: 2006,
        windows: [{
            image_name: "173158_sv-1970.jpg",
            year: 1970,
            css_props: {
                top: "30.49%", // 100*118/576
                left: "50.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "18.45%" // 100*123/576
            }
        }]
    },
    "2005-P1000939.jpg": {
        coords: "34% 54%",
        paths: {
            forward: "260131_sv-2003q.jpg",
            turn_right: null,
            backward: "260155-1993.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "SE",
        year: 2005,
        windows: []
    },
    "260131_sv-2003q.jpg": {
        coords: "41.4% 54.8%",
        paths: {
            forward: "275881_sv-crop.jpg",
            turn_right: "2007_MG_2075--260183_sv-2004-a.jpg",
            backward: "2005-P1000939.jpg",
            turn_left: "2006-P1010679--end.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "2006-P1010718--260131_sv-2003q.jpg"
        },
        direction: "S",
        year: 2003,
        windows: [{
            image_name: "173162_sv-1970.jpg",
            year: 1970,
            css_props: {
                top: "30.49%",
                left: "70.78%",
                width: "14.24%",
                height: "25.45%"
            }
        }]
    },
    "275881_sv-crop.jpg": {
        coords: "45.4% 54.8%",
        paths: {
            forward: "259923-1995-aws.jpg",
            turn_right: null,
            backward: "260131_sv-2003q.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2003,
        windows: []
    },
    "2006-P1010718-crop.jpg": {
        coords: "39.4% 50.8%",
        paths: {
            forward: null,
            turn_right: "260183_sv-2004_a.jpg",
            backward: "2006-P1010733.jpg",
            turn_left: "2006-P1010679_b.jpg",
            l_forward: "2006-P1010718--260131_sv-2003q.jpg",
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2006,
        windows: []
    },
    "2006-P1010718--260131_sv-2003q.jpg": {
        coords: "41.4% 51.8%",
        paths: {
            forward: null,
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: "260131_sv-2003q.jpg",
            r_forward: null,
            l_backward: null,
            r_backward: "2006-P1010718-crop.jpg"
        },
        direction: "S",
        year: "GAP",
        windows: []
    },
    "2006-P1010717.jpg": {
        coords: "42.4% 53.9%",
        paths: {
            forward: null,
            turn_right: "2006-P1010679_b.jpg",
            backward: null,
            turn_left: "260183_sv-2004_a.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2003,
        windows: []
    },
    "259923-1995-aws.jpg": {
        coords: "64% 54.3%",
        paths: {
            forward: null,
            turn_right: "2017-5903.JPG",
            backward: "275881_sv-crop.jpg",
            turn_left: "2017-5930.JPG",
            l_forward: null,
            r_forward: "260102-1994-aws-crop.jpg",
            l_backward: null,
            r_backward: null,
        },
        direction: "S",
        year: 1995,
        windows: [{
            image_name: "173223_sv-1973.jpg",
            year: 1973,
            css_props: {
                top: "30.49%",
                left: "50.78%",
                width: "14.24%",
                height: "25.45%"
            }
        }]
    },
    //
    //
    //
    //
    // Main Path North South
    //
    //
    //
    // jump_vertical_path_2-1
    "259223-1993.jpg": {
        coords: "38.2% 13.9%",
        paths: {
            forward: "260152-2004-aws.jpg",
            turn_right: "260203-1998-aws.jpg",
            backward: null,
            turn_left: "260195-1996.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 1993,
        windows: []
    },
    "260152-2004-aws.jpg": {
        coords: "38.4% 22.9%",
        paths: {
            forward: "260153-1996.jpg",
            turn_right: null,
            backward: "259223-1993.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2004,
        windows: []
    },
    "260153-1996.jpg": {
        coords: "38.4% 38%",
        paths: {
            forward: "2006-P1010679_a.jpg",
            turn_right: "260226-1998-aws-crop.jpg",
            backward: "260152-2004-aws.jpg",
            turn_left: "260226-1998-aws-crop.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: "1996",
        windows: []
    },
    "2006-P1010679_a.jpg": {
        coords: "38% 40%",
        paths: {
            forward: "2006-P1010679_b.jpg",
            turn_right: "260195_sv-2003q.jpg",
            backward: "260153-1996.jpg",
            turn_left: "260194_sv-2003q.jpg",
            l_forward: "2010_MG_0440.jpg",
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2006,
        windows: []
    },
    "2006-P1010679_b.jpg": {
        //jump_sun_court
        coords: "38% 48.3%",
        paths: {
            forward: "2006-P1010679--end.jpg",
            turn_right: "2006-P1010718-crop.jpg",
            backward: "2006-P1010679_a.jpg",
            turn_left: "2006-P1010717.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2006,
        windows: []
    },
    "2006-P1010679--end.jpg": {
        //jump_sun_court
        coords: "38% 48.3%",
        paths: {
            forward: null,
            turn_right: "260131_sv-2003q.jpg",
            backward: "2006-P1010679_b.jpg",
            turn_left: "2006-P1010660.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "E",
        year: 2006,
        windows: []
    },
    "260227-1998-aws-crop.jpg": {
        //key_turning
        coords: "38.8% 11%",
        paths: {
            forward: null,
            turn_right: "260195-1996.jpg",
            backward: "260226-1998-aws-crop.jpg",
            turn_left: "260203-1998-aws.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 1998,
        windows: []
    },
    "260226-1998-aws-crop.jpg": {
        coords: "38.3% 29.7%",
        paths: {
            forward: "260227-1998-aws-crop.jpg",
            turn_right: "260153-1996.jpg",
            backward: "2006-P1010678-crop.jpg",
            turn_left: "260153-1996.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 1998,
        windows: []
    },
    "2006-P1010678-crop.jpg": {
        coords: "38.3% 42.4%",
        paths: {
            forward: "260226-1998-aws-crop.jpg",
            turn_right: "260194_sv-2003q.jpg",
            backward: "260183_sv-2004_b.jpg",
            turn_left: "260195_sv-2003q.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2006,
        windows: []
    },
    "260194_sv-2003q.jpg": {
        coords: "37.3% 39%",
        paths: {
            forward: "260220-1996.jpg",
            turn_right: "2006-P1010679_a.jpg",
            backward: "260219-1995.jpg",
            turn_left: "2006-P1010678-crop.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 2003,
        windows: []
    },
    "260220-1996.jpg": {
        coords: "25.6% 40.5%",
        paths: {
            forward: "260193_sv-2003q.jpg",
            turn_right: null,
            backward: "260194_sv-2003q.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "N",
        year: 1996,
        windows: [{
            image_name: "https://player.vimeo.com/video/227593709?autoplay=1&title=0&byline=0&portrait=0",
            css_props: {
                top: "20.49%",
                left: "35.78%",
                width: "32vw",
                height: "20vw"
            }
        }]
    },
    "2017-5922.JPG": {
        coords: "48% 39%",
        paths: {
            forward: "260214-1998-aws-crop1.jpg",
            turn_right: "2007_MG_2238.jpg",
            backward: "260195_sv-2003q.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1981,
        windows: []
    },

    "260195_sv-2003q.jpg": {
        coords: "38.7% 39.1%",
        paths: {
            forward: "2017-5922.JPG",
            turn_right: "2006-P1010678-crop.jpg",
            backward: "173397_sv-1982.jpg",
            turn_left: "2006-P1010679_a.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 2003,
        windows: [{
            image_name: "173341_sv-1981.jpg",
            year: 1981,
            css_props: {
                top: "40.49%", // 100*118/576
                left: "50.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "21.45%" // 100*123/576
            }
        }]
    },
    "173397_sv-1982.jpg": {
        coords: "35.7% 39.1%",
        paths: {
            forward: "260195_sv-2003q.jpg",
            turn_right: null,
            backward: "259924-1995-aws.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1982,
        windows: []
    },
    "259924-1995-aws.jpg": {
        //key_turning
        coords: "20.7% 41.1%",
        paths: {
            forward: "173397_sv-1982.jpg",
            turn_right: "260224-1993.jpg",
            backward: "260212-1997.jpg",
            turn_left: "259230-1993.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1995,
        windows: [{
            image_name: "173341_sv-1981.jpg",
            year: 1965,
            css_props: {
                top: "30.49%", // 100*118/576
                left: "50.78%", // 100*577/864
                width: "14%", // 100*123/864
                height: "21.45%" // 100*123/576
            }
        }]
    },
    "260212-1997.jpg": {
        coords: "15% 41.4%",
        paths: {
            forward: "259924-1995-aws.jpg",
            turn_right: "2011_MG_1369.jpg",
            backward: "260211-1998-aws.jpg",
            turn_left: "259267-1997.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1997,
        windows: []
    },
    "260211-1998-aws.jpg": {
        coords: "3.7% 42.5%",
        paths: {
            forward: "260212-1997.jpg",
            turn_right: null,
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "S",
        year: 1998,
        windows: []
    },
    "260183_sv-2004_b.jpg": {
        coords: "38.3% 49.6%",
        paths: {
            forward: "2006-P1010678-crop.jpg",
            turn_right: "2010-_MG_0421.jpg",
            backward: "260183_sv-2004_a.jpg",
            turn_left: "2006-P1010668.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2004,
        windows: []
    },
    "260183_sv-2004_a.jpg": {
        coords: "38.1% 53.7%",
        paths: {
            forward: "260183_sv-2004_b.jpg",
            turn_right: "2006-P1010717.jpg",
            backward: "260185_sv-2004-crop.jpg",
            turn_left: "2006-P1010718-crop.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2004,
        windows: []
    },
    "260185_sv-2004-crop.jpg": {
        coords: "38.1% 56%",
        paths: {
            forward: "260183_sv-2004_a.jpg",
            turn_right: "2006-P1010660.jpg",
            backward: null,
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 2004,
        windows: []
    },
    //
    //
    //
    //
    // Compost
    //
    //
    //
    //jump_compost

    "2011_MG_1369.jpg": {
        coords: "6% 41.4%",
        paths: {
            forward: "260222-1994-aws.jpg",
            turn_right: null,
            backward: null,
            turn_left: "260212-1997.jpg",
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: "259267-1997.jpg"
        },
        direction: "W",
        year: 2011,
        windows: []
    },
    "260222-1994-aws.jpg": {
        coords: "12.1% 19.2%",
        paths: {
            forward: null,
            turn_right: null,
            backward: "2011_MG_1369.jpg",
            turn_left: null,
            l_forward: null,
            r_forward: null,
            l_backward: null,
            r_backward: null
        },
        direction: "W",
        year: 1994,
        windows: []
    },

};





// Object for storing Image objects after loading them
var loaded_images = {};


// Get rid of references to the current loaded images, so hopefully the
// browser will garbage collect them to free up memory
var clear_loaded_images = function () {
    loaded_images = {};
};

/**
 * Loads Image objects into loaded_images, indexed by their filename.
 * Also gives them the class "bg-img".
 * image_names - a list of the filenames of images to load (the images must be
 *     located in IMAGE_PATH)
 * all_loaded - an optional callback function that will be called at least once
 *     when all the images have been loaded
 */
var load_images = function (image_names, all_loaded) {
    var update_count = null;
    if (typeof (all_loaded) == "function") {
        var load_count = 0;
        update_count = function () {
            load_count++;
            if (load_count == image_names.length) {
                all_loaded();
            }
        };
    }

    for (var i = 0; i < image_names.length; i++) {
        load_image(image_names[i], update_count);
    }
};


var load_image = function (image_name, onload) {
    if (/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(image_name)){
        var image = new Image();
        image.onload = onload;
        image.src = IMAGE_DIR + image_name;
        $(image).addClass("bg-img");
        loaded_images[image_name] = image;
    }
    else {
        var obj = document.createElement('iframe');
        obj.onload = onload;
        obj.src = image_name;
        // $(obj).addClass("data-fancybox");
        loaded_images[image_name]=obj;
    }

};