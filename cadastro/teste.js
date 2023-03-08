cupom.addEventListener('change', function(){
    console.log(cupom.value)
  })


window.addEventListener('load', function() {

 const formulario = document.querySelector('form')

formulario.addEventListener('submit', function(evento){
   evento.preventDefault()
 })

});
Carlos Eduardo Vieira21:39
window.addEventListener('load', function() {
  const input = document.getElementById('nome')


  const banana = document.querySelector('form')
 
 banana.addEventListener('submit', function(evento){
    evento.preventDefault()
    console.log (banana.value)
  })

  input.addEventListener('change', function(){
    console.log(input.value)
  })
 
 });