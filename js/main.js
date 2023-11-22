const d = document;
const bt = d.querySelector('.bt');
const dv = d.querySelectorAll('.d');
const nv = d.querySelector('.hnav');

bt.addEventListener('click', ()=>{
  for(let i =0; i<dv.length; i++){
    dv[i].classList.toggle('div')
  }
  nv.classList.toggle('active');
});