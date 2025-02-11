import { TAREFAS } from './constantes';

const etiquetasPrioridade = document.querySelectorAll('.etiqueta_prioridade');
etiquetasPrioridade.forEach(prioridade => {
  const text = prioridade.textContent.trim().toLowerCase();
  if (text === 'baixa') {
    prioridade.classList.add('etiqueta--baixa');
  } else if (text === 'média') {
    prioridade.classList.add('etiqueta--media');
  } else if (text === 'alta') {
    prioridade.classList.add('etiqueta--alta');
  }
})

function criarTarefa(){
  const listaDeTarefas = document.getElementById('listaDeTarefas');

  console.log(listaDeTarefas);

}
criarTarefa(

)



/*(etiqueta => {
    const prioridade = etiqueta.innerText.toLowerCase();
    switch (prioridade) {
        case 'alta':
            etiqueta.style.backgroundColor = 'red';
            break;
        case 'média':
            etiqueta.style.backgroundColor = 'orange';
            break;
        case 'baixa':
            etiqueta.style.backgroundColor = 'green';
            break;
        default:
            etiqueta.style.backgroundColor = 'gray';
            break;
});
    }


    
        
        //function() {
    //function adjustLayout() {
      //  const tarefas = document.querySelectorAll('.tarefa');
        //tarefas.forEach(tarefa => {
          //  const etiquetas = tarefa.querySelector('.etiquetas');
            //const descricao = tarefa.querySelector('.descrição_tarefa');

 //           if (window.innerWidth < 600) {
   //             etiquetas.style.display = 'block';
     //           descricao.style.marginTop = '10px';
       //     } else {
         //       etiquetas.style.display = 'flex';
           //     descricao.style.marginTop = '0';
        //    }
     //   });
  //  }

  //  adjustLayout();
  //  window.addEventListener('resize', adjustLayout);
//});
*/