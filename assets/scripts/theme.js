const html = document.querySelector('html');

const renderizarIconeETextoBotao = (button) => {
     const tagI = document.createElement('i');
     tagI.classList.add('fa-lightbulb');
     
     button.innerHTML = '';

     if (html.classList == 'dark') {
          tagI.classList.remove('fa-regular');
          tagI.classList.add('fa-solid');
          tagI.classList.add('ligth');
          button.innerText = 'Claro';

     } else {
          tagI.classList.remove('fa-solid');
          tagI.classList.remove('ligth');
          tagI.classList.add('fa-regular');
          button.innerText = 'Escuro';
     }

     button.prepend(tagI);
}

const salvarTemaLocalStorage = () => {
     html.classList == 'dark'? localStorage.setItem('temaCentralRfk', 'dark'): localStorage.removeItem('temaCentralRfk');
}

const aplicarTemaSalvoLocalStorage = () => { 
     const temaSalvo = localStorage.getItem('temaCentralRfk');

     temaSalvo ? html.classList.add(temaSalvo) : html.classList.remove('dark');
}

const alterarTema = () => { 
     const button = document.querySelector('.tema');
     renderizarIconeETextoBotao(button);
     
     button.addEventListener('click', () => {
          html.classList.toggle('dark');
          renderizarIconeETextoBotao(button);
          salvarTemaLocalStorage();
     })

     aplicarTemaSalvoLocalStorage();
}

alterarTema();