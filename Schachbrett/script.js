zeichneSchachbrett();
setTimeout(zeichneSchachbrett(), 500);
function zeichneSchachbrett() {
    let result = '';
    let color = '';
    for (let row = 0; row < 8; row++) {
        

        for (let column = 0; column < 8; column++) {
            if ((row + column) % 2 === 0) {
                color = 'white';
            } 
            else {
                color = 'black';
            }
            result += `<div class="${color}"></div>`;
        }
    }

    
    //todo: HTML-Code für Schachbrett erstellen
    //      und der Variable "result" zuweisen
  
    document.getElementsByTagName("body")[0].innerHTML = result;
}
function zeichneSchachbrett2() {
    let result = '';
    let color = '';
    for (let row = 0; row < 8; row++) {
        

        for (let column = 0; column < 8; column++) {
            if ((row + column) % 2 === 0) {
                color = 'white';
            } 
            else {
                color = 'black';
            }
            result += `<div class="${color}"></div>`;
        }
    }

    
    //todo: HTML-Code für Schachbrett erstellen
    //      und der Variable "result" zuweisen
  
    document.getElementsByTagName("body")[0].innerHTML = result;
}
