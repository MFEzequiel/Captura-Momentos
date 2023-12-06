const d = document;
// boton de hamburgesa
const bt = d.querySelector('.bt');
const dv = d.querySelectorAll('.d');
// navegación del header
const nv = d.querySelector('.hnav');
const ul = d.querySelector('.menu');
// cuadro de código
const code = d.querySelectorAll('.code');
const btCode = d.querySelectorAll('.icon');
let index = 0;


d.addEventListener('DOMContentLoaded',()=>{
  bt.addEventListener('click', ()=>{
    for(let i =0; i<dv.length; i++){
      dv[i].classList.toggle('div');
    };
    nv.classList.toggle('active');
  });
  
  function createNav(link,link1,link2,link3,link4,link5){
    return `
    <li><a class="hhnav" href="${link}">Inicio</a></li>
    <li><a class="hhnav" href="${link1}">HTML</a></li>
    <li><a class="hhnav" href="${link2}">CSS</a></li>
    <li><a class="hhnav" href="${link3}">JavaScript</a></li>
    <li><a class="hhnav" href="${link4}">Python</a></li>
    <li><a class="hhnav" href="${link5}">Proyectos</a></li>
    `
  }
  
  let link = ul.getAttribute('data-1');
  let link1 = ul.getAttribute('data-2');
  let link2 = ul.getAttribute('data-3');
  let link3 = ul.getAttribute('data-4');
  let link4 = ul.getAttribute('data-5');
  let link5 = ul.getAttribute('data-6');

  ul.innerHTML = createNav(link,link1,link2,link3,link4,link5);

  function showCode(){
    code.forEach((btCodeItems,idx)=>{
      if (idx === index){
        btCodeItems.classList.toggle('active');
      };
    });
  };

  function selectCode(){
    for (let i = 0; i < btCode.length;i++){
      btCode[i].addEventListener('click', ()=>{
        index = i % btCode.length;
        showCode();
      })
    }
  }
  selectCode();
});