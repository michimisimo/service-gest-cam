const campanaService = require('../services/campanaService');

exports.getCampanas = async (req, res) => {
    try {
        const data = await campanaService.getCampanas();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};