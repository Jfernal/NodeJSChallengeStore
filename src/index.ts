import { serverConfig } from './modules/server';
const startServer = () => {
  try {
    const app = serverConfig();

    const port = 3000;
    app.listen(port, () => {
      console.log(`Servidor en funcionamiento en http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
}

startServer();