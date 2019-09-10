function changeBackground()
{
    var images = ['../img/header/header_0.jpg',
                  '../img/header/header_7.jpg',
                  '../img/header/header_2.jpg',
                  '../img/header/header_6.jpg',
                  '../img/header/header_1.jpg',
                  '../img/header/header_8.jpg',
                 ];

    var image = 'url(' + images[Math.floor(Math.random() * images.length)] + ')'
    //var image = 'url(' + images[0] + ')'

    $('header').css({'background-image': image});
}


$(document).ready(function() {
    changeBackground();
}); 