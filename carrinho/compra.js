
cupom.addEventListener('change', function(){
    console.log(cupom.value)
  })
 
 
window.addEventListener('load', function() {

 const formulario = document.querySelector('form')

formulario.addEventListener('submit', function(evento){
   evento.preventDefault()
 })

});