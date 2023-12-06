var output = document.createElement('p');
document.body.appendChild(output);
output.textContent = localStorage.getItem('user-value');
window.addEventListener('storage', function(event) {
 if (event.key === 'user-value') {
 output.textContent = event.newValue;
 }
});