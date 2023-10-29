  // Función para manejar el evento de clic en el dropdown
  function toggleDropdown(button, menu) {
    button.addEventListener('click', function () {
      // Alternar la visibilidad del menú
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    });
  }

  // Obtén referencias a los elementos del DOM y aplica la función a los dropdowns
  const dropdownButton1 = document.getElementById('opendropdown');
  const menu1 = document.getElementById('openmenu');
  toggleDropdown(dropdownButton1, menu1);

  const dropdownButton2 = document.getElementById('opendropdown2');
  const menu2 = document.getElementById('openmenu2');
  toggleDropdown(dropdownButton2, menu2);

  
    
    
