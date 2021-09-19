var darkMode = document.querySelector('.dark-mode')
var sun = document.querySelector('.dark-overlay')
var b = document.querySelector('body')

let darkValue = 0
if(window.localStorage.getItem('dark')){
    darkValue = parseInt(window.localStorage.getItem('dark'))
    console.log(darkValue)

}

console.log(0)
if(darkValue){
    if(sun){
        sun.classList.add('open')

    }
    b.classList.add('add-dark')
}else{
    sun.classList.remove('open')
    b.classList.remove('add-dark')
}




darkMode.addEventListener('click',function(){

    window.localStorage.setItem('dark',JSON.stringify(toggle(darkValue)));


    if(sun){
        sun.classList.add('open')

    }
    b.classList.toggle('add-dark')

  
   
})