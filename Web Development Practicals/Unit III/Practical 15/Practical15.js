function manipulateDOM() {
  const elementById = document.getElementById('target-id');
  
  if (elementById) {
    
    elementById.innerHTML = 
      "✅ **Success!** Content changed using **`getElementById('target-id')`** and `innerHTML`.";
    elementById.style.backgroundColor = '#d4edda'; // Light green
    elementById.style.padding = '10px';
  }
  const elementByQuery = document.querySelector('.content-text:nth-child(2)');
  
  if (elementByQuery) {
    elementByQuery.innerHTML = 
      "🚀 **Success!** Content changed using **`querySelector('.content-text:nth-child(2)')`** and `innerHTML`.";
    elementByQuery.style.color = '#0c5460'; // Dark teal text
    elementByQuery.style.fontWeight = 'bold';
  }
  const outputArea = document.getElementById('output-area');
  
  if (outputArea) {
    outputArea.innerHTML += `
      <p style="border: 1px solid #007bff; padding: 5px;">
        🌟 This entire paragraph was **created and injected** into the 'output-area' div using **\`innerHTML\`**.
      </p>
      <p>
        <small>Note: Be cautious with innerHTML when using user input, as it can introduce XSS security risks.</small>
      </p>
    `;
  }
}