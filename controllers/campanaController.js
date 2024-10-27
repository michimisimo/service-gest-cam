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
    const id = req.params;
    const data = req.body;
    try {
        await campanaService.updateCampana(id, data);
        res.status(200).json({ message: 'informacion de la campaña actualizada exitosamente.' })
    } catch (error) {
        res.status(500).json({ error: error.message })
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
}
