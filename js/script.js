'use strict';
// Ocultar la navegación móvil después de seleccionar una sección.
document.querySelectorAll('#menu .nav-link').forEach(enlace=>{
  enlace.addEventListener('click',()=>{
    const menu=document.getElementById('menu');
    if(menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});
// Formulario demostrativo: no envía ni guarda datos.
document.getElementById('form-opinion').addEventListener('submit',evento=>{
  evento.preventDefault();
  document.getElementById('respuesta').textContent='¡Gracias por participar! Esta es una demostración local; tu opinión no se ha enviado.';
});
