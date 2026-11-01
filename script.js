(function() {
    const textoObj = document.getElementById("texto-objetivo");
    let textoObjetivo = localStorage.getItem("texto") || "Escribe tu propio texto en la casilla de arriba";

    document.addEventListener("DOMContentLoaded", () => {
        textoObj.textContent = textoObjetivo;
}   )

    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        const datos = new FormData(formulario);
        const texto = datos.get("texto")

        localStorage.setItem("texto", texto);
        textoObjetivo = texto;
        textoObj.textContent = texto;
    })

    const textoEscritoEspacio = document.getElementById("espacio-texto")
    textoEscritoEspacio.addEventListener("input", () => {
        const textoEscrito = textoEscritoEspacio.value;
        if (textoObjetivo.slice(0, textoEscrito.length) != textoEscrito) {
            textoEscritoEspacio.classList.add("error");
            textoEscritoEspacio.classList.remove("victoria");
        } else if (textoEscrito.length == textoObjetivo.length) {
            textoEscritoEspacio.classList.remove("error");
            textoEscritoEspacio.classList.add("victoria");
            textoEscritoEspacio.disabled = true;
            document.getElementById("felicitacion").style.display = "block";
        } else {
            textoEscritoEspacio.classList.remove("error", "victoria");
        }
    })
})()