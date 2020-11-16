//const { response } = require("express");

document.querySelector('#leer').addEventListener('click', function() {
    obtenerDato();
});


function obtenerDato() {

    //console.log('click');

    let url = `http://localhost:5000/api/topic`;

    const lec = new XMLHttpRequest();
    lec.open('GET', url, true);
    lec.send();

    lec.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {

            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = ' ';
            for (let item of datos) {
                //console.log(item);
                resultado.innerHTML += `
                <tr>
                <td>${item.id}</td>
                <td>${item.Iname}</td>
                <td>${item.Iemail}</td>
                <td>${item.Iphone}</td>
                <td>${item.Iarea}</td>
                <td>${item.Idesc}</td>
                </tr>
                `
            }
        }
    }
};