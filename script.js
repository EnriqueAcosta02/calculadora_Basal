const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    let DATO = document.getElementById('peso').valueAsNumber;
    if (!isNaN(DATO) && DATO > 0) {
        ERROR.style.display = 'none';
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo / 24;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + '= ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});

function calcFlujo(DATO) {
    let aux = 0;
    if (DATO <= 10) {
        aux = DATO * 100;
    } else if (DATO < 20) {
        aux = aux + (DATO - 10) * 50 + 10 * 100;
    } else {
        aux = aux + (DATO - 20) * 20 + 10 * 100 + 10 * 50;
    }
    return aux;
}
