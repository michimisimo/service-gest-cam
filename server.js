const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/campanaRoutes');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Usar las rutas
app.use('/', usuarioRoutes);

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
