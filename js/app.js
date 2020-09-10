import { atajosDelTeclado, moveBall } from "./module/eventos.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

})

d.addEventListener("keydown", (e) => {
    atajosDelTeclado(e);
    moveBall(e, ".ball", ".stage");
})