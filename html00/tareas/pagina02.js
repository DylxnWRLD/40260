export function loadXMLDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const xmlDoc = xhttp.responseXML;
        const alumno = xmlDoc.getElementsByTagName("ALUMNO");
        myFunction(alumno);
    }
    xhttp.open("GET", "alumnos.xml", true);
    xhttp.send();
}

function myFunction(alumno) {
    let table = "<tr><th>Nombre</th><th>Escuela</th><th>Nacimiento</th></tr>";
    for (let i = 0; i < alumno.length; i++) {
        table += "<tr><td>" +
            alumno[i].getElementsByTagName("NOMBRE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            alumno[i].getElementsByTagName("ESCUELA")[0].childNodes[0].nodeValue +
            "</td><td>" +
            alumno[i].getElementsByTagName("NACIMIENTO")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

const button = document.getElementById("Ejecutar")
button.addEventListener("click", loadXMLDoc)