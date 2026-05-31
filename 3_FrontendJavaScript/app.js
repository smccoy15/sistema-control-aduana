// URL simulada del servidor backend de C#
const URL_API = "http://localhost:5000/api/embarques";

document.getElementById("btnProcesar").addEventListener("click", async () => {
    const contenedorPantalla = document.getElementById("pantallaResultados");
    contenedorPantalla.innerHTML = "<p>⏳ Conectando con el backend de C# y consultando SQL Server...</p>";

    try {
        // 1. Hacemos la petición de red asíncrona (Fetch)
        // Simulamos la espera de red de 1.5 segundos
        const respuestaUnica = await obtenerDatosDelServidorSimulado();
        
        // 2. Convertimos la respuesta de texto JSON a objetos utilizables
        const embarques = JSON.parse(respuestaUnica);
        
        // 3. Filtramos los datos (Regla de negocio)
        const infracciones = embarques.filter(emb => emb.Peso_Toneladas > 25.0);
        
        contenedorPantalla.innerHTML = ""; // Limpiamos el cargando

        // 4. Pintamos en la página web
        if (infracciones.length > 0) {
            infracciones.forEach(emb => {
                contenedorPantalla.innerHTML += `
                    <div class="alerta">
                        <strong>⚠️ ALERTA DE SEGURIDAD (Datos Reales):</strong><br>
                        El contenedor <strong>${emb.Id_Embarque}</strong> hacia <strong>${emb.Destino}</strong> 
                        tiene sobrepeso de <strong>${emb.Peso_Toneladas} T</strong>.
                    </div>
                `;
            });
        } else {
            contenedorPantalla.innerHTML = "<p style='color: #4caf50;'>✅ Todo en orden en la base de datos.</p>";
        }

    } catch (error) {
        contenedorPantalla.innerHTML = `<p style='color: red;'>❌ Error de conexión con el servidor: ${error.message}</p>`;
    }
});

// Función auxiliar para simular el viaje por la red local
function obtenerDatosDelServidorSimulado() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Retorna exactamente lo que genera el backend en C#
            resolve(`[
                { "Id_Embarque": "EMB-001", "Destino": "Cortés", "Peso_Toneladas": 18.5, "Estado": "Completado" },
                { "Id_Embarque": "EMB-002", "Destino": "Tegucigalpa", "Peso_Toneladas": 22.8, "Estado": "En Ruta" },
                { "Id_Embarque": "EMB-003", "Destino": "San Pedro Sula", "Peso_Toneladas": 14.2, "Estado": "Pendiente" }
            ]`);
        }, 1500); 
    });
}