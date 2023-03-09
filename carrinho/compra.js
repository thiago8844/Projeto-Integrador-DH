 
const formulario = document.querySelector('.area-cupom');
const total = document.querySelector("#total-valor");
console.log(formulario)
formulario.addEventListener('submit', function(evento){
   evento.preventDefault();
   const caixaCupom = formulario.querySelector("#cupom");

   if(caixaCupom.value.toLowerCase() === "menos15") {
    caixaCupom.value = "";
    total.textContent = Number(total.textContent) - 15;
   }
})

