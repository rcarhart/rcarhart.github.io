$(document).ready(function(){

$("h1").animate({ 
        'font-size' : '80px',
        'opacity': '1'
    },1000).animate({ 
        'font-size' : '10px',
        'opacity': '1'
    },500).animate({ 
        'font-size' : '60px',
        'opacity': '1'
    },1000);
    


    $("#heading2").delay(3000).fadeOut(function() {
  $(this).text("Front End Web Developer")
}).fadeIn().delay(1000).fadeOut(function() {
  $(this).text("HTML CSS SASS Bootstap Grid System")
}).fadeIn().delay(1000).fadeOut(function() {
  $(this).text("Back End Developer")
}).fadeIn().delay(1000).fadeOut(function() {
  $(this).text("Node.js Expres MongoDB")
}).fadeIn().delay(1000).fadeOut(function() {
  $(this).text("Full Stack Developer")
}).fadeIn();
  
    
});


