import { Empresa } from "/src/clases/empresa.js";
import {Importacion} from '/src/clases/importaciones.js';

let empresa = new Empresa(1, "empresa prueba", "76.887.934-5");
let importacion = new Importacion(1, "producto Jabon", 20, 1000);
empresa.agregarImportacion(importacion);
console.log(`Total de importaciones para la empresa ${empresa.nombre}: ${empresa.obtenerTotalImportaciones()}`);
