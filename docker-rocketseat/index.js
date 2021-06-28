const express = require('express');

const PORT = 3000;  // onde setamos a porta da nossa aplicação.
const HOST = '0.0.0.0';  // aqui ele repassa a rota para a máquina.

const app = express();  // instanciamos o express.

app.get('/', (req, res) => {
     res.send('Hello World');
});

app.listen(PORT, HOST);  // aplica as configurações acima.