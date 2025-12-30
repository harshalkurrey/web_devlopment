// Global references for elements
const box = document.getElementById('interactiveBox');
const statusMsg = document.getElementById('statusMessage');
const inputField = document.getElementById('keyListenerInput');

function handleMouseOver() {
  box.style.backgroundColor = 'yellow';
  statusMsg.textContent = 'Status: Mouse entered the box.';
}

function handleClick() {
  box.textContent = 'Clicked!';
  box.style.backgroundColor = 'lightcoral';
  alert('Box Clicked! The click listener is permanent.');
}

function handleKeyPress(event) {
  statusMsg.textContent = `Status: Key pressed on input field: ${event.key}`;
  if (event.key === 'Enter') {
    alert('You pressed Enter!');
  }
}

function handleGlobalKey(event) {
  if (event.key === 'r' || event.key === 'R') {
    removeAllListeners();
  } else if (event.key === 's' || event.key === 'S') {
    restoreListeners();
  }
}


function initializeListeners() {
 
  box.addEventListener('click', handleClick); 
  
  box.addEventListener('mouseover', handleMouseOver);
  box.addEventListener('mouseout', handleMouseOut);
  
  inputField.addEventListener('keydown', handleKeyPress);

  document.addEventListener('keyup', handleGlobalKey);

  statusMsg.textContent = 'Status: All listeners initialized.';
}

function handleMouseOut() {
  box.style.backgroundColor = 'lightblue';
  statusMsg.textContent = 'Status: Mouse left the box.';
}

function removeAllListeners() {

  box.removeEventListener('mouseover', handleMouseOver);
  box.removeEventListener('mouseout', handleMouseOut);
  
  statusMsg.textContent = 'Status: Hover listeners **REMOVED**. The box will no longer change color on hover.';
  box.style.backgroundColor = 'grey';
  console.log('Hover listeners removed.');
}

function restoreListeners() {
  // Re-add the listeners that were removed
  box.addEventListener('mouseover', handleMouseOver);
  box.addEventListener('mouseout', handleMouseOut);

  statusMsg.textContent = 'Status: Hover listeners **RESTORED**. Press the R key to stop them again.';
  box.style.backgroundColor = 'lightblue';
  console.log('Hover listeners restored.');
}

initializeListeners();