// Load JSON and display items
async function loadCollection() {
    const response = await fetch('../js/data.json');
    const items = await response.json();
  
    // Select the container where the items will be added
    const container = document.getElementById('collection-container');
    
    // Clear any existing content (optional)
    container.innerHTML = '';
  
    // Loop through items and create HTML for each
    items.forEach(item => {
      // Create a div for the item box
      const itemBox = document.createElement('div');
      itemBox.classList.add('collection-item');
  
      // Populate item box with HTML
      itemBox.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
  
      // Append the item box to the container
      container.appendChild(itemBox);
    });
  }
  
  // Call function to load and display items
  loadCollection(); 

  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
    const content = document.querySelector('.carousel');
    if (menu.classList.contains('show')) {
      const menuHeight = menu.scrollHeight; 
      content.style.marginTop = `${menuHeight}px`; 
    } else {
      content.style.marginTop = '0'; 
    }
  }

  



