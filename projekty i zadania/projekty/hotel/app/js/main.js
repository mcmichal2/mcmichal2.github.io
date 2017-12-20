
  function backgroundSlide(){
        var element = $('.content-rooms');
        var backgrounds = ['url(../../img/3M1A5886a.png)','url(../../img/pokoj3os_posciel.png)'];
        var current = 0;
        function nextBackground(){
            element.css('background',backgrounds[current=++current % backgrounds.length]);
            setTimeout(nextBackground, 5000);
        }
        setTimeout(nextBackground, 5000);
        element.css('background', backgrounds[0]);
        }; 


$(document).ready(
    

    
    function () {
    var slider = $('#slider');
    var slideShow = $('.slide-show');
    var slideCount = 3;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
    //szerokosc slideshow
    console.log(slideWidth);
    $(slideShow).css('width', slideCount * 100 + '%');

    // nadanie marginesow i szerokosci

    slideShow.find('.single-slide').each(function (index) {
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': index * slideWidth + '%'
        });
    });

    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }
        var napis = $('.slider-caption').eq(newSlideIndex);

        napis.hide();

        var marginLeft = newSlideIndex * (-100) + '%';
slideIndex=newSlideIndex;
        slideShow.animate({
            'margin-left': marginLeft
        }, 800, function () {
            newSlideIndex = newSlideIndex;
            napis.fadeIn('slow');
        });
    }

    $('.prev-slide').click(function (event) {
        event.preventDefault();
        slide(slideIndex - 1);
    });
    
    $('.next-slide').click(function (event) {
        event.preventDefault();
        slide(slideIndex + 1);
    });
    
    
   
});

 