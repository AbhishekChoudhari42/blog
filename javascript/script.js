

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



function toggle(n){
    return n === 1?0:1
}
// dark mode 


  


var menu = document.querySelector('.menu');





menu.addEventListener('click',function(){
    


    // gsap.to(".slide", {translate: 100, duration: 1});

    menu.classList.toggle('cancel');
  
   



    
    
    
})

