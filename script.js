const anos = document.getElementById('anos')
const meses = document.getElementById('meses')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const milisegundo = document.getElementById('milisegundo')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let ano = dateToday.getFullYear();
    let mes = dateToday.getMonth() + 1;
    let dia = dateToday.getDate();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let ml = dateToday.getMilliseconds();

    if (mes < 10) mes = '0' + mes;

    if (dia < 10) dia = '0' + dia;

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    if (ml < 100) ml = '0' + ml;

    anos.textContent = ano;
    meses.textContent = mes;
    dias.textContent = dia;
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    milisegundo.textContent = ml;

})