const cronometro = document.querySelector('#cronometro');

let horas    = 0;
let minutos  = 0;
let segundos = 0;
let intervalo = null;

function iniciar() {
    if(intervalo !== null) { 
        return;
    };

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
    
        cronometro.innerHTML = horas.toString().padStart(2, '0') + ':' + 
                            minutos.toString().padStart(2, '0') + ':' +
                            segundos.toString().padStart(2, '0');
    }, 1000);
};

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function voltar() {
    clearInterval(intervalo);
    intervalo = null;
    horas = 0;
    minutos = 0;
    segundos = 0;

    cronometro.innerHTML = '00:00:00';
}
