const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {

    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const limitBall = $ball.getBoundingClientRect();
    const limitStage = $stage.getBoundingClientRect();

    switch (e.keyCode) {
        case 37: // izquierda

            if (limitBall.left > limitStage.left) {

                e.preventDefault();

                x--;

            }

            break;
        case 38: // arriba

            if (limitBall.top > limitStage.top) {
                e.preventDefault();
                y--;
            }

            break;
        case 39: // derecha

            if (limitBall.right < limitStage.right) {
                e.preventDefault();
                x++;
            }

            break;
        case 40: // abajo

            if (limitBall.bottom < limitStage.bottom) {
                e.preventDefault();
                y++;

            }

            break;

        default:
            break;
    }

    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;


}

export function atajosDelTeclado(e) { // se crea una funcion, que como parametro es el event

    // se evalua que al mantener la tecla alt y "a" presionada se muestre una alerta
    if (e.key === "a" && e.altKey) {
        alert("Haz mostrado una alerta.");
    }

    if (e.key === "c" && e.altKey) {
        confirm("Haz mostrado una confirmacion.");
    }

    if (e.key === "p" && e.altKey) {
        let msj;
        msj = prompt("Haz mostrado un aviso!... Escribe un texto :D");
        if (msj === "") {
            alert("No haz escrito nada :(");
        } else if (msj === null) {
            alert("Operacion cancelada.");
        } else {
            alert("Haz escrito: " + msj);
        }
    }

}