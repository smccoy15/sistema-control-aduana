using System;
using System.Collections.Generic;
using System.Text.Json;

class Program
{
    public class Embarque
    {
        public string Id_Embarque { get; set; }
        public string Destino { get; set; }
        public double Peso_Toneladas { get; set; }
        public string Estado { get; set; }
    }

    // Esta función simula lo que respondería el API de C# en la web
    public static string EndpointObtenerEmbarques()
    {
        List<Embarque> datosDeSQL = new List<Embarque>()
        {
            new Embarque { Id_Embarque = "EMB-001", Destino = "Cortés", Peso_Toneladas = 18.50, Estado = "Completado" },
            new Embarque { Id_Embarque = "EMB-002", Destino = "Tegucigalpa", Peso_Toneladas = 26.80, Estado = "En Ruta" },
            new Embarque { Id_Embarque = "EMB-003", Destino = "San Pedro Sula", Peso_Toneladas = 14.20, Estado = "Pendiente" }
        };

        return JsonSerializer.Serialize(datosDeSQL);
    }

    static void Main()
    {
        Console.WriteLine("🚀 [API BACKEND] Servidor escuchando en http://localhost:5000/api/embarques");
        string respuestaAPI = EndpointObtenerEmbarques();
        Console.WriteLine("\n[API RESPUESTA]: " + respuestaAPI);
    }
}