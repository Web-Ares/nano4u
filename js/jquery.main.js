$(function(){

} );

var Shablon = function (obj) {
    this.obj = obj;


    this.init();
};
Shablon.prototype = {
    init: function () {
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function () {
        var self = this;

        return {
            addEvents: function () {

            },
            build: function () {
                self.core.addEvents();
            }
        };
    }
};

$(window).on({
    load: function () {
        
    }
});

$(".touch-menu").click(function(){
    $(".menu").toggleClass("active");
    return false;
});
$(".menu__close").click(function(){
    $(this).removeClass('active');
});

$(document).ready(function (){
    $(".scroll").click(function (){
        $('html, body').animate({
            scrollTop: $(".what-we-do").offset().top
        }, 1000);
        return false;
    });
});

$(document).ready(function (){
    $(".arron").click(function (){
        $('html, body').animate({
            scrollTop: $(".site").offset().top
        }, 2000);
        return false;
    });
});

$(document).ready(function() {
    function divresize(block, headerHeight) {
        var windowHeight = $(window).height(); //определяем высоту окна браузера
        $(block).css('height', windowHeight - headerHeight); //устанавливаем высоту блока(равно высоте окна за вычетом шапки и подвала)
    }

    divresize('.slide', 90); //вызываем функцию изменения размера блока
    $(window).bind("resize", function(){ //при изменении размера окна вызываем функцию
        divresize('.slide', 90);
    });
});
