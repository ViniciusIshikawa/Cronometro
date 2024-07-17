const relogio = document.querySelector('#relogio');

let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo;

function iniciar() {
    intervalo = setInterval(() => {
        segundos++;
    
        if(segundos === 60) {
            minutos++;
            segundos = 0;
            
            if(minutos === 60) {
                horas++;
                minutos = 0;
            };
        };
    
        relogio.innerHTML = horas.toString().padStart(2, '0') + ':' + 
                            minutos.toString().padStart(2, '0') + ':' +
                            segundos.toString().padStart(2, '0');
    }, 1000);
};

function pausar() {
    clearInterval(intervalo);
}
