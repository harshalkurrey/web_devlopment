function toggleVisibility() {
  const element = document.getElementById('targetElement');
  
  element.classList.toggle('is-hidden');
  
  const button = document.querySelector('button');
  if (element.classList.contains('is-hidden')) {
    button.textContent = "Show Element";
  } else {
    button.textContent = "Hide Element";
  }
}