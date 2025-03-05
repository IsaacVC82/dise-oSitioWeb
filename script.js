     // Toggle menú responsive
     const menuBtn = document.getElementById('menuBtn');
     const mobileMenu = document.getElementById('mobileMenu');

     menuBtn.addEventListener('click', () => {
         mobileMenu.classList.toggle('hidden');
     });

     // Cambiar texto dinámicamente
     function cambiarTexto(nuevoTexto) {
         alert(nuevoTexto);
     }