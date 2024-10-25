const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = 3001;

// Habilitar CORS
app.use(cors());

// Configura Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Ruta para obtener datos de campañas
app.get('/getCampanas', async (req, res) => {
    const { data, error } = await supabase
        .from('campana')
        .select(`
            id_campana, 
            nombre, 
            fecha_creacion, 
            fecha_programada, 
            hora_programada, 
            id_tipo_campana, 
            tipo_campana(nombre)
        `);

    if (error) {
        res.status(500).json({ error: error.message });
    } else {
        res.status(200).json(data);
    }
});


app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
