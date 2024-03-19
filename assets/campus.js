jQuery(document).ready(function($){

	$('.prlx').each(function(){
		gsap.fromTo($(this).find('img'),{y:"-50%"},{scrollTrigger:{trigger:$(this),start: "top bottom",end: "bottom top",markers: false,scrub: true,},y: "0%",ease:'none'});		
	});
	
	$('.legende').each(function(){
		gsap.fromTo($(this),{y:'30vh'},{scrollTrigger:{trigger:$(this).parent(),start: "top bottom",end: "bottom top",markers: false,scrub: true},y:'-30vh',ease:'none'});		
	});	

});


let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 6000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    itemActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

