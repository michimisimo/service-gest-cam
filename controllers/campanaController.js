const campanaService = require('../services/campanaService');

exports.getCampanas = async (req, res) => {
    try {
        const data = await campanaService.getCampanas();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCampana = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await campanaService.updateCampana(id, data);
        res.status(200).json({ message: 'informacion de la campaña actualizada exitosamente.' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

exports.updateEstadoCampana = async (req, res) => {
    const id = req.params.id;
    const { id_estado } = req.body;  // Extraer id_estado del cuerpo de la solicitud

    try {
        await campanaService.updateEstadoCampana(id, id_estado);  // Pasar id_estado al servicio
        res.status(200).json({ message: 'estado de la campaña actualizado exitosamente.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteCampana = async (req, res) => {
    const id = req.params;
    try {
        await campanaService.deletecampana(id);
        res.status(200).json({ message: 'campaña eliminada exitosamente.' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

exports.crearCampana = async (req, res) => {
    const { nombre, fecha_programada, hora_programada, id_tipo_campana, id_estado } = req.body;
    try {
        const data = await campanaService.crearCampana({ nombre, fecha_programada, hora_programada, id_tipo_campana, id_estado });
        res.status(200).send({ message: 'campaña creada exitosamente', data });
    } catch (error) {
        res.status(400).send({ message: 'Error al crear campaña', error: error.message });
    }
};

exports.crearEmailCampana = async (req, res) => {
    const { correo_remitente, correo_destinatario, asunto, contenido, id_campana } = req.body;
    try {
        const data = await campanaService.crearEmailCampana({ correo_remitente, correo_destinatario, asunto, contenido, id_campana });
        res.status(200).send({ message: 'campaña creada exitosamente', data });
    } catch (error) {
        res.status(400).send({ message: 'Error al crear campaña', error: error.message });
    }
};

exports.getEmailCampana = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await campanaService.getEmailCampana(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};