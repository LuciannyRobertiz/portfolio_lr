/* var navHeight = 90;
var topSection = document.getElementById('top');
var skillsSection = document.getElementById('skills');
var contactSection = document.getElementById('contact');
var topLink = document.getElementById('top-link');
var skillsLink = document.getElementById('skills-link');
var contactLink =document.getElementById('contact-link');

console.log(topSection.offsetTop);

topLink.onclick = function () { window.scrollTo(0, topSection.offsetTop - navHeight); };
skillsLink.onclick = function () { window.scrollTo(0, skillsSection.offsetTop - navHeight); };
contactLink.onclick = function () { window.scrollTo(0, contactSection.offsetTop - navHeight); };

 */

 $(document).ready(function(){    
 	$("#top-link").click(function(){
     $("html, body").animate({scrollTop:0},500);
  });
 $("#skills-link").click(function(){
       $("html, body").animate({scrollTop:620},500);
    });
    $("#contact-link").click(function(){
        $("html, body").animate({scrollTop:1300},500);     });
 });

// $(document).ready(function(){

// $("#top-link").on("click", function(){
//     var posicion = $("#top").offset().;
//     $("html, body").animate({
//         scrollTop: posicion;
//     }, 1000); 
// });

// });