document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.getElementById('menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');nav.style.display=open?'flex':'';nav.style.position=open?'absolute':'';nav.style.top=open?'76px':'';nav.style.right=open?'5vw':'';nav.style.background=open?'#070b16':'';nav.style.padding=open?'20px':'';nav.style.flexDirection=open?'column':'';});
