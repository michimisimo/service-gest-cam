const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.getAllCampanas = async () => {
    const { data, error } = await supabase
        .from('campana')
        .select(`
            id_campana, 
            nombre, 
            id_estado,
            estado_campana(nombre),
            fecha_creacion, 
            fecha_programada, 
            hora_programada, 
            id_tipo_campana, 
            tipo_campana(nombre)
        `);

    if (error) throw new Error(error.message);
    return data;
};

exports.UpdateCampana = async (id, dataCam) => {    
    const { data, error } = await supabase
        .from('campana')
        .update(dataCam)
        .eq('id_campana', id);

    if (error) throw new Error(error.message);
    return data;
};

exports.UpdateEstadoCampana = async (id) => {    
    const { data, error } = await supabase
        .from('campana')
        .update('id_estado', 1)
        .eq('id_campana', id);

    if (error) throw new Error(error.message);
    return data;
};

exports.deleteCampana = async (id) => {
    const { data, error } = await supabase
        .from('campana')
        .delete()
        .eq('id_campana', id)

    if (error) throw new Error(error.message);
    return data;
};

exports.insertCampana = async (campana) => {
    const { data, error } = await supabase
        .from('campana')
        .insert([campana])
    if (error) throw new Error(error.message);
    return data;
};    

exports.insertEmailCampana = async (email) => {
    const { data, error } = await supabase
        .from('email')
        .insert([email])
    if (error) throw new Error(error.message);
    return data;
};  

exports.getEmailCampana = async (id_campana) => {
    const { data, error } = await supabase
        .from('email')
        .select('*')
        .eq('id_campana', id_campana);

    if (error) throw new Error(error.message);
    return data;
};