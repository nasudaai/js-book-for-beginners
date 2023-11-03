const preface = document.createElement('section');
const paraPreface = document.createElement('p');
paraPreface.textContent = 'This is the code that allows you to try out JavaScript quickly';


preface.appendChild(paraPreface);

const quickCode = document.createElement('code');
quickCode.style.paddingLeft = '5px';
quickCode.innerHTML = `<span class="promptChar" style="color: green"> &gt;</span> alert(0)`;
quickCode.style.color = 'white';
quickCode.style.backgroundColor = 'black';

preface.appendChild(quickCode);

export { preface };