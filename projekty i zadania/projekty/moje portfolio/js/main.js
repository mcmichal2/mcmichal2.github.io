$(document).ready(function(){
   addScrolled();
    napisy();
    napisy2();
});

$(document).scroll(function(){
    addScrolled();
    napisy();
    napisy2();
});

function addScrolled(){
    var height = $('#main-nav').height();
    var scroll =$(window).scrollTop();
    
    if(scroll > height){
        $('#main-nav').addClass('transparent');
       
    }
    else {
        $('#main-nav').removeClass('transparent');
         
    }
}

function napisy(){
    var height = $('#portfolio').height();
//    var height2 = $('#content').height();
    var scroll =$(window).scrollTop();
    
    if(scroll >= height){
        $('.contact3').addClass('color');
       
    }      
    
    else {
        $('.contact3').removeClass('color');
         
    }
}
/*function napisy2(){
    var height2 = $('#ramka1').height();
//    var height2 = $('#content').height();
    var scroll =$(window).scrollTop();
    
    if(scroll >= height2){
        $('#ramka1').addClass('color1');
       
    }      
    
    else {
        $('#ramka1').removeClass('color1');
         
    }
}*/