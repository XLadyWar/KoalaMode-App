// Menu HTML structure
const menuHTML = `
  <div class="menu-overlay">
    <div class="menu-header">
      <h2>Ajustes</h2>
      <button class="close-menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
        </svg>
      </button>
    </div>
    <div class="menu-content">
      <div class="menu-item" data-type="name">
        <div class="menu-item-left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
          </svg>
          <span>Nombre del usuario</span>
        </div>
        <div class="menu-item-right">
          <span class="menu-item-value" id="user-name-value"></span>
          <button class="edit-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="menu-item" data-type="focus">
        <div class="menu-item-left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/>
          </svg>
          <span>Configurar recordatorio</span>
        </div>
        <div class="menu-item-right">
          <span class="menu-item-value" id="focus-time-value"></span>
          <button class="edit-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="menu-item" data-type="break">
        <div class="menu-item-left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm0-8h2v6h-2z" fill="currentColor"/>
          </svg>
          <span>Configurar Koala Time</span>
        </div>
        <div class="menu-item-right">
          <span class="menu-item-value" id="break-time-value"></span>
          <button class="edit-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
`;

// Forms HTML structure
const formsHTML = `
  <div class="edit-form" id="name-form">
    <input type="text" id="user-name-input" placeholder="Ingresa tu nombre">
    <div class="edit-form-buttons">
      <button class="save-button">Guardar</button>
      <button class="cancel-button">Cancelar</button>
    </div>
  </div>

  <div class="edit-form" id="focus-form">
    <input type="number" id="focus-time-input" placeholder="Minutos de enfoque" min="1" max="60">
    <div class="edit-form-buttons">
      <button class="save-button">Guardar</button>
      <button class="cancel-button">Cancelar</button>
    </div>
  </div>

  <div class="edit-form" id="break-form">
    <input type="number" id="break-time-input" placeholder="Minutos de descanso" min="1" max="30">
    <div class="edit-form-buttons">
      <button class="save-button">Guardar</button>
      <button class="cancel-button">Cancelar</button>
    </div>
  </div>
`;

// Add menu and forms to the page
document.body.insertAdjacentHTML('beforeend', menuHTML);
document.body.insertAdjacentHTML('beforeend', formsHTML);

// Get DOM elements
const menuOverlay = document.querySelector('.menu-overlay');
const settingsButton = document.querySelector('.ajustes');
const closeMenuButton = document.querySelector('.close-menu');
const menuItems = document.querySelectorAll('.menu-item');

// Load saved values
function loadSavedValues() {
  const userName = localStorage.getItem('userName') || 'Usuario';
  const focusTime = localStorage.getItem('focusTime') || '25';
  const breakTime = localStorage.getItem('breakTime') || '5';

  document.getElementById('user-name-value').textContent = userName;
  document.getElementById('focus-time-value').textContent = `${focusTime} min`;
  document.getElementById('break-time-value').textContent = `${breakTime} min`;
}

// Toggle menu
function toggleMenu() {
  menuOverlay.classList.toggle('active');
}

// Handle edit button clicks
function handleEditClick(menuItem) {
  const type = menuItem.dataset.type;
  const form = document.getElementById(`${type}-form`);
  const input = form.querySelector('input');
  const currentValue = menuItem.querySelector('.menu-item-value').textContent;

  // Set current value in input
  if (type === 'name') {
    input.value = currentValue;
  } else {
    input.value = currentValue.replace(' min', '');
  }

  form.classList.add('active');
  
  // Focus the input
  setTimeout(() => {
    input.focus();
  }, 100);
}

// Handle save button clicks
function handleSaveClick(form) {
  const type = form.id.replace('-form', '');
  const input = form.querySelector('input');
  const valueDisplay = document.getElementById(`${type}-time-value`) || document.getElementById('user-name-value');
  const menuItem = document.querySelector(`[data-type="${type}"]`);

  let newValue = input.value.trim();

  if (type === 'name') {
    if (newValue) {
      localStorage.setItem('userName', newValue);
      valueDisplay.textContent = newValue;
      document.getElementById('nombre-usuario').textContent = newValue;
    }
  } else {
    const minutes = parseInt(newValue);
    if (minutes && minutes > 0) {
      const key = type === 'focus' ? 'focusTime' : 'breakTime';
      localStorage.setItem(key, minutes.toString());
      valueDisplay.textContent = `${minutes} min`;
    }
  }

  form.classList.remove('active');
}

// Handle cancel button clicks
function handleCancelClick(form) {
  form.classList.remove('active');
}

// Event listeners
settingsButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);

menuItems.forEach(item => {
  const editButton = item.querySelector('.edit-button');
  editButton.addEventListener('click', () => handleEditClick(item));
});

// Add event listeners to all forms
document.querySelectorAll('.edit-form').forEach(form => {
  const saveButton = form.querySelector('.save-button');
  const cancelButton = form.querySelector('.cancel-button');

  saveButton.addEventListener('click', () => handleSaveClick(form));
  cancelButton.addEventListener('click', () => handleCancelClick(form));
});

// Close popup when clicking outside
document.addEventListener('click', (e) => {
  const activeForm = document.querySelector('.edit-form.active');
  if (activeForm && !activeForm.contains(e.target) && !e.target.closest('.edit-button')) {
    activeForm.classList.remove('active');
  }
});

// Close popup when pressing Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const activeForm = document.querySelector('.edit-form.active');
    if (activeForm) {
      activeForm.classList.remove('active');
    }
  }
});

// Load saved values when the page loads
document.addEventListener('DOMContentLoaded', loadSavedValues);
