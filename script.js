
/* Animação do botão de "sobre" */

document.querySelectorAll('.story-btn').forEach(btn =>{
  btn.addEventListener('click', ()=> {
  	btn.classList.toggle('change') /* texto de descrição */
  	btn.nextElementSibling.classList.toggle('change') /* linha do botão */
  })
})

/**/