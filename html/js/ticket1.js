document.querySelector('#registro').addEventListener('click', function() {
    userAction();

});

let url = `http://localhost:5000/api/topic`;

function userAction() {
    var info = {
        Iname: document.getElementById('Iname').value,
        Iemail: document.getElementById('Iemail').value,
        Iphone: document.getElementById('Iphone').value,
        Iarea: document.getElementById('Iarea').value,
        Idesc: document.getElementById('Idesc').value
    }
    var parsed = JSON.stringify(info);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", 'Access-Control-Allow-Origin', "application/json");
    xhttp.send(parsed);
    console.log(parsed);
}