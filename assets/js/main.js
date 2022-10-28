$(document).ready(function(){
    $('.main-visual__btn').click(function() {
        bgm_player();
    });


    //gallery image slide
    //slick slider count option
    $('.main-swipe').on('init', function(event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
        $('.current').text(slick.currentSlide + 1);
        $('.total').text(slick.slideCount);
    })
    .slick({
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.current').text(nextSlide + 1);
    });

    //wedding d-day calc
    var Dday = new Date(2022, 11, 10);    // D-day(2022년 12월(-1) 10일)를 셋팅한다.
    var now = new Date();

    var gap = now.getTime() - Dday.getTime();
    var result = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;

    $('#weddingDay').html(result);

    //bank accordion
    $('.main-thx__box-title').each(function(){
        $(this).click(function(){
            $(this).parent().toggleClass('main-thx__box--active');
            $(this).children().toggleClass('icon-arrow--active');
            $(this).next('.main-thx__box-bank').toggleClass('main-thx__box-bank--active');
        });
    });

    //popup
    $('#PopTel').click(function(){
        $('#popup').show();
    });
    $('#popupClose').click(function(){
        $('#popup').hide();
    });

    $('#data-copy01').click(function() {
        $('#data-area01').attr('type', 'text');
        $('#data-area01').select();
        var copy = document.execCommand('copy');
        $('#data-area01').attr('type', 'hidden');
        if(copy) {
            alert("복사되었습니다:)");
        }
    });

    $('#data-copy02').click(function() {
        $('#data-area02').attr('type', 'text');
        $('#data-area02').select();
        var copy = document.execCommand('copy');
        $('#data-area02').attr('type', 'hidden');
        if(copy) {
            alert("복사되었습니다:)");
        }
    });

    $('#data-copy03').click(function() {
        $('#data-area03').attr('type', 'text');
        $('#data-area03').select();
        var copy = document.execCommand('copy');
        $('#data-area03').attr('type', 'hidden');
        if(copy) {
            alert("복사되었습니다:)");
        }
    });

    $('#data-copy04').click(function() {
        $('#data-area04').attr('type', 'text');
        $('#data-area04').select();
        var copy = document.execCommand('copy');
        $('#data-area04').attr('type', 'hidden');
        if(copy) {
            alert("복사되었습니다:)");
        }
    });

    $('#data-copy05').click(function() {
        $('#data-area05').attr('type', 'text');
        $('#data-area05').select();
        var copy = document.execCommand('copy');
        $('#data-area05').attr('type', 'hidden');
        if(copy) {
            alert("복사되었습니다:)");
        }
    });

    $('#data-copy06').click(function() {
        $('#data-area06').attr('type', 'text');
        $('#data-area06').select();
        var copy = document.execCommand('copy');
        $('#data-area06').attr('type', 'hidden');
        if(copy) {
            alert("복사되었습니다:)");
        }
    });
    $('#data-copy-link').click(function() {
        $('#data-area-link').attr('type', 'text');
        $('#data-area-link').select();
        var copy = document.execCommand('copy');
        $('#data-area-link').attr('type', 'hidden');
        if(copy) {
            alert("복사되었습니다:)");
        }
    });

    //bgm

    function bgm_player() {
        var bgm = document.getElementById("skin_bgm");

        if (bgm.paused) {
            bgm.play();
            $(".main-visual__btn").find('img').attr("src", "assets/images/icon/icon_music_off.svg");
        } else {
            bgm.pause();
            $(".main-visual__btn").find('img').attr("src", "assets/images/icon/icon_music_on.svg");
        }
    }


    AOS.init();

});