# sistema-control-aduana
Sistema de control y tracking de cargas aduaneras desarrollado en arquitectura de 3 capas (SQL, C# y JavaScript).

# 🌐 ADUANATRACK — Sistema de Control y Tracking Aduanero

¡Bienvenido a **AduanaTrack**! Este es un proyecto integrado que simula el flujo de operaciones reales de una agencia de aduanas, estructurado bajo una **arquitectura de 3 capas** independiente y limpia.

El sistema permite a la agencia administrar el ingreso de contenedores y pólizas, mientras que ofrece a los clientes un portal web dinámico para consultar el estado legal y la selectividad del semáforo fiscal en tiempo real.

---

🚀 Arquitectura del Proyecto

Para mantener el código ordenado y escalable, el proyecto está dividido estrictamente en carpetas independientes:

**1_BaseDeDatos/**: Contiene el script oficial en `SQL` para la creación de las tablas relacionales (`CargasAduaneras`), almacenamiento de clientes, mercancías y la asignación del canal aduanero (Rojo/Verde).
**2_BackendCSharp/**: Desarrollado en **C# con .NET**. Simula la capa de servicios (API) encargada de procesar las consultas de negocio, aplicar filtros inteligentes con LINQ (`.FirstOrDefault`) y serializar las respuestas a formato **JSON** seguro para su transporte en red.
**3_FrontendJavaScript/**: Interfaz de usuario moderna tipo *Dashboard Oscuro*. Utiliza **JavaScript Asíncrono (`async/await`)** y persistencia de datos local para comunicar dinámicamente dos vistas principales:
    * `admin.html`: Panel privado donde la agencia registra nuevas cargas y actualiza estados de aforo.
    * `index.html`: Portal público optimizado para la consulta rápida del consignatario.

---

## 🛠️ Tecnologías y Conceptos Aplicados

* **Lenguajes:** JavaScript (ES6+), C# y SQL.
* **Diseño Web:** HTML5 y CSS3 personalizado en Modo Oscuro (Dark Mode).
* **Persistencia:** Manejo de datos estructurados e intercambio a través de texto ligero **JSON**.
* **Lógica de Datos:** Simulación de flujos síncronos/asíncronos y control de almacenamiento compartido.
