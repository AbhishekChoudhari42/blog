

// preloader

paceOptions = {
    ajax:true,
    document:true,
    eventLag:false
}
Pace.on('done',function(){
    document.querySelector('.preloader').classList.add('donee')
    document.querySelector('.pace').style.display = 'none';
})







var darkMode = document.querySelector('.dark-mode')
var sun = document.querySelector('.dark-overlay')
var b = document.querySelector('body')
darkMode.addEventListener('click',function(){
    sun.classList.toggle('open')
    b.classList.toggle('add-dark')
    console.log('clikk')
})
var menu = document.querySelector('.menu');





menu.addEventListener('click',function(){
    


    // gsap.to(".slide", {translate: 100, duration: 1});

    menu.classList.toggle('cancel');
  
   



    
    
    
})