$(function () {

    let images = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];

    $('.btn').on('click', function () {

        $(this).css('display', 'none');

        for (let i = 0; i < images.length; i++) {
            $('.single-slide').append('<div><img src ="images/' + images[i] + '">');
        }

        $('.single-slide').slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    });
});