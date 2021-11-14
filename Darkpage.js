
const nightModeStorage = localStorage.getItem ('gmtNightMode');
 const nightMode = document.querySelector ('# modo noturno');
  // caso tenha o valor no localStorage

if (nightModeStorage) { ativa o modo noturno
  document.documentElement.classList.add ('modo noturno');
   //já deixa o input marcado como ativo
   nightMode.checked = true; }
   //ao clicar em mudarmos como núcleos
    nightMode.addEventListener ('click', () => {
    //  adiciona a classe night-modeao html
      document.documentElement.classList.toggle ('night-mode');

 //se tiver um modo noturno de classe
 if (document.documentElement.classList.contains ('modo noturno')) {

 //salva o tema no localStorage
 localStorage.setItem ('gmtNightMode', true); Retorna; }

 //senão remove
 localStorage.removeItem ('gmtNightMode'); });
