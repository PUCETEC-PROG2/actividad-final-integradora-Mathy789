document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formulario");

    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const descripcion = document.getElementById("descripcion").value.trim();
            const mensaje = document.getElementById("mensaje");

            let errores = [];

            if (nombre.length < 3) {
                errores.push("El nombre debe tener mínimo 3 caracteres.");
            }

            if (!email.includes("@") || !email.includes(".")) {
                errores.push("El email no es válido.");
            }

            if (descripcion.length < 10) {
                errores.push("La descripción debe tener mínimo 10 caracteres.");
            }

            if (errores.length > 0) {
                mensaje.innerHTML = errores.join("<br>");
                mensaje.style.color = "red";
            } else {
                mensaje.innerHTML = "Formulario enviado correctamente ✅";
                mensaje.style.color = "green";
                formulario.reset();
            }
        });
    }

});