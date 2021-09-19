

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

var darkMode = document.querySelector('.dark-mode')
var sun = document.querySelector('.dark-overlay')
var b = document.querySelector('body')

let darkValue = 0
if(window.localStorage.getItem('dark')){
    darkValue = parseInt(window.localStorage.getItem('dark'))
    console.log(darkValue)

}


if(darkValue){

        sun.classList.add('open')
        b.classList.add('add-dark')
}else{
    sun.classList.remove('open')
    b.classList.remove('add-dark')
}




darkMode.addEventListener('click',function(){

    window.localStorage.setItem('dark',JSON.stringify(toggle(darkValue)));


    sun.classList.toggle('open')
    b.classList.toggle('add-dark')

  
   
})
  


var menu = document.querySelector('.menu');





menu.addEventListener('click',function(){
    


    // gsap.to(".slide", {translate: 100, duration: 1});

    menu.classList.toggle('cancel');
  
   



    
    
    
})

