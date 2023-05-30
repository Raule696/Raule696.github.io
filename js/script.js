var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById('header').outerHTML = this.responseText;
    }
},
xhttp.open('GET' , 'header.html', true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById('header-ad').outerHTML = this.responseText;
    }
},
xhttp.open('GET' , 'header.html', true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById('footer').outerHTML = this.responseText;
    }
},
xhttp.open('GET' , 'footer.html', true);
xhttp.send();

function mostrarPopup() {
    document.getElementById("miPopup").style.display = "block";
    }

function ocultarPopup() {
    document.getElementById("miPopup").style.display = "none";
    }

