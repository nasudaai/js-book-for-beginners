const inputArea = document.createElement('section');
const inputAreaTitle = document.createElement('h2');
inputAreaTitle.textContent = 'Input Area';


const input = document.createElement('input');
input.setAttribute('placeholder', 'alert(0)');
input.addEventListener('change', () =>{
    alert('alert');
})

inputArea.appendChild(inputAreaTitle);
inputArea.appendChild(input);
export { inputArea };