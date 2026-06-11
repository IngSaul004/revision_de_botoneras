const express = require("express");
const path = require("path");
const app = express();

// Servir archivos estáticos desde la carpeta raíz
app.use(express.static(__dirname));

// Ruta explícita para / → entrega index.html directamente
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(3000, () => {
  console.log("✅ Servidor corriendo en http://localhost:3000");
});
