// Insert your code here.
var slideIndex=0;
showSlide();
function showSlide(){
    var i;
    var slides=document.getElementsByClassName("c");
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex=1;
    }
    slides[slideIndex-1].style.display="flex";
    setTimeout(showSlide,2500);
}
function toggleDropdown(){
    document.getElementsById("menu-bar").classlist.toggle("change");
    document.getElementsById("navbar-center").classlist.toggle("dropup");
    document.getElementsById("menu-bar").classlist.toggle("dropdown");
}