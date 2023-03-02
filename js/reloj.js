const mostrarReloj = () => {
    //RELOJ
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;

    //CONSTANTES DE LA FECHA.
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    //SE SUPONE QUE AQUI, RETORNA EL INDICE DEL ARREGLO Y LO CONVIETE A STRING
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia}, ${mes}, ${año}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    //AGREGA EL EVENTO CLASSLIST QUE ES UNA LISTA DE CLASES, CON EL METODO TOGGLE SI NO ESTA LA CLASE LA AGREGA, SI ESTA LA QUITA
    document.getElementById('contenedor').classList.toggle('animar');
}
const formatoHora = (hora) => {
    if (hora < 10)
        hora = '0' + hora;
    return hora;
}

setInterval(mostrarReloj,1000)
