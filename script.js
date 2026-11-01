(function() {
    const textoObj = document.getElementById("texto-objetivo");
    let textoObjetivo = localStorage.getItem("texto")

    document.addEventListener("DOMContentLoaded", () => {
        textoObj.textContent = textoObjetivo || "";
    })

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
            console.log("error")
        } else if (textoEscrito.length == textoObjetivo.length) {
            console.log("victoria");
            textoEscritoEspacio.disabled = true;
        }
    })
})()