
document.getElementById('sB').value = window.sessionStorage.search;
function save(){

  window.sessionStorage.setItem("search", document.getElementById('sB').value); 
 //window.alert( window.sessionStorage.search);
}

function load(){
    document.getElementById('sB').value = window.sessionStorage.search;
}