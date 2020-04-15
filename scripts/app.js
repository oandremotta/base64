function generate(){
    let inputTxt = document.getElementById('txt');
    if(!inputTxt.value){
        alert("Please input something");
        return;
    }
    let base64 = btoa(inputTxt.value);
    let span = document.createElement('span');
    span.innerHTML = base64;
    let body = document.getElementById('result');
    body.appendChild(span);
}

function decode(){
    let inputTxt = document.getElementById('txt');
    if(!inputTxt.value){
        alert("Please input something\nTeste");
        return;
    }
    let base64 = atob(inputTxt.value);
    let span = document.createElement('span');
    span.innerHTML = base64;
    let body = document.getElementById('result');
    body.appendChild(span);
}
