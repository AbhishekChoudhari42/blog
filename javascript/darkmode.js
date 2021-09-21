

var b = document.querySelector('body')

let darkValue = 0
if(window.localStorage.getItem('dark')){
    darkValue = parseInt(window.localStorage.getItem('dark'))


}

console.log(0)
if(darkValue){
 
    b.classList.add('add-dark')
}else{
  
    b.classList.remove('add-dark')
}


