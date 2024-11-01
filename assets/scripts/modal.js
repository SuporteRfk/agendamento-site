

const abrirModal = (tagModal) => {
     tagModal.style.display = 'flex';
}

const fecharModal = (tagModal) => { 
     tagModal.style.display = 'none';
}

const modal = () => { 
     const divModal = document.querySelector('.modal');
     const btnFecharModal = document.querySelector('.modal_btn_fechar');

     const modalExibido = sessionStorage.getItem('modalExibido');

     if (!modalExibido) { 
          abrirModal(divModal);
          sessionStorage.setItem('modalExibido', 'true');
     }

     btnFecharModal.addEventListener('click', () => {
          fecharModal(divModal);
     });

     
}

modal();
