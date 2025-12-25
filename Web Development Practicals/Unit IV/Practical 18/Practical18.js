// Function to run the main manipulation steps
function manipulateNodes() {
  const list = document.getElementById('list-container');
  const newItem = document.createElement('li'); 
  
  newItem.textContent = 'Item 3 (New - Created and Appended)';
  newItem.className = 'item-new';
  newItem.style.color = 'green';

  list.appendChild(newItem); 
  console.log('Appended a new list item.');
  
  const oldItem = document.getElementById('item-1');

  const replacementItem = document.createElement('li');
  replacementItem.textContent = 'Item 1 (Modified and Replaced)';
  replacementItem.style.fontWeight = 'bold';
  replacementItem.style.backgroundColor = '#f0f8ff'; // Light blue background

  if (oldItem) {
    list.replaceChild(replacementItem, oldItem);
    console.log('Replaced Item 1 with a modified version.');
  }
  const itemToRemove = document.getElementById('item-2');

  if (itemToRemove) {
    list.removeChild(itemToRemove);
    console.log('Removed Item 2.');
  }  
  const container = document.getElementById('main-container');
  container.style.borderColor = 'darkgreen';
  container.style.backgroundColor = '#e6ffe6';
}

// Function to reset the list for re-running the demo
function cleanup() {
  const container = document.getElementById('main-container');
  container.style.borderColor = '#ccc';
  container.style.backgroundColor = 'white';

  const list = document.getElementById('list-container');
  list.innerHTML = `
    <li class="item-old" id="item-1">Item 1 (Initial)</li>
    <li class="item-old" id="item-2">Item 2 (Initial - Target for removal)</li>
  `;
  console.log('List reset to initial state.');
}

// Ensure the reset function runs when the page loads to set the initial state
document.addEventListener('DOMContentLoaded', cleanup);