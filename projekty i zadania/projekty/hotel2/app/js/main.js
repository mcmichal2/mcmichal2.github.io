$(document).ready(function(){
    $('.slider').bxSlider();
    $('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 600
    
    });
    
$('.navbar-toggler').click(function(){
        
        
        $('.nav-item').toggleClass('hide')
           
    });
    
    
});
window.onscroll = function() {
    scrollFunction();
};
   


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
    
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

    
    
